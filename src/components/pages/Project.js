import React, { Component } from 'react';
import PROJECT_ACTION from '../actions/PROJECT_ACTION';

export default class PROJECT extends Component{

    render(){
        return (
            <div>
                <div class='card indigo lighten-3 z-depth-0'>
                    <div className='card-content'>
                        <h6 className='indigo-text text-darken-4'>
                            <strong>
                                <i className='fas fa-laptop-code'></i> PROJECT
                            </strong>
                        </h6>
                        <hr />
                        <PROJECT_ACTION />

                    </div>
                </div>
            </div>
        );
    }

} 