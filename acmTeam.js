// Complete the acmTeam function below.
function acmTeam(topic) {
    let maxTopics = 0;
    let counterMaxTopics = 0;

    for (let i = 0; i < topic.length-1; i++){
        for (let j = i+1; j< topic.length; j++){
            let topicos = calcularTopicos(topic[i], topic[j]);
            if (topicos == maxTopics) counterMaxTopics++;
            else if (topicos>maxTopics){
                maxTopics= topicos;
                counterMaxTopics = 1;
            }
        }
    }

    return [maxTopics, counterMaxTopics];

}

function calcularTopicos(membroA, membroB){
    let topicosConhecidos = 0;
    let topicosA = membroA.split('');
    //console.log(topicosA);
    let topicosB = membroB.split('');
    //console.log(topicosB);
    for (let i =0; i < topicosA.length; i++){
        if(topicosA[i]=='1' || topicosB[i]=='1') topicosConhecidos++;
    }
    return topicosConhecidos;
}

console.log(acmTeam([ '10101', '11100', '11010', '00101' ]));
console.log(`expected [5,2]`)

console.log(acmTeam([ '11101', '10101', '11001', '10111', '10000', '01110' ]));
console.log(`expected [5,6]`)