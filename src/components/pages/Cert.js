import React, { Component } from 'react';
import CERT_ACTION from '../actions/CERT_ACTION';


export default class CERT extends Component{

    render(){
        return (
            <div>
                <div class='card indigo lighten-2 z-depth-0'>
                    <div className='card-content'>
                        <h6 className='white-text'>
                            <strong>
                                <i className='fas fa-award'></i> CERTIFICATE
                            </strong>
                        </h6>
                        <hr />
                        <CERT_ACTION />
                    </div>
                </div>
            </div>
        );
    }

} 