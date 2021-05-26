import React from 'react'
import ShowMore from 'react-show-more-button/dist'
import { user } from '../../data/user'

const with_condition = (items) => {

    return (
    <div className='row pt'>
        {
            items.map((item) => (
                <div className='col m6 s12'>
                <p class='grey-text text-lighten-2'>{item.LANGUAGE}</p>
                <div className='progress white'>
                    <div className='determinate indigo lighten-3' style={{width: item.PROFICIENCY}}>
                    </div>
                </div>
            </div>
            ))
        }
    </div>
    )
}


const SKILL_ACTION = () => {
    return (
        <ShowMore maxHeight={450} backgroundColor='#7986cb'>
        <div>
            {
                user.SKILLS.map((x)=>(
                    with_condition(x)
                ))
            }
        </div>
        </ShowMore>
    )
}

export default SKILL_ACTION
