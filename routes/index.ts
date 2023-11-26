import app = require("teem");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		
		// app.sql.connect 
		//begin tran 
		// commit (tran)
		// rollback
		
		res.render("index/index");
	}

	public async sobre(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Sobre"
		};

		res.render("index/sobre", opcoes);
	}

	public async registroCarro( req: app.Request, res:app.Response){
		let opcoes = {
			titulo: "Registrar novo carro"

		};

		res.render("index/registroCarro", opcoes);
	}

	@app.http.post()
	@app.route.formData()
	public async criarCarro(req: app.Request, res: app.Response) {
		let carro = req.body;

		if (!carro.nome) {
			res.status(400).json("Nome inválido");
			return;
		}

		if (!carro.marca) {
			res.status(400).json("Marca inválida");
			return;
		}

		if (!req.uploadedFiles || !req.uploadedFiles.foto || req.uploadedFiles.foto.mimetype !== "image/jpeg") {
			res.status(400).json("Foto inválida");
			return;
		}
		let foto = req.uploadedFiles.foto;

		await app.sql.connect(async (sql) => {

			await sql.beginTransaction();

			await sql.query("INSERT INTO carro (nome, marca) VALUES (?, ?)", [carro.nome, carro.marca]);

			let id = await sql.scalar("SELECT last_insert_id()") as number;

			await app.fileSystem.saveUploadedFile("public/img/carros/" + id + ".jpg", foto);

			await sql.commit();

		});

		res.json(true);
	}

	public async carros(req: app.Request, res: app.Response) {
		let carros: any[] = [];

		await app.sql.connect(async (sql) => {
			
			carros = await sql.query("SELECT id, nome, marca FROM carro ORDER BY nome");

		});

		let opcoes = {
			titulo: "Listagem de Carros",
			carros: carros
		};

		res.render("index/listagem_carros", opcoes);
	}
}

export = IndexRoute;
