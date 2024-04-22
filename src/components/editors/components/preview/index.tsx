import React, { useCallback, useEffect, useRef, useState } from 'react'
import Markdown from 'react-markdown' 
import { Prism as Syntaxhighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import { jsPDF } from 'jspdf'
import "./index.stylus"

type Props = {
    mdText: string,
    changeCount: (count: number) => void
}

const doc = new jsPDF({
    unit: "px",
    hotfixes: ["px_scaling"]
});

export const MdPreview: React.FC<Props> = (props) => {
    const { mdText, changeCount } = props;

    const mdRef = useRef<HTMLDivElement>(null);


    const onGenerate = useCallback(() => {
        const mdDom = mdRef.current as HTMLElement;
        doc.html(mdDom, {
            callback(doc) {
                console.log(mdDom.clientWidth)
                doc.save()

            },
            autoPaging: "slice",
            filename: "exportPdf.pdf",
            width: 500,
            windowWidth: 500
        })
    }, []) 

    const [count, setCount] =  useState(0);
    console.log("Count", count);

    useEffect(() => {
        console.log(mdText)
    }, [mdText]);
    return (
        <>
            <button onClick={() => { setCount(count + 1); changeCount(count)}}>
                    生成
                </button>
            <div id='MdPreview' ref={mdRef}>
                <Markdown
                    children={mdText}
                    remarkPlugins={[remarkGfm]}
                    components={{
                        code(props) {
                            const { children, className, ...rest } = props;
                            // match => 用于获取高亮语言类型
                            const match = /language-(\w+)/.exec(className || "");
                            return match ? (
                                <Syntaxhighlighter
                                    {...rest}
                                    children={String(children)}
                                    style={materialOceanic}
                                    language={match[1]}
                                    PreTag="div"
                                    
                                />
                            ) : (
                                    <code {...rest} className={className}>
                                        {children}
                                    </code>
                            )
                        }
                    }}
                />
            </div>
        </>
    )
}