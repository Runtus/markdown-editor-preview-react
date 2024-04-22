import React, { useRef, useState, useEffect } from 'react'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { useThrottleFn } from 'ahooks'
import { useRecoilState } from 'recoil'
import { useSelectFileState } from '../../../../recoil'
import "./index.stylus"

type Props = {
    defaultText: string,
    setMdText: (val: string) => void
}

export const MdEditor: React.FC<Props> = (props) => {
    const  { defaultText, setMdText } = props;
    const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
    const monacoEl = useRef(null);

    const recoilState = useSelectFileState();
    const [fileState] = useRecoilState(recoilState);

    useEffect(() => {
        console.log("fileState",fileState);
    }, [fileState])


    const { run: onMonacoChange } = useThrottleFn<(e: monaco.editor.IModelContentChangedEvent) => void>(() => {
        setMdText(editor?.getValue() || "");
    }, {
        wait: 1000
    })


    useEffect(() => {
        if (monacoEl) {
            setEditor((editor) => {
                if (editor) return editor;

                return monaco.editor.create(monacoEl.current!, {
                    value: [defaultText].join('\n'),
					language: 'markdown'
                })
            })
            
            
        }

        return () => editor?.dispose();
    }, [monacoEl.current])


    // 绑定editor的状态
    useEffect(() => {
        if (editor) {
            console.log("绑定状态")
            editor.onDidChangeModelContent(onMonacoChange);
        }
    }, [editor, onMonacoChange])

    return (
        <>
            <div className="editor" ref={monacoEl}>

            </div>
        </>
    )
}