// заполняет строку ln пробелами, пока в ней не будет lg символов
export function cFl(ln, lg) {
    let a = ln;
    while(a.length < lg) {
        a += ' ';
    }
    return a;
}

// берет линию ln в рамку
export function cCl(ln) {
    return '|' + ln.substr(1, ln.length - 2) + '|';
}

// возвращает линию
export function cLn() {
    let a = '|';
    while(a.length < 99) {
        a += '-';
    }
    return a + '|';
}

// возвращает пустую строку
export function cSp() {
    return cCl(cFl('', 100))
}

// отступает слува lft, затем рисует линию
export function cBd(lft, lng) {
    let a = ''
    while(a.length < lft) {
        a += ' ';
    }
    a += '|';
    while(a.length < lft + lng - 1) {
        a += '-';
    }
    a += '|';

    return a;
}