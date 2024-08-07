import chalk from "chalk";



const promptSchemaQrCode = [
    {
        name:"link",
        description:chalk.yellow.bold("Digite o link do QRCode"),
    },
    {
        name:"Type",
        description:chalk.yellow(
            "Escolha entre o tipo de QRCode (1 - Normal ou 2 - Terminal)"
        ),
        pattern:/^[1-2]+$/,
        message:chalk.red("Escolha entre 1 e 2"),
    }
];

export default promptSchemaQrCode;
