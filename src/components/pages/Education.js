import React, { Component } from 'react';
import EDUCATION_ACTION from '../actions/EDUCATION_ACTION';

export default class Education extends Component{

    render(){
        return (
            <div>
                <div class='card indigo lighten-3 z-depth-0'>
                    <div className='card-content'>
                        <h6 className='indigo-text text-darken-4'>
                            <strong>
                                <i className='fas fa-graduation-cap'></i> EDUCATION
                            </strong>
                        </h6>
                        <hr />
                        <EDUCATION_ACTION />
                        {/* <button type='button'></button> */}
                    </div>
                </div>
            </div>
        );
    }

} 