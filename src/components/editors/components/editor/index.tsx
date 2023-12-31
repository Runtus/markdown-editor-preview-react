import React, { useRef, useState, useEffect } from 'react'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import "./index.stylus"

export const MdEditor: React.FC = () => {
    const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
    const monacoEl = useRef(null);

    useEffect(() => {
        if (monacoEl) {
            setEditor((editor) => {
                if (editor) return editor;

                return monaco.editor.create(monacoEl.current!, {
                    value: ['## hello World'].join('\n'),
					language: 'markdown'
                })
            })
        }

        return () => editor?.dispose();
    }, [monacoEl.current])

    return (
        <>
            <div className="editor" ref={monacoEl}>

            </div>
        </>
    )
}