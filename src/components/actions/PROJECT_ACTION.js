import React from 'react';
import {user} from '../../data/user.js';
import ShowMore from 'react-show-more-button';

const PROJECT_ACTION = () => {
    
    return (
        <div>
            <ShowMore maxHeight={500} backgroundColor='#9fa8da'>
            {
                user.PROJECTS.map((x) => (
                    <div className='row mt'>
                        <div className='col s12'>
                            <blockquote>
                                <h6 className='indigo-text text-darken-4'>
                                    <strong>{x.TITLE}</strong>
                                    <span>{x.TAG}</span>
                                    <span>{x.YEAR}</span>
                                </h6>
                                {/* <p className='pt indigo-text text-darken-4'>{x.DESC}</p> */}
                            </blockquote>
                        </div>
                    </div>
                ))
            }   
        <br />  
        </ShowMore>
        </div>
    )
}

export default PROJECT_ACTION