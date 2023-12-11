import app = require("teem");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {

		// app.sql.connect 
		//begin tran 
		// commit (tran)
		// rollback
		let carros: any[] = [];

		await app.sql.connect(async (sql) => {

			carros = await sql.query("SELECT id, ano, modelo, estado, tipo, montadora, portas, combustivel_tipo, quilometragem, retirada, entrega, valorDiaria FROM carro ORDER BY id");

		});

		let opcoes = {
			titulo: "Listagem de Carros",
			carros: carros
		};

		res.render("index/index", opcoes);
	}

	public async sobre(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Sobre"
		};

		res.render("index/sobre", opcoes);
	}

	public async registroCarro(req: app.Request, res: app.Response) {
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
			res.status(400).json("Ano inválido");
			return;
		}

		if (!carro.modelo) {
			res.status(400).json("Modelo inválido");
			return;
		}

		if (!carro.estado) {
			res.status(400).json("Estado inválido");
			return;
		}

		if (!carro.tipo) {
			res.status(400).json("Tipo inválido");
			return;
		}

		if (!carro.montadora) {
			res.status(400).json("Montadora inválida");
			return;
		}

		if (!carro.portas) {
			res.status(400).json("Portas inválidas");
			return;
		}

		if (!carro.combustivel_tipo) {
			res.status(400).json("Combustivel inválido");
			return;
		}

		if (!carro.quilometragem) {
			res.status(400).json("Quilometragem inválida");
			return;
		}

		if (!carro.retirada) {
			res.status(400).json("Retirada inválida");
			return;
		}

		if (!carro.entrega) {
			res.status(400).json("Entrega inválida");
			return;
		}
		if (!carro.valorDiaria) {
			res.status(400).json("Valor inválido");
			return;
		}

		if (!req.uploadedFiles || !req.uploadedFiles.foto || req.uploadedFiles.foto.mimetype !== "image/jpeg") {
			res.status(400).json("Foto inválida");
			return;
		}
		let foto = req.uploadedFiles.foto;

		await app.sql.connect(async (sql) => {

			await sql.beginTransaction();

			await sql.query(`
				INSERT INTO carro
				(ano, modelo, estado,tipo, montadora, portas, combustivel_tipo, quilometragem, retirada, entrega, valorDiaria)
				VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
			`, [carro.ano, carro.modelo, carro.estado, carro.tipo, carro.montadora, carro.portas, carro.combustivel_tipo, carro.quilometragem, carro.retirada, carro.entrega, carro.valorDiaria]);

			let id = await sql.scalar("SELECT last_insert_id()") as number;

			await app.fileSystem.saveUploadedFile("public/img/carros/" + id + ".jpg", foto);

			await sql.commit();

		});

		res.json(true);
	}

	public async carros(req: app.Request, res: app.Response) {
		let carros: any[] = [];

		await app.sql.connect(async (sql) => {

			carros = await sql.query("SELECT id, ano, modelo, estado, tipo, montadora, portas, combustivel_tipo, quilometragem, retirada, entrega, valorDiaria FROM carro ORDER BY id");

		});

		let opcoes = {
			titulo: "Listagem de Carros",
			carros: carros
		};

		res.render("index/listagem_carros", opcoes);
	}
	@app.http.delete()
	public async excluirCarro(req: app.Request, res: app.Response) {
		let idtexto = req.query["id"] as string;

		let id = parseInt(idtexto);

		if (isNaN(id)) {
			// O id fornecido não era numérico.
			res.status(400);
			res.json("Id inválido");
			return;
		}

		let linhasAfetadas = 0;

		await app.sql.connect(async (sql) => {

			// Todas os comandos SQL devem ser executados aqui dentro do app.sql.connect().

			// As interrogações serão substituídas pelos valores passados ao final, na ordem passada.
			await sql.query("DELETE FROM carro WHERE id = ?", [id]);

			linhasAfetadas = sql.affectedRows;

		});

		if (!linhasAfetadas) {
			// Se o UPDATE não afetou nenhuma linha, significa que o id não existia no banco.
			res.status(400);
			res.json("Pessoa não encontrada");
			return;
		}

		res.json(true);
	}
}
export = IndexRoute;
