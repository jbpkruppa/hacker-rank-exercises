function repeatedString(s, n) {
    let tamanho = s.length;
    if (n<tamanho) return contarA(s.substring(0,n));
    let vezes = Math.floor(n/tamanho);
    let resto = n%tamanho;
    let letrasNaString = contarA(s);
    return vezes*letrasNaString+contarA(s.substring(0,resto));

}

console.log(repeatedString('aba', 10));

console.log(repeatedString('a', 1000000000000));