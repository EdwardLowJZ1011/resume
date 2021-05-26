import React from 'react'
import { user } from '../../data/user'
import ShowMore from 'react-show-more-button';

const with_condition = (items) => {

    return (
    <div className='row pt'>
        {
            items.map((item) => (
                <div className='col m6 s12'>
                <p><a href={item.URL} target="_blank" class='grey-text text-lighten-2'>{item.TITLE}</a></p>
                <strong>{item.CER_ID}</strong>
            </div>
            ))
        }
    </div>
    )
}


const CERT_ACTION = () => {
    return (
        <ShowMore maxHeight={450} backgroundColor='#7986cb'>
            <div>
                {
                    user.CERTIFICATES.map((x)=>(
                        with_condition(x)
                    ))
                }
            </div>
        </ShowMore>
    )
}

export default CERT_ACTION
