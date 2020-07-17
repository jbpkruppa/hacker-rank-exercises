
function biggerIsGreater(w) {
    if (w.length == 1) return 'no answer';
    let arr = w.split('');

    //console.log(arr);
    for (let i = arr.length - 1; i > 0; i--) {
        let segunda = arr[i];

        let primeira = arr[i-1];
        //console.log(`${segunda} <-> ${primeira}`)
        if (primeira < segunda) {
            let fixo = arr.splice(0, i-1);
            let pivot = arr[0];
            //console.log(escrever(fixo));
            //console.log(pivot);
            arr.sort();
            //console.log(escrever(arr));
            let inicio = arr.splice(arr.lastIndexOf(pivot)+1,1);
            fixo.push(inicio);
            return escrever(fixo.concat(arr));

        }

    }
    return 'no answer';
}
function escrever(arr) {
    let palavra = '';
    for (let i = 0; i < arr.length; i++) {
        palavra += arr[i];
    }
    return palavra;
}

let inputs = [
    'imllmmcslslkyoegymoa',
    'fvincndjrurfh',
    'rtglgzzqxnuflitnlyit',
    'mhtvaqofxtyrz',
    'zalqxykemvzzgaka',
    'wjjulziszbqqdcpdnhdo',
    'japjbvjlxzkgietkm',
    'jqczvgqywydkunmjw',
    'ehdegnmorgafrjxvksc',
    'tydwixlwghlmqo',
    'wddnwjneaxbwhwamr',
    'pnimbesirfbivxl',
    'mijamkzpiiniveik',
    'qxtwpdpwexuej',
    'qtcshorwyck',
    'xoojiggdcyjrupr',
    'vcjmvngcdyabcmjz',
    'xildrrhpca',
    'rrcntnbqchsfhvijh',
    'kmotatmrabtcomu',
    'bnfcejmyotvw',
    'dnppdkpywiaxddoqx',
    'tmowsxkrodmkkra',
    'jfkaehlegohwggf',
    'ttylsiegnttymtyx',
    'kyetllczuyibdkwyihrq',
    'xdhqbvlbtmmtshefjf',
    'kpdpzzohihzwgdfzgb',
    'kuywptftapaa',
    'qfqpegznnyludrv',
    'ufwogufbzaboaepslikq',
    'jfejqapjvbdcxtkry',
    'sypjbvatgidyxodd',
    'wdpfyqjcpcn',
    'baabpjckkytudr',
    'uvwurzjyzbhcqmrypraq',
    'kvtwtmqygksbim',
    'ivsjycnooeodwpt',
    'zqyxjnnitzawipqsm',
    'blmrzavodtfzyepz',
    'bmqlhqndacv',
    'phvauobwkrcfwdecsd',
    'vpygyqubqywkndhpzw',
    'yikanhdrjxw',
    'vnpblfxmvwkflqobrk',
    'pserilwzxwyorldsxksl',
    'qymbqaehnyzhfqpqprpl',
    'fcakwzuqlzglnibqmkd',
    'jkscckttaeifiksgkmxx',
    'dkbllravwnhhfjjrce',
    'imzsyrykfvjt',
    'tvogoocldlukwfcajvix',
    'cvnagtypozljpragvlj',
    'hwcmacxvmus',
    'rhrzcpprqccf',
    'clppxvwtaktchqrdif',
    'qwusnlldnolhq',
    'yitveovrja',
    'arciyxaxtvmfgquwb',
    'pzbxvxdjuuvuv',
    'nxfowilpdxwlpt',
    'swzsaynxbytytqtq',
    'qyrogefleeyt',
    'iotjgthvslvmjpcchhuf',
    'knfpyjtzfq',
    'tmtbfayantmwk',
    'asxwzygngwn',
    'rmwiwrurubt',
    'bhmpfwhgqfcqfldlhs',
    'yhbidtewpgp',
    'jwwbeuiklpodvzii',
    'anjhprmkwibe',
    'lpwhqaebmr',
    'dunecynelymcpyonjq',
    'hblfldireuivzekegit',
    'uryygzpwifrricwvge',
    'kzuhaysegaxtwqtvx',
    'kvarmrbpoxxujhvgpw',
    'hanhaggqzdpunkugzmhq',
    'gnwqwsylqeuqr',
    'qzkjbnyvclrkmdtc',
    'argsnaqbquv',
    'obbnlkoaklcx',
    'ojiilqieycsasvqosycu',
    'qhlgiwsmtxbffjsxt',
    'vvrvnmndeogyp',
    'ibeqzyeuvfzb',
    'sajpyegttujxyx',
    'zmdjphzogfldlkgbchnt',
    'tbanvjmwirxx',
    'gmdhdlmopzyvddeqyjja',
    'yxvmvedubzcpd',
    'soygdzhbckfuk',
    'gkbekyrhcwc',
    'wevzqpnqwtpfu',
    'rbobquotbysufwqjeo',
    'bpgqfwoyntuhkvwo',
    'schtabphairewhfmp',
    'rlmrahlisggguykeu',
    'fjtfrmlqvsekq'
];

let outputs = [
    'imllmmcslslkyoegyoam',
    'fvincndjrurhf',
    'rtglgzzqxnuflitnlyti',
    'mhtvaqofxtyzr',
    'zalqxykemvzzgkaa',
    'wjjulziszbqqdcpdnhod',
    'japjbvjlxzkgietmk',
    'jqczvgqywydkunmwj',
    'ehdegnmorgafrjxvsck',
    'tydwixlwghlomq',
    'wddnwjneaxbwhwarm',
    'pnimbesirfbixlv',
    'mijamkzpiiniveki',
    'qxtwpdpwexuje',
    'qtcshorwykc',
    'xoojiggdcyjrurp',
    'vcjmvngcdyabcmzj',
    'xildrrpach',
    'rrcntnbqchsfhvjhi',
    'kmotatmrabtcoum',
    'bnfcejmyotwv',
    'dnppdkpywiaxddoxq',
    'tmowsxkrodmkrak',
    'jfkaehlegowfggh',
    'ttylsiegnttymxty',
    'kyetllczuyibdkwyiqhr',
    'xdhqbvlbtmmtshejff',
    'kpdpzzohihzwgdgbfz',
    'kuywptftpaaa',
    'qfqpegznnyludvr',
    'ufwogufbzaboaepsliqk',
    'jfejqapjvbdcxtkyr',
    'sypjbvatgiodddxy',
    'wdpfyqjcpnc',
    'baabpjckkyturd',
    'uvwurzjyzbhcqmryprqa',
    'kvtwtmqygksbmi',
    'ivsjycnooeodwtp',
    'zqyxjnnitzawipsmq',
    'blmrzavodtfzyezp',
    'bmqlhqndavc',
    'phvauobwkrcfwdedcs',
    'vpygyqubqywkndhwpz',
    'yikanhdrwjx',
    'vnpblfxmvwkflqokbr',
    'pserilwzxwyorldsxlks',
    'qymbqaehnyzhfqpqrlpp',
    'fcakwzuqlzglnidbkmq',
    'jkscckttaeifiksgkxmx',
    'dkbllravwnhhfjjrec',
    'imzsyrykfvtj',
    'tvogoocldlukwfcajvxi',
    'cvnagtypozljprajglv',
    'hwcmacxvsmu',
    'rhrzcpprqcfc',
    'clppxvwtaktchqrfdi',
    'qwusnlldnolqh',
    'yitverajov',
    'arciyxaxtvmfgqwbu',
    'pzbxvxdjuuvvu',
    'nxfowilpdxwltp',
    'swzsaynxbytyttqq',
    'qyrogefletey',
    'iotjgthvslvmjpcchufh',
    'knfpyjtzqf',
    'tmtbfayantwkm',
    'asxwzygnngw',
    'rmwiwrurutb',
    'bhmpfwhgqfcqfldlsh',
    'yhbidtewppg',
    'jwwbeuiklpodziiv',
    'anjhprmkwieb',
    'lpwhqaebrm',
    'dunecynelymcpyonqj',
    'hblfldireuivzekegti',
    'uryygzpwifrriecgvw',
    'kzuhaysegaxtwqtxv',
    'kvarmrbpoxxujhvgwp',
    'hanhaggqzdpunkugzmqh',
    'gnwqwsylqeurq',
    'qzkjbnyvclrkmtcd',
    'argsnaqbqvu',
    'obbnlkoaklxc',
    'ojiilqieycsasvqosyuc',
    'qhlgiwsmtxbffjtsx',
    'vvrvnmndeopgy',
    'ibeqzyeuvzbf',
    'sajpyegttujyxx',
    'zmdjphzogfldlkgbchtn',
    'tbanvjmwixrx',
    'gmdhdlmopzyvddeyajjq',
    'yxvmvedubzdcp',
    'soygdzhbckkfu',
    'gkbekyrhwcc',
    'wevzqpnqwtpuf',
    'rbobquotbysufwqjoe',
    'bpgqfwoyntuhkwov',
    'schtabphairewhfpm',
    'rlmrahlisggguykue',
    'fjtfrmlqvseqk'
]

for (let i = 0; i < inputs.length; i++) {
    if (biggerIsGreater(inputs[i]) != outputs[i]) {
        console.log(inputs[i]);
        console.log(outputs[i]);
        console.log(biggerIsGreater(inputs[i]));
        console.log('--------------------------------')
    }

}