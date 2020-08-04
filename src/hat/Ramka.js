import React from 'react';
import {getName} from './Letters';
import {info} from '../helpers/Info';
import { FontSize } from '../helpers/FontSize';
import './Hat.css';

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
      let arr = this.getFullName();
      // let arr = this.getLine();

      return arr.map((val, k) => <p id={'hat_' + k} style={{fontSize: this.context}}>{val}</p>)
    }

    getFullName() {
      return getName(info.name).concat('   ').concat(getName(info.sur));
    }

    getLine() {
      let arr = this.getFullName();
      let FACE = this.getFace();

      for (let i = 0; i < FACE.length; i++) {
        while(arr[i].length < 80) {
          //arr[i] += ' ';
        }
        arr += FACE[i];        
      }
      
      for (let j = 0; j < arr.length; j++) {
        while(arr[j].length < 100) {
          arr[j] += ' ';
        }
        arr[j] = '|' + arr[j].substr(1, 98) + '|'
      }

      return arr;
    }

    getFace() {
      let arr = [];
    
      arr.push(String.raw`|-------------|`)
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