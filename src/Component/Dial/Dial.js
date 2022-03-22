import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border: '2px solid black', margin: '10px' }}>
            <h2>This is Dial</h2>
            <p>This is so far:{props.steps}</p>
        </div>
    );
};

export default Dial;