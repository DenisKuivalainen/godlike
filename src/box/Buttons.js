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

    getStyle(arg) {
        return this.state.style[arg] > 0 ? {color: "#00cc00"} : {color: "#ffffff"};
    }

    getBorder(val) {
        let a = this.props.projs.length;

        switch (a) {
            case 1:
                return(
                    <p style={{fontSize: this.context}}>
                        {cCl(cFl('', 6)) + cFl('', 2)}
                        {eval("this.button" + val + "('web1')")}
                        {cFl('', 4)}
                        {eval("this.button" + val + "('git1')")}
                        {cFl('', 2) + cCl(cFl('', 68))}
                    </p>
                )
        
            case 2:
                return(
                    <p style={{fontSize: this.context}}>
                        {cCl(cFl('', 6)) + cFl('', 2)}
                        {eval("this.button" + val + "('web1')")}
                        {cFl('', 4)}
                        {eval("this.button" + val + "('git1')")}
                        {cFl('', 2) + cCl(cFl('', 5)) + cFl('', 2)}
                        {eval("this.button" + val + "('web2')")}
                        {cFl('', 4)}
                        {eval("this.button" + val + "('git2')")}
                        {cFl('', 2) + cCl(cFl('', 37))}
                    </p>
                )

            case 3:
                return(
                    <p style={{fontSize: this.context}}>
                        {cCl(cFl('', 6)) + cFl('', 2)}
                        {eval("this.button" + val + "('web1')")}
                        {cFl('', 4)}
                        {eval("this.button" + val + "('git1')")}
                        {cFl('', 2) + cCl(cFl('', 5)) + cFl('', 2)}
                        {eval("this.button" + val + "('web2')")}
                        {cFl('', 4)}
                        {eval("this.button" + val + "('git2')")}
                        {cFl('', 2) + cCl(cFl('', 5)) + cFl('', 2)}
                        {eval("this.button" + val + "('web3')")}
                        {cFl('', 4)}
                        {eval("this.button" + val + "('git3')")}
                        {cFl('', 2) + cCl(cFl('', 6))}
                    </p>
                )
                
                break;
        }
    }

    getActive = (arg) => {
        let obj = this.state.style;
        obj[arg] += 1;
        this.setState({style: obj});
    }

    getPassive = (arg) => {
        let obj = this.state.style;
        obj[arg] -= 1;
        this.setState({style: obj});
    }

    buttonB(arg) {
        return(
            <a 
                style={this.getStyle(arg)} 
                onMouseOver={() => this.getActive(arg)}
                onMouseOut={() => this.getPassive(arg)}
                href={this.props.projs[parseInt(arg.substr(3, 1))-1][arg.substr(0, 3)]}
            >|-------|</a>
        )
    }

    buttonV(arg) {
        let val =arg.substr(0, 3);
        return(
            <a 
                style={this.getStyle(arg)} 
                onMouseOver={() => this.getActive(arg)}
                onMouseOut={() => this.getPassive(arg)}
                href={this.props.projs[parseInt(arg.substr(3, 1))-1][val]}
            >{'|  ' + val + '  |'}</a>
        )
    }

    render() {
        return(
            <div class="bd">
                {this.getBorder('B')}
                {this.getBorder('V')}
                {this.getBorder('B')}
            </div>
        )
    }
}


export default Buttons;