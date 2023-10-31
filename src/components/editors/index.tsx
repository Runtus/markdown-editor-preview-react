import React, { FC } from 'react'
import { MdEditor } from './components/editor'
import { MdPreview } from './components/preview'
import "./index.stylus"



export const Editors: FC = () => {

    return (
        <>
            <div id='content'>
                <MdEditor />
                <MdPreview />               
            </div>
        </>
    )
}