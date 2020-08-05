export function cFl(ln, lg) {
    let a = ln;
    while(a.length < lg) {
        a += ' ';
    }
    return a;
}

export function cCl(ln) {
    return '|' + ln.substr(1, 98) + '|';
}

export function cLn() {
    let a = '|';
    while(a.length < 99) {
        a += '-';
    }
    return a + '|';
}

export function cSp() {
    return cCl(cFl('', 100))
}

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