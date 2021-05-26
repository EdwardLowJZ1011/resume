import React, { Component } from 'react';
import {user} from '../../data/user.js';

export default class About extends Component{

    render(){
        return (
            <div>
                <div className='card blue lighten-2 z-depth-0'>
                    <div class='card-content social right'> 
                        <h2 className='blue-text text-darken-4 right-align'>
                            <strong>{user.NAME}</strong>
                        </h2>
                        <h5 className='white-text text-darken-2 right-align'>
                            {user.CUR_TITLE}
                        </h5>
                    </div>
                </div>      
            </div>
        );
    }

} 