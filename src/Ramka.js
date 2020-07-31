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
                <Border fst="|" sng="-" n="1" />
                <Border fst="|" sng=" " n="17" />
                <Border fst="|" sng="-" n="1" />
        </div>
      );
    }
}
  
  export default Ramka;