import React from 'react';
import DeviceDetail from '../DeviceDetail/DeviceDetail';

const Device = (props) => {
    return (
        <div>
            <h1>I Have : {props.name}</h1>
            <DeviceDetail age={props.age}></DeviceDetail>
        </div>
    );
};

export default Device;