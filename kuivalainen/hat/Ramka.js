import React from 'react';
import {generateName} from './Letters';
import {info} from '../helpers/Info';
import { FontSize } from '../helpers/FontSize';
import {cFl, cCl, cLn, cSp} from '../helpers/Cell'

class Ramka extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    static contextType = FontSize;
    
    render() {
      return (
        <div>
          {this.getRender()}
        </div>
      );
    }

    getRender() {
      let arr = this.getLine();
      // let arr = this.getLine();

      return arr.map((val, k) => <p id={'hat_' + k} style={{fontSize: this.context}}>{val}</p>)
    }

    getFullName() {
      let arr = ['   '];
      return arr.concat(generateName(info.name)).concat('   ').concat('   ').concat(generateName(info.sur)).concat('   ');
    }

    getLine() {
      let arr = this.getFullName();
      let face = this.getFace();
      let res = [];

      res.push(cLn());
      res.push(cCl(cFl(arr[0], 100)));

      for (let i = 0; i < face.length; i++) {
        let nm = arr[i+1];
        let fc = face[i];
        
        res.push(cCl(cFl(cFl(nm, 80) + fc, 100)));       
      }
      
      res.push(cCl(cFl(arr[arr.length - 1], 100)));
      res.push(cLn());
      res.push(cSp());
      res.push(cSp());
      res.push(cSp());
      res.push(cSp());
      res.push(cSp());

      return res;
    }

    getFace() {
      let arr = [];
    
      arr.push(String.raw`|-------------|`)
      arr.push(String.raw`|             |`)
      arr.push(String.raw`|     __      |`)
      arr.push(String.raw`|    |___\    |`)
      arr.push(String.raw`|   /     \   |`)
      arr.push(String.raw`|   |     |   |`)
      arr.push(String.raw`|   |_  _ /|  |`)
      arr.push(String.raw`|   |>| < ||  |`)
      arr.push(String.raw`|   \/()\ /   |`)
      arr.push(String.raw`|    |^^  |   |`)
      arr.push(String.raw`|    \-- /    |`)
      arr.push(String.raw`|    |\_/|\   |`)
      arr.push(String.raw`|  _/\   | \_ |`)
      arr.push(String.raw`| /   \  /   \|`)
      arr.push(String.raw`|-------------|`)

      return arr;
    }
    
}


  
  export default Ramka;