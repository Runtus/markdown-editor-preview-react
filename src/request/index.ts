import { httpGet} from './axios'
import { TreeFile } from '../type'

export const getFileList = () => httpGet<TreeFile>("/filelist")
