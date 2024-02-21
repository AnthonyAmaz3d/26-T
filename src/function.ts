const multi = ( numA: number, numB: number): number => {
    return numA * numB;
}

const multiplicacao = multi(4, 5);
console.log(multiplicacao);

const saudacao = ( nome: string) => {
    return "olá" + nome;
}

const saudacaoPessoa = saudacao("Joao");
console.log(saudacaoPessoa);