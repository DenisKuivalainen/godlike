import React from 'react';
import Border from './Border';
import './Hat.css';

class Ramka extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    
    render() {
      return (
            <div>
                <Border fst="|" snd='-' n="1" />
                <Border fst="|" snd=" " n="17" />
                <Border fst="|" snd='-' n="1" />
        </div>
      );
    }
}
  
  export default Ramka;