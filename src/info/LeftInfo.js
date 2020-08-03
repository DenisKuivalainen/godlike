import React from 'react';
import { FontSize } from '../helpers/FontSize';
import {info} from '../helpers/Info';
import {parser} from '../helpers/parser';

class LeftInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    static contextType = FontSize;

    render() {
        return(
            <div>{this.getLeft()}</div>
        )
    }

    getLeft() {
        let cont = this.getInfo().concat(this.getQuol()).concat(this.getLang()).concat(this.getGit());
        return cont.map((i, k) => <p key={k} style={{fontSize: this.context}}>{i}</p>)
    }

    getInfo() {
        let cont = [];
        cont.push(this.getLine(this.getBorder()));
        cont.push(this.getLine(this.end('|      >Info')));
        cont.push(this.getLine(this.getBorder()));
        cont.push(this.getLine(''));

        let email = parser(info.email, 28);
        let add = parser(info.addres, 28);
        let tel = parser(info.tel, 28);

        for (let j = 0; j < email.length; j++) {
            cont.push(this.getLine(' ' + email[j])); 
        }
        cont.push(this.getLine(''));

        for (let j = 0; j < tel.length; j++) {
            cont.push(this.getLine(' ' + tel[j])); 
            
        }
        cont.push(this.getLine(''));

        for (let j = 0; j < add.length; j++) {
            cont.push(this.getLine(' ' + add[j])); 
        }
        cont.push(this.getLine(''));
        cont.push(this.getLine(''));
        cont.push(this.getLine(''));

        return cont;
    }

    getQuol() {
        let cont = [];
        cont.push(this.getLine(this.getBorder()));
        cont.push(this.getLine(this.end('|      >Quolities')));
        cont.push(this.getLine(this.getBorder()));
        cont.push(this.getLine(''));

        let quol = parser(info.quol, 28);

        for (let j = 0; j < quol.length; j++) {
            cont.push(this.getLine(' ' + quol[j])); 
        }

        cont.push(this.getLine(''));
        cont.push(this.getLine(''));
        cont.push(this.getLine(''));

        return cont;
    }

    getLang() {
        let cont = [];
        cont.push(this.getLine(this.getBorder()));
        cont.push(this.getLine(this.end('|      >Languages')));
        cont.push(this.getLine(this.getBorder()));
        cont.push(this.getLine(''));

        for (let i = 0; i < info.lang.length; i++) {
            cont.push(this.getLine(' * ' + info.lang[i]));
            cont.push(this.getLine(''));
        }
        cont.push(this.getLine(''));
        cont.push(this.getLine(''));

        return cont;
    }

    getGit() {
        let cont = [];
        cont.push(this.getLine(this.getBorder()));
        cont.push(this.getLine(this.end('|      >Github')));
        cont.push(this.getLine(this.getBorder()));
        cont.push(this.getLine(''));


        cont.push(this.getLine(''));
        cont.push(this.getLine(''));

        return cont;
    }

    getLine(line) {
        let l = line;
        while (l.length < 33) {
            l += ' ';
        }
    
        return l;
    }

    getBorder() {
        let b = '|'
        for (let i = 0; i < 28; i++) {
            b += '-';
        }
        b += '|'
        return b;
    }

    end(line) {
        let l = line;
        while (l.length < 29) {
            l += ' ';
        }
        l += '|';
        return l;
    }
}

export default LeftInfo