import React, { useCallback, useEffect, useState } from 'react'
import { getFileList } from '../../request'
import { TreeFile } from '../../type'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import type { MenuInfo } from "rc-menu/lib/interface"
import { useRecoilState } from 'recoil'
import { useSelectFileState } from '../../recoil'
import { useLoaderData } from 'react-router-dom'
import "./index.stylus"

// Required 关键词貌似可以直接获取对象/数组中的类型？研究一下


type MenuItem = Required<MenuProps>["items"][number];
type treefilenode = Required<TreeFile>[number]


// 将treefile数据处理成MenuItem的格式
const treefileFormatDfs: (node: treefilenode) => MenuItem = (node) => {
    const obj: MenuItem = {
        key: node.name,
        label: node.name,
        children: node.child ? node.child.map(item => treefileFormatDfs(item)) : undefined
    };

    return obj;
}

type Props = {
    children: React.ReactNode,
    other: string
}

export const FileList: React.FC<Props> = ({ children, other }) => {
    console.log(children)
    const [menuItems, setMenuItems] = useState<MenuProps["items"]>([])
    const data = useLoaderData() as TreeFile;
    const [treefile, ] = useState<TreeFile>(data);
    // recoil fileState 状态管理
    const fileStateRecoil = useSelectFileState();
    const [ , setFileState] = useRecoilState(fileStateRecoil);

    const onMenuClick: MenuProps["onClick"] = useCallback<(e: MenuInfo) => void>((event) => {
        setFileState(event.key);
    }, [setFileState])


    
    // 处理item
    useEffect(() => {
        if (treefile.length !== 0) {
            setMenuItems(treefile.map(item => treefileFormatDfs(item)))
        }
    }, [treefile])

  

    return (
        <>
            <div className='fileList'>
                <Menu
                    mode='inline'
                    items={menuItems}
                    onClick={onMenuClick}
                />
            </div>
        </>
    )
}