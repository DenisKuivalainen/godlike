import React from 'react';
import Top from './Top';
import Buttons from './Buttons';
import {cSp} from '../helpers/Cell';

export default function Box(props) {
    return(
        <div>
            <Top projs={props.projs} top='yay' />
            <Buttons projs={props.projs} />
            <Top projs={props.projs} />
            <p style={{fontSize: props.size}}>{cSp()}</p>
        </div>            
    )
}