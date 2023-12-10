import app = require("teem");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		
		// app.sql.connect 
		//begin tran 
		// commit (tran)
		// rollback
		let carros: any[] = [];

		await app.sql.connect(async (sql) => {
			
			carros = await sql.query("SELECT id, ano, modelo, estado, cidade, tipo, montadora, portas, combustivel_tipo, quilometragem, retirada, entrega FROM carro ORDER BY id");

		});

		let opcoes = {
			titulo: "Listagem de Carros",
			carros: carros
		};

		res.render("index/index" ,opcoes);
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

		if (!carro) {
			res.status(400).json("dados inválido");
			return;
		}

		if (!carro.ano) {
			res.status(400).json("Nome inválido");
			return;
		}
		
		if (!carro.modelo) {
			res.status(400).json("Nome inválido");
			return;
		}
		
		if (!carro.estado) {
			res.status(400).json("Nome inválido");
			return;
		}

		if (!carro.cidade) {
			res.status(400).json("Marca inválida");
			return;
		}

		if (!carro.tipo) {
			res.status(400).json("Marca inválida");
			return;
		}

		if (!carro.montadora) {
			res.status(400).json("Marca inválida");
			return;
		}

		if (!carro.portas) {
			res.status(400).json("Marca inválida");
			return;
		}

		if (!carro.combustivel_tipo) {
			res.status(400).json("Marca inválida");
			return;
		}

		if (!carro.quilometragem) {
			res.status(400).json("Marca inválida");
			return;
		}

		if (!carro.retirada) {
			res.status(400).json("Marca inválida");
			return;
		}

		if (!carro.entrega) {
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

			await sql.query("INSERT INTO carro (ano, modelo, estado, cidade, tipo, montadora, portas, combustivel_tipo, quilometragem, retirada, entrega ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [carro.idade, carro.modelo, carro.estado, carro.cidade, carro.tipo, carro.montadora, carro.portas, carro.combustivel_tipo, carro.quilometragem, carro.retirada, carro.entrega]);

			let id = await sql.scalar("SELECT last_insert_id()") as number;

			await app.fileSystem.saveUploadedFile("public/img/carros/" + id + ".jpg", foto);

			await sql.commit();

		});

		res.json(true);
	}

	public async carros(req: app.Request, res: app.Response) {
		let carros: any[] = [];

		await app.sql.connect(async (sql) => {
			
			carros = await sql.query("SELECT id, ano, modelo, estado, cidade, tipo, montadora, portas, combustivel_tipo, quilometragem, retirada, entrega FROM carro ORDER BY id");

		});

		let opcoes = {
			titulo: "Listagem de Carros",
			carros: carros
		};

		res.render("index/listagem_carros", opcoes);
	}
}

export = IndexRoute;
