import React, {Component} from 'react';
import Profile from './Profile';
import Summary from './Summary/summary';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import CERT from './Cert';
import PROJECT from './Project';


export default class Home extends Component{

    render(){
        return <section>
            <div className='row'>
                <About />
            </div>
            <div className='row sameHeight hide-on-med-and-down'>
                <div className='col s12 m12 l8 indigo lighten-3 sameHeight_child'>
                    <Summary />
                    <Education />
                    <Experience />
                    <PROJECT />
                </div>

                <div className='col s12 m12 l4 indigo lighten-1 sameHeight_child'>
                    <Profile />
                    <Contact />
                    <Skills />
                    <CERT />
                </div>
            </div>
            <div className='row sameHeight hide-on-large-only'>
                <div className='col s12 m12 l4 indigo lighten-1 sameHeight_child'>
                    <Profile />
                    <Contact />
                    <Skills />
                    <CERT />
                </div>

                <div className='col s12 m12 l8 indigo lighten-3 sameHeight_child'>
                    <Summary />
                    <Education />
                    <Experience />
                    <PROJECT />
                </div>
            </div>
        </section>
    }
}