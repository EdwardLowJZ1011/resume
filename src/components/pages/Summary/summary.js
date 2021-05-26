import React, { Component, useState } from 'react';
import { user } from '../../../data/user.js';
import ReactReadMoreReadLess from "react-read-more-read-less";


export default class Summary extends Component {

    render() {
        return (
            <div>
                <div className='card indigo lighten-3 z-depth-0'>
                    <div className='card-content'>
                        <h6 className='no-pad mt-bottom indigo-text text-darken-4'>
                            <strong>
                                About Me
                            </strong>
                            <p class='pt indigo-text text-darken-4 aboutMe'>
                            <ReactReadMoreReadLess
                                charLimit={500}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}
                            >
                                {user.AboutME}
                            </ReactReadMoreReadLess>
                            </p>
                        </h6>
                    </div>
                </div>
            </div>
        );
    }

}