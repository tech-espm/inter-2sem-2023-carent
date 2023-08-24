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

CARent - Plataforma de Aluguel de Carros entre Particulares
O repositório do CARent abriga o código-fonte e os recursos deste projeto que visa revolucionar a forma como as pessoas compartilham seus veículos. Inspirado no bem-sucedido modelo da Airbnb, o CARent  é um serviço inovador de aluguel de carros entre indivíduos, promovendo a utilização eficiente dos recursos automotivos e fomentando a economia colaborativa. O código aqui presente engloba todo o desenvolvimento da plataforma web, desde a criação de perfis de usuários, gestão de veículos, cálculo de preços dinâmicos com base na demanda, até um sistema de avaliações transparente. O projeto busca não apenas proporcionar uma experiência de aluguel conveniente e acessível, mas também estabelecer uma comunidade de confiança entre os proprietários e locatários de veículos. Junte-se a nós nesta jornada para transformar a maneira como interagimos com a mobilidade urbana!

Principais Recursos:

- Registro de Usuário e Perfis: Crie sua conta, configure seu perfil e adicione detalhes sobre seus veículos disponíveis para aluguel.
- Sistema de Reservas Inteligente: Navegue pelas opções de carros disponíveis nas datas desejadas e faça reservas de forma simples e eficiente.
- Preços Dinâmicos e Transparentes: Utilizando algoritmos de precificação avançados, os preços são calculados com base na demanda, disponibilidade e características dos veículos.
- Avaliações e Comentários: Promovendo a confiança na comunidade, os usuários podem avaliar e deixar comentários sobre suas experiências, ajudando outros membros na tomada de decisões informadas.
- Sistema de Pagamentos Seguro: Integração de um método de pagamento seguro para processar as transações entre proprietários e locatários.

Nossa missão com o CARent é promover a mobilidade sustentável, ao mesmo tempo, em que criamos conexões entre pessoas e viabilizamos um uso mais inteligente dos recursos automobilísticos. Seja bem-vindo para explorar, contribuir e se tornar parte desse movimento inovador!
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
