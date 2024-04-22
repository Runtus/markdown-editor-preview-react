import React from 'react'
import { Link } from 'react-router-dom'
import zongziSvg from '../../svgs/zongzi.svg'
import "./index.stylus"

export const TopBar: React.FC = () => {
    // dispatchEvent()
    return (
        <> 
            <div id='topbar' >
                <div className='imageBox'>
                    <img src={zongziSvg} alt="logo" />
                    
                </div>  
                <h3> Markdown Editor </h3>
                <div className='linkBox'>
                    <Link to='/friend/1234'>Home</Link>
                    <Link to='/about'>About</Link>
                </div>
            </div>
        </>
    )
}