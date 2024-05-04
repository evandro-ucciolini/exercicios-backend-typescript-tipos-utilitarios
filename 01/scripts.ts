type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

const cadastrarUsuário = (info: Partial<Usuario>) => {
    return info;
}


console.log(cadastrarUsuário({
    nome: 'Evandro',
    email: 'evandro@email.com',
    cpf: '123456789-10',
    dataNacimento: '18/12/1992'

}));
