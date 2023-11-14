# Projeto Interdisciplinar II - Sistemas de Informação ESPM

<p style="text-align: center;">
    <a href="https://www.espm.br/cursos-de-graduacao/sistemas-de-informacao/"><img src="https://avatars.githubusercontent.com/u/49880458?s=200&v=4" alt="Sistemas de Informação ESPM" style="height: 200px; width: 200px;"/></a>
</p>

# Projeto CARent

### 2023-02

## Integrantes e responsabilidades
- [ANDREZZA HAMBURGO DE FREIRE](https://github.com/andrezzahfreire) :Back-end,Documentação
- [BRUNO PIGNATARO MASSARO](https://github.com/brunomassaro10) :Font-end, Design
- [LORENA DE OLIVEIRA GUEDES](https://github.com/lohgdds1) :Font-end, Design
- [LUCA DE DONATO PAULILLO](https://github.com/lucaddonato) :Back-end, Documentação
- [MATHEUS ASAEL SILVA MACEDO](https://github.com/M-asael) :Back-end

## Descrição do Projeto

### Principais Recursos
- Registro de Usuário e Perfis: Crie sua conta, configure seu perfil e adicione detalhes sobre seus carros elétricos disponíveis para aluguel.

- Sistema de Reservas Inteligente: Navegue pelas opções de carros elétricos disponíveis nas datas desejadas e faça reservas de forma simples e eficiente.

- Avaliações e Comentários: Promovendo a confiança na comunidade, os usuários podem avaliar e deixar comentários sobre suas experiências, ajudando outros membros na tomada de decisões informadas sobre o aluguel de carros elétricos.

- Sistema de Pagamentos Seguro: Integração de um método de pagamento seguro para processar as transações entre proprietários e locatários, garantindo uma experiência financeira segura.

### Missão
Nossa missão com o CARent é promover a mobilidade sustentável através do aluguel de carros elétricos, ao mesmo tempo em que criamos conexões entre pessoas e viabilizamos um uso mais inteligente dos recursos automobilísticos. Junte-se a nós nesta jornada para transformar a maneira como interagimos com a mobilidade urbana de forma sustentável e inovadora! Explore, contribua e faça parte desse movimento verde.
# Detalhes de Configuração

```
Aqui deve ser colocado o conteúdo do arquivo .env e/ou de outros arquivos de configuração, ou detalhes de arquivos ou pastas que não estão no repositório do projeto, mas que devem existir para que o projeto possa ser executado com sucesso.

Por exemplo, a descrição do conteúdo do arquivo .env, ou nomes de pastas que precisam existir.

(Remover esse aviso na versão final)
```

Para funcionar corretamente, devem ser criados os seguintes arquivos/pastas nos caminhos especificados, com o conteúdo especificado:

- O arquivo `.env` deve ser criado em `/`, com o conteúdo abaixo:
```
app_localIp=0.0.0.0
app_port=3000
app_root=
# Não pode terminar com barra /
app_urlSite=http://localhost:3000
app_cookie=[NOME DO COOKIE]
app_cookieSecure=0
app_staticFilesDir=public
app_disableStaticFiles=0
app_sqlConfig_connectionLimit=30
app_sqlConfig_waitForConnections=1
app_sqlConfig_charset=utf8mb4
app_sqlConfig_host=localhost
app_sqlConfig_port=3306
app_sqlConfig_user=[USUÁRIO DO BANCO]
app_sqlConfig_password=[SENHA DO USUÁRIO DO BANCO]
app_sqlConfig_database=[NOME DO BANCO]
app_usuarioSenhaPadrao=[SENHA PADRÃO PARA NOVOS USUÁRIOS]
app_usuarioHashSenhaPadrao=[HASH DA SENHA PADRÃO PARA NOVOS USUÁRIOS]
# Não utilizar números > 0x7FFFFFFF pois os XOR resultarão em -1
app_usuarioHashId=[HASH DE 32 BITS PARA O ID EM HEXADECIMAL, COMO 0x1234ABCD]
```

- A pasta `dados` deve ser criada em `/`
- A pasta `imagens` dee ser criada em `/dados`

# Licença

Este projeto é licenciado sob a [MIT License](https://github.com/tech-espm/inter-2sem-2023-carent/blob/main/LICENSE).
