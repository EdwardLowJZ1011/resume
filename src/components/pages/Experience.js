import React, { Component } from 'react';
import EXPRIENCE_ACTION from '../actions/EXPRIENCE_ACTION';

export default class Experience extends Component {

    render() {
        return (
            <div>
                <div class='card indigo lighten-3 z-depth-0'>
                    <div className='card-content'>
                        <h6 className='indigo-text text-darken-4'>
                            <strong>
                                <i className='fas fa-tools'></i> EXPERIENCES
                            </strong>
                        </h6>
                        <hr />
                        <EXPRIENCE_ACTION />
                    </div>
                </div>
            </div>
        );
    }

}