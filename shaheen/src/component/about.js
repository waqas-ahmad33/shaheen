import React from 'react'
import Teachinf from './Teachinf'

const About = () => {
    return (
        <div className='flex m-2 py-4 justify-center items-center flex-row space-x-14'>
            <div><Teachinf name="Waqas Ahmad" qualification="Bs software eng"/></div>
            <div>
            <Teachinf name="Noman" qualification="Bs computer science"/></div>
            <div>
                
            <Teachinf name="Hassan Raza" qualification="Bs english"/>

            </div>
            
        </div>
    )
}

export default About