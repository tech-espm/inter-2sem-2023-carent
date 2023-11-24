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

	public async produtos(req: app.Request, res: app.Response) {
		let produtoA = {
			id: 1,
			nome: "Produto A",
			valor: 25
		};

		let produtoB = {
			id: 2,
			nome: "Produto B",
			valor: 15
		};

		let produtoC = {
			id: 3,
			nome: "Produto C",
			valor: 100
		};

		let produtosVindosDoBanco = [ produtoA, produtoB, produtoC ];

		let opcoes = {
			titulo: "Listagem de Produtos",
			produtos: produtosVindosDoBanco
		};

		res.render("index/produtos", opcoes);
	}

	@app.http.post()
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

		await app.sql.connect(async (sql) => {

			await sql.query("INSERT INTO carro (nome, marca) VALUES (?, ?)", [carro.nome, carro.marca]);

		});

		res.json(true);
	}

	public async carros(req: app.Request, res: app.Response) {
		let carros: any[] = [];

		//await app.sql.connect(async (sql) => {
			
		//	carros = await sql.query("SELECT id, nome, marca FROM carro ORDER BY nome");

		//});

		let opcoes = {
			titulo: "Listagem de Carros",
			carros: carros
		};

		res.render("index/listagem_carros", opcoes);
	}
}

export = IndexRoute;
