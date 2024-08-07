# Projeto de Utilidades: QR Code e Gerador de Senhas

Este projeto é um utilitário simples que permite ao usuário gerar um QR Code ou criar uma senha segura. Utiliza a biblioteca prompt para receber a entrada do usuário e invoca os serviços apropriados com base na escolha do usuário.

### Funcionalidades

Gerador de QR Code: Gera um QR Code com base nas especificações fornecidas pelo usuário.
Gerador de Senhas: Cria uma senha segura com base nos parâmetros fornecidos.


## Como Usar
Execute o script principal:
npm run start 


###  Exemplo de Uso
Ao executar o script index.js, você será solicitado a escolher uma das opções:

1. Gerar QR Code
2. Gerar Password

Selecione uma opção: 
Digite 1 para gerar um QR Code ou 2 para gerar uma senha. O script chamará o serviço correspondente e processará a sua solicitação.

## Dependências

- prompt: Biblioteca para interação com o usuário via terminal.
- chalk:Biblioteca que perminte que os caracteres fiquem coloridos no terminal.
- qrcode-terminal: Biblioteca que permite gerar qrcode no terminal.


Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
