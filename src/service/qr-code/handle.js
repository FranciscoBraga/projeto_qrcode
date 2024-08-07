import qr from 'qrcode-terminal'
import chalk from 'chalk'

async function handle(err,result){
    if(err){
        console.log(chalk.red("error aplication"))
        return
    }
    const isSMall = result.type == 2
    qr.generate(result.link,{small:isSMall},(qrcode)=>{
        console.log("Qr code gerado com sucesso:\n")
        console.log(qrcode)

    })
}

export default handle
