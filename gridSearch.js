function gridSearch(G, P) {
    //console.log(G);
    //console.log(P);
    if (P.length == 0 || G.length == 0 || G.length < P.length) return 'NO';

    for (let i = 0; i < G.length-P.length+1; i++) {
        let inicio = 0;
        let indice = G[i].indexOf(P[0], inicio);
        //console.log(indice);
        while (indice != -1) {
            //console.log(`inicio: ${inicio}`);
            //console.log(`indice: ${indice}`);
            for (let j = 1; j < P.length; j++) {
                let indiceComparativo = G[i + j].indexOf(P[j], inicio);
                //console.log(`indiceComparativo: ${indiceComparativo} j:${j}`);
                if (indiceComparativo != indice) j = P.length;
                if (j == P.length - 1) return 'YES';
            }
            
            inicio = indice+1;

            indice = G[i].indexOf(P[0], inicio);
        }

    }
    return 'NO';
}
let g = [
    '111111111111111',
    '111111111111111',
    '111111011111111',
    '111111111111111',
    '111111111111111',
];
let d = [
    '11111',
    '11111',
    '11110',
]

console.log(gridSearch(g, d));
console.log('expected YES')