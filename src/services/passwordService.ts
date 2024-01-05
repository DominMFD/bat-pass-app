export default function generatePass(lenght: number): string{
    let password: string = ''
    let characters: string = 'Aa@$#123456789abcdefghijklmnopqrstuvxyzBCDEFGHIJKLMNOPQRSTUVWYZ'
    let passLenght: number = lenght

    for(let i = 0; i < lenght; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return password
}