import React from 'react'
import zongziSvg from '../../svgs/zongzi.svg'
import "./index.stylus"

export const TopBar: React.FC = () => {
    
    return (
        <> 
            <div id='topbar'>
                <div className='imageBox'>
                    <img src={zongziSvg} alt="logo" />
                </div>  
                <h3> Markdown Editor </h3>
            </div>
        </>
    )
}