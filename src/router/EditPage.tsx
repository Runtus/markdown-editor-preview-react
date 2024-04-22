import { FileList } from '../components/filelist'
import { Editors } from '../components/editors/index'
import { FC } from 'react'
import { useParams } from 'react-router-dom'


export const EditPage: FC = () => {
    const params = useParams();
    // const querys = 
    console.log("params",params)
    return (
        <div>
            <FileList other='12345'>
                <h1>Test</h1>
                
            </FileList>
            <Editors />
        </div>
    )
}