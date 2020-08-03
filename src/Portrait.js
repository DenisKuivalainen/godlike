import React from 'react';
import {FontSize} from './helpers/FontSize';
import './Hat.css';

class Portrait extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    static contextType = FontSize;
    
    render() {
      return (
        <div className="line">
            <p style={{fontSize: this.context}}>                                                                                 |-------------|    </p>
            <p style={{fontSize: this.context}}>                                                                                 |     __      |    </p>
            <p style={{fontSize: this.context}}>                                                                                 |    |___&#92;    |    </p>
            <p style={{fontSize: this.context}}>                                                                                 |   &#47;     &#92;   |    </p>
            <p style={{fontSize: this.context}}>                                                                                 |   |     |   |    </p>
            <p style={{fontSize: this.context}}>                                                                                 |   |_  _ &#47;|  |    </p>
            <p style={{fontSize: this.context}}>                                                                                 |   |&#62;| &#60; ||  |    </p>
            <p style={{fontSize: this.context}}>                                                                                 |   &#92;&#47;()&#92; &#47;   |    </p>
            <p style={{fontSize: this.context}}>                                                                                 |    |^^  |   |    </p>
            <p style={{fontSize: this.context}}>                                                                                 |    &#92;-- &#47;    |    </p>
            <p style={{fontSize: this.context}}>                                                                                 |    |&#92;_&#47;|&#92;   |    </p>
            <p style={{fontSize: this.context}}>                                                                                 |  _&#47;&#92;   | &#92;_ |    </p>
            <p style={{fontSize: this.context}}>                                                                                 | &#47;   &#92;  &#47;   &#92;|    </p>
            <p style={{fontSize: this.context}}>                                                                                 |-------------|    </p>
        </div>
      );
    }
  }
  
  export default Portrait;