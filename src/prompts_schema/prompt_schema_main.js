import chalk from "chalk";


const promptSchemaMain = [
    {
        name:"select",
        description:chalk.yellow.bold(
            "Escolha  a ferramenta (1 - QRCODE ou 2 - Password)"
        ),
        pattern:/^[1-2]+$/,
        message:chalk.red("Escolha apenas entre 1 e 2"),
        required: true,
    },
];

export default promptSchemaMain;