import {info} from '../helpers/Info';
import {parser} from '../helpers/parser';

export function getRight() {
    return getEdu().concat(getAdd()).concat(getSkill());
}

function getEdu() {
    let cont = [];

    cont.push(getLine('   ' + getBorder()));
    cont.push(getLine(end('   |     >' + FIELD[0])));
    cont.push(getLine('   ' + getBorder()));
    cont.push(getLine(''));
    for (let i = 0; i < info.edu.length; i++) {
        let uni = parser(info.edu[i].uni, 57);
        for (let j = 0; j < uni.length; j++) {
            cont.push(getLine('    ' + uni[j])); 
        }

        cont.push(getLine('    ' + getBorder().substr(1, 57)));
        cont.push(getLine('    ' + info.edu[i].time));

        let prof = parser(info.edu[i].prof, 57);
        for (let j = 0; j < prof.length; j++) {
            cont.push(getLine('    ' + prof[j])); 
        }

        cont.push(getLine(''));
        cont.push(getLine(''));
    }

    cont.push(getLine(''));
    
    return cont;
}

function getAdd() {
    let cont = [];

    cont.push(getLine('   ' + getBorder()));
    cont.push(getLine(end('   |     >' + FIELD[1])));
    cont.push(getLine('   ' + getBorder()));
    cont.push(getLine(''));
    for (let i = 0; i < info.add.length; i++) {
        let name = parser(info.add[i].name, 57);
        for (let j = 0; j < name.length; j++) {
            cont.push(getLine('    ' + name[j])); 
        }

        cont.push(getLine('    ' + info.add[i].year));
        cont.push(getLine('    ' + getBorder().substr(1, 57)));
        
        for (let k = 0; k < info.add[i].spec.length; k++) {
            let prof = parser(info.add[i].spec[k], 55);
            for (let z = 0; z < prof.length; z++) {
                if(z === 0) {
                    cont.push(getLine('    * ' + prof[z])); 
                } else {
                    cont.push(getLine('      ' + prof[z])); 
                }
            }

            cont.push(getLine(''));
            cont.push(getLine(''));
        }
        
        
    }

    cont.push(getLine(''));
    
    return cont;
}

function getSkill() {
    let cont = [];

    cont.push(getLine('   ' + getBorder()));
    cont.push(getLine(end('   |     >' + FIELD[2])));
    cont.push(getLine('   ' + getBorder()));
    cont.push(getLine(''));
    for (let i = 0; i < info.skills.length; i++) {
        let name = parser(info.skills[i].name, 57);
        for (let j = 0; j < name.length; j++) {
            cont.push(getLine('    ' + name[j])); 
        }

        cont.push(getLine('    ' + getBorder().substr(1, 57)));

        for (let k = 0; k < info.skills[i].spec.length; k++) {
            let prof = parser(info.skills[i].spec[k], 55);
            for (let z = 0; z < prof.length; z++) {
                if(z === 0) {
                    cont.push(getLine('    * ' + prof[z])); 
                } else {
                    cont.push(getLine('      ' + prof[z])); 
                }
            }

            cont.push(getLine(''));
            cont.push(getLine(''));
        }
        
        
    }

    cont.push(getLine(''));
    
    return cont;
}


function getLine(line) {
    let l = line;
    while (l.length < 64) {
        l += ' ';
    }
    l += '|  ';

    return l;
}

function getBorder() {
    let b = '|'
    for (let i = 0; i < 57; i++) {
        b += '-';
    }
    b += '|'
    return b;
}


function end(line) {
    let l = line;
    while (l.length < 61) {
        l += ' ';
    }
    l += '|';
    return l;
}

const FIELD = [
    'EDUCATION', 'ADDITIONAL EDUCATION', 'SKILLS'
]

