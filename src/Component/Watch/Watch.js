import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';


const Watch = () => {
    const [steps, setStep] = useState(0)

    const increasStep = () => {
        const newStep = steps + 1
        setStep(newStep)
    }
    useEffect(() => {
        console.log(steps)
    }, [steps])
    return (
        <div style={{ border: '2px solid purple', margin: '20px' }}>
            <h2>This is my smart watch </h2>
            <h3>My current step  {steps}</h3>
            <button onClick={increasStep}> De Doure....  </button>
            <Display name='garmin' steps={steps}></Display>
        </div>
    );
};

export default Watch;