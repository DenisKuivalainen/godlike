import React from 'react';

import {FontSize} from '../helpers/FontSize';
import {cFl, cCl} from '../helpers/Cell';
import {parser} from '../helpers/parser';

export default class Content extends React.Component {
    constructor(props) {
      super(props);
    }
    static contextType = FontSize;

    returnBorderLine() {
        let a = '';
        while(a.length < 28) {
            a += '-';
        }

        return cCl(a);
    }

    returnNameLine(projectName) {
        return cCl(cFl('|    >' + projectName, 28));
    }

    returnDecriptionLines(desc) {
        let arr = [];
        let description = parser(desc, 22);
        for (let j = 0; j < description.length; j++) {
            arr.push('   ' + description[j]); 
        }

        while(arr.length < 5) {
            arr.push('');
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i] = cCl(cFl(arr[i], 28));
        }

        return arr;
    }

    buildTopPart(project) {
        let arr = [];
        arr.push(this.returnBorderLine());
        arr.push(this.returnNameLine(project.name));
        arr.push(this.returnBorderLine());
        arr.push(cCl(cFl('', 28)));

        let sub = this.returnDecriptionLines(project.desc);
        sub.forEach(element => {
            arr.push(element);
        });

        arr.push(cCl(cFl('', 28)));

        return arr;
    }

    buildButtomPart(project) {
        let arr =[];
        arr.push(cCl(cFl('', 28)));
        arr.push(this.returnBorderLine());

        return arr;
    }

    buildBoxPart() {
        let arr = [];

        if(this.props.content !== undefined) {
            arr = Array(10).fill('     ');

            for (let i = 0; i < this.props.projects.length; i++) {
                let sub = this.buildTopPart(this.props.projects[i]);

                for (let j = 0; j < 10; j++) {
                    arr[j] += sub [j] + '   ';
                }
            }
        } else {
            arr = Array(2).fill('     ');
            for (let i = 0; i < this.props.projects.length; i++) {
                let sub = this.buildButtomPart(this.props.projects[i]);

                for (let j = 0; j < 2; j++) {
                    arr[j] += sub [j] + '   ';
                }
            }
            arr.push('');
            arr.push('');
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i] = cCl(cFl(arr[i], 100));
        }
        
        return arr;
    }

    render() {
        return(
            <div>
                {this.buildBoxPart().map((val, i) => {
                    return <p key={i} style={{fontSize: this.context}}>{val}</p>
                })}
            </div>
        )
    }

}
