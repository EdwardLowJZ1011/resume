import React from 'react'
import { user } from '../../data/user'

const EDUCATION_ACTION = () => {
    return (
        <div>
            {
                user.EDUCATION.map((x)=>(
                    <div className='row mt'>
                            <div className='col s12'>
                                <blockquote>
                                    <h6 className='indigo-text text-darken-4'>
                                        <strong>{x.TITLE}</strong>
                                        <span>{x.YEAR}</span>
                                    </h6>
                                    <p className='pt indigo-text text-darken-4'>{x.DESC}</p>
                                </blockquote>
                            </div>
                        </div>
                ))
            }
        </div>
    )
}

export default EDUCATION_ACTION
