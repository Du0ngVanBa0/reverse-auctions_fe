import React from 'react';
import '../css/Title.css'
function Title(props) {
    return (
        <div className='frame'>
            <div className='frame_p'>{props.de}</div>
        </div>
    )
}
export default Title;