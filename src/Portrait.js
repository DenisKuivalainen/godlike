import React from 'react';
import Textfit from 'react-textfit';
import './Hat.css';

class Portrait extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    
    render() {
      return (
        <div className="line">
            <Textfit>                                                                                 |-------------|    </Textfit>
            <Textfit>                                                                                 |     __      |    </Textfit>
            <Textfit>                                                                                 |    |___&#92;    |    </Textfit>
            <Textfit>                                                                                 |   &#47;     &#92;   |    </Textfit>
            <Textfit>                                                                                 |   |     |   |    </Textfit>
            <Textfit>                                                                                 |   |_  _ &#47;|  |    </Textfit>
            <Textfit>                                                                                 |   |&#62;| &#60; ||  |    </Textfit>
            <Textfit>                                                                                 |   &#92;&#47;()&#92; &#47;   |    </Textfit>
            <Textfit>                                                                                 |    |^^  |   |    </Textfit>
            <Textfit>                                                                                 |    &#92;-- &#47;    |    </Textfit>
            <Textfit>                                                                                 |    |&#92;_&#47;|&#92;   |    </Textfit>
            <Textfit>                                                                                 |  _&#47;&#92;   | &#92;_ |    </Textfit>
            <Textfit>                                                                                 | &#47;   &#92;  &#47;   &#92;|    </Textfit>
            <Textfit>                                                                                 |-------------|    </Textfit>
        </div>
      );
    }
  }
  
  export default Portrait;