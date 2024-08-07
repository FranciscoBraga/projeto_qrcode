# Projeto de Utilidades: QR Code e Gerador de Senhas
Este projeto é um utilitário simples que permite ao usuário gerar um QR Code ou criar uma senha segura. Utiliza a biblioteca prompt para receber a entrada do usuário e invoca os serviços apropriados com base na escolha do usuário.

Funcionalidades
Gerador de QR Code: Gera um QR Code com base nas especificações fornecidas pelo usuário.
Gerador de Senhas: Cria uma senha segura com base nos parâmetros fornecidos.
Estrutura do Projeto
lua
Copiar código
.
├── prompts_schema
│   └── prompt_schema_main.js
├── service
│   ├── qr-code
│   │   └── create.js
│   └── password
│       └── create.js
└── index.js (arquivo principal)
Instalação
Clone este repositório:


Instale as dependências:

sh
Copiar código
npm install prompt
Como Usar
Execute o script principal:

sh
Copiar código
node index.js
Siga as instruções exibidas no terminal para escolher entre gerar um QR Code ou uma senha segura.

Exemplo de Uso
Ao executar o script index.js, você será solicitado a escolher uma das opções:

markdown
Copiar código
1. Gerar QR Code
2. Gerar Senha

Selecione uma opção: 
Digite 1 para gerar um QR Code ou 2 para gerar uma senha. O script chamará o serviço correspondente e processará a sua solicitação.

Dependências
prompt: Biblioteca para interação com o usuário via terminal.
Contribuição
Sinta-se à vontade para abrir issues ou enviar pull requests. Toda contribuição é bem-vinda!

Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
