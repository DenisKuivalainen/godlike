import {info} from '../helpers/Info';
import {parser} from '../helpers/parser';

export function getLeft() {
    return getInfo().concat(getQuol()).concat(getLang()).concat(getGit());
}

function getInfo() {
    let cont = [];
    cont.push(getLine(getBorder()));
    cont.push(getLine(end('|      >Info')));
    cont.push(getLine(getBorder()));
    cont.push(getLine(''));

    let email = parser(info.email, 28);
    let add = parser(info.addres, 28);
    let tel = parser(info.tel, 28);

    for (let j = 0; j < email.length; j++) {
        cont.push(getLine(' ' + email[j])); 
    }
    cont.push(getLine(''));

    for (let j = 0; j < tel.length; j++) {
        cont.push(getLine(' ' + tel[j])); 
        
    }
    cont.push(getLine(''));

    for (let j = 0; j < add.length; j++) {
        cont.push(getLine(' ' + add[j])); 
    }
    cont.push(getLine(''));
    cont.push(getLine(''));
    cont.push(getLine(''));

    return cont;
}

function getQuol() {
    let cont = [];
    cont.push(getLine(getBorder()));
    cont.push(getLine(end('|      >Quolities')));
    cont.push(getLine(getBorder()));
    cont.push(getLine(''));

    let quol = parser(info.quol, 28);

    for (let j = 0; j < quol.length; j++) {
        cont.push(getLine(' ' + quol[j])); 
    }

    cont.push(getLine(''));
    cont.push(getLine(''));
    cont.push(getLine(''));

    return cont;
}

function getLang() {
    let cont = [];
    cont.push(getLine(getBorder()));
    cont.push(getLine(end('|      >Languages')));
    cont.push(getLine(getBorder()));
    cont.push(getLine(''));

    for (let i = 0; i < info.lang.length; i++) {
        cont.push(getLine(' * ' + info.lang[i]));
        cont.push(getLine(''));
    }
    cont.push(getLine(''));
    cont.push(getLine(''));

    return cont;
}

function getGit() {
    let cont = [];
    cont.push(getLine(getBorder()));
    cont.push(getLine(end('|      >Github')));
    cont.push(getLine(getBorder()));
    cont.push(getLine(''));

    return cont;
}

function getLine(line) {
    let l = line;
    while (l.length < 33) {
        l += ' ';
    }

    return l;
}

function getBorder() {
    let b = '|'
    for (let i = 0; i < 28; i++) {
        b += '-';
    }
    b += '|'
    return b;
}

function end(line) {
    let l = line;
    while (l.length < 29) {
        l += ' ';
    }
    l += '|';
    return l;
}