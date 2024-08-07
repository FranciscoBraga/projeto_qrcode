import permittedCharacters from "./util/permitted_characters.js"

async function handle() {
    let charater = []
    let password= ""

    const passwordLength = process.env.PASSWORD_LENGTH
    charater = await permittedCharacters()
 

    for(let i = 0 ; i < passwordLength;i++){
        const index = Math.floor(Math.random()*charater.length)
        password += charater[index]
       
    }
   
    return password
}

export default handle