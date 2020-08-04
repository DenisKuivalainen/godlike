export function getName(w) {
    let arr = [];
    for (let i = 0; i < 6; i++) {
        arr.push(getWord(w, i));
    }

    return arr;
}

function getLetter(l) {
    return ABC.indexOf(l);
}

function getLCode(l, n) {
    return BIT[getLetter(l)][n];
}

function getWord(w, n) {
    let a = '     ';
    let b = w.toLowerCase();
    for (let i = 0; i < b.length; i++) {
        a = a + ' ' + getLCode(b.substr(i, 1), n);
    }
    return a;
}

const BIT = [
    //0
    ['  A ', ' A A', ' A A', ' AAA', 'A  A', 'A  A'],
    //1
    ['', '', '', '', '', ''],
    //2
    ['', '', '', '', '', ''],
    //3
    ['DDD ', 'D  D', 'D  D', 'D  D', 'D  D', 'DDD '],
    //4
    ['EEEE', 'E   ', 'EEE ', 'E   ', 'E   ', 'EEEE'],
    //5
    ['', '', '', '', '', ''],
    //6
    ['', '', '', '', '', ''],
    //7
    ['', '', '', '', '', ''],
    //8
    ['III ', ' I  ', ' I  ', ' I  ', ' I  ', 'III '],
    //9
    ['', '', '', '', '', ''],
    //10
    ['K K ', 'K K ', 'KK  ', 'K K ', 'K  K', 'K  K'],
    //11
    ['L   ', 'L   ', 'L   ', 'L   ', 'L   ', 'LLLL'],
    //12
    ['', '', '', '', '', ''],
    //13
    ['N  N', 'NN N', 'NN N', 'N NN', 'N NN', 'N  N'],
    //14
    ['', '', '', '', '', ''],
    //15
    ['', '', '', '', '', ''],
    //16
    ['', '', '', '', '', ''],
    //17
    ['', '', '', '', '', ''],
    //18
    ['SSSS', 'S   ', ' SSS', '   S', '   S', 'SSSS'],
    //19
    ['', '', '', '', '', ''],
    //20
    ['U  U', 'U  U', 'U  U', 'U  U', 'U  U', 'UUUU'],
    //21
    ['V  V', 'V  V', 'V  V', ' V V', ' V V', '  V '],
    //22
    ['', '', '', '', '', ''],
    //23
    ['', '', '', '', '', ''],
    //24
    ['', '', '', '', '', ''],
    //25
    ['', '', '', '', '', '']
]

const ABC = 'abcdefghijklmnopqrstuvwxyz';