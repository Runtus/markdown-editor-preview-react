import { useState, FC, useCallback } from 'react'
import { MdEditor } from './components/editor'
import { MdPreview } from './components/preview'
import "./index.stylus"

const DEFAULT_TEXT = "## Hello World"


export const Editors: FC = () => {
    const [mdText, setMdText] = useState<string>(DEFAULT_TEXT);
    const [count, setCount] = useState(0);
    const changeCount = useCallback<(c: number) => void>((count) => {
        setCount(count);
    }, []);
    return (
        <>
            <div id='content'>
                {count}
                <MdEditor
                    defaultText={DEFAULT_TEXT}
                    setMdText={(val: string) => setMdText(val)}
                />
                <MdPreview
                    mdText={mdText}
                    changeCount={changeCount}
                />               
            </div>
        </>
    )
}