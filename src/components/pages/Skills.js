import React, { Component } from 'react';
import SKILL_ACTION from '../actions/SKILL_ACTION';

export default class Skills extends Component{

    render(){
        return (
            <div>
                <div className='card indigo lighten-2 z-depth-0'>
                    <div className='card-content'>
                        <h6 className='white-text'>
                            <strong># PROFESSIONAL SKILLS</strong>
                        </h6>
                        <hr />
                        <SKILL_ACTION />
                    </div>
                </div>
            </div>
        );
    }

} 