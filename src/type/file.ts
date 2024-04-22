export type Response<T = null> = {
    data: T,
    // @todo status应该放枚举类型
    status: number,
    err: string 
}

export type TreeFile = Array<{
    name: string,
    isDir: boolean,
    child: TreeFile | null
}>
