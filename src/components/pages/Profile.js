import React, { Component } from 'react';
import ImgProfile from '../images/low.png';

export default class Profile extends Component{

    render(){
        return (
            <div>
                <div className='avatarImg'>
                    <img className='circle responsive-img' src={ImgProfile} alt='Edward Low' />
                </div>
            </div>
        );
    }

} 