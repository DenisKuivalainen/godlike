import React from 'react';
import Content from './Content';
import Buttons from './Buttons';
import {cSp} from '../helpers/Cell';

export default function Box(props) {
    return(
        <div>
            <Content projects={props.projects} content='yay' />
            <Buttons projects={props.projects} />
            <Content projects={props.projects} />
            <p style={{fontSize: props.size}}>{cSp()}</p>
        </div>            
    )
}