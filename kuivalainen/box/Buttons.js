import React from 'react';

import {FontSize} from '../helpers/FontSize';
import {info} from '../helpers/Info';
import {cFl, cCl} from '../helpers/Cell';


class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                web1: 0,
                web2: 0,
                web3: 0,
                git1: 0,
                git2: 0,
                git3: 0,
            }
        };
    }
    static contextType = FontSize;

    changeTextColot(arg) {
        return this.state.style[arg] > 0 ? {color: "#00cc00"} : {color: "#ffffff"};
    }

    returnButtonLine(val) {
        let a = this.props.projects.length;

        switch (a) {
            case 1:
                return(
                    <p style={{fontSize: this.context}}>
                        {cCl(cFl('', 6)) + cFl('', 2)}
                        {eval("this.makeButton" + val + "('web1')")}
                        {cFl('', 4)}
                        {eval("this.makeButton" + val + "('git1')")}
                        {cFl('', 2) + cCl(cFl('', 68))}
                    </p>
                )
        
            case 2:
                return(
                    <p style={{fontSize: this.context}}>
                        {cCl(cFl('', 6)) + cFl('', 2)}
                        {eval("this.makeButton" + val + "('web1')")}
                        {cFl('', 4)}
                        {eval("this.makeButton" + val + "('git1')")}
                        {cFl('', 2) + cCl(cFl('', 5)) + cFl('', 2)}
                        {eval("this.makeButton" + val + "('web2')")}
                        {cFl('', 4)}
                        {eval("this.makeButton" + val + "('git2')")}
                        {cFl('', 2) + cCl(cFl('', 37))}
                    </p>
                )

            case 3:
                return(
                    <p style={{fontSize: this.context}}>
                        {cCl(cFl('', 6)) + cFl('', 2)}
                        {eval("this.makeButton" + val + "('web1')")}
                        {cFl('', 4)}
                        {eval("this.makeButton" + val + "('git1')")}
                        {cFl('', 2) + cCl(cFl('', 5)) + cFl('', 2)}
                        {eval("this.makeButton" + val + "('web2')")}
                        {cFl('', 4)}
                        {eval("this.makeButton" + val + "('git2')")}
                        {cFl('', 2) + cCl(cFl('', 5)) + cFl('', 2)}
                        {eval("this.makeButton" + val + "('web3')")}
                        {cFl('', 4)}
                        {eval("this.makeButton" + val + "('git3')")}
                        {cFl('', 2) + cCl(cFl('', 6))}
                    </p>
                )
                
                break;
        }
    }

    makeElementActive = (arg) => {
        let obj = this.state.style;
        obj[arg] += 1;
        this.setState({style: obj});
    }

    makeElementPassive = (arg) => {
        let obj = this.state.style;
        obj[arg] -= 1;
        this.setState({style: obj});
    }

    makeButtonBorder(arg) {
        return(
            <a 
                style={this.changeTextColot(arg)} 
                onMouseOver={() => this.makeElementActive(arg)}
                onMouseOut={() => this.makeElementPassive(arg)}
                href={this.props.projects[parseInt(arg.substr(3, 1))-1][arg.substr(0, 3)]}
            >|-------|</a>
        )
    }

    makeButtonValue(arg) {
        let val =arg.substr(0, 3);
        return(
            <a 
                style={this.changeTextColot(arg)} 
                onMouseOver={() => this.makeElementActive(arg)}
                onMouseOut={() => this.makeElementPassive(arg)}
                href={this.props.projects[parseInt(arg.substr(3, 1))-1][val]}
            >{'|  ' + val + '  |'}</a>
        )
    }

    render() {
        return(
            <div class="bd">
                {this.returnButtonLine('Border')}
                {this.returnButtonLine('Value')}
                {this.returnButtonLine('Border')}
            </div>
        )
    }
}


export default Buttons;