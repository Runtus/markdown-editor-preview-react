import { FC, useEffect, useState, useCallback, useLayoutEffect, useMemo } from "react";

export const Home: FC = () => {
    const [count, setCount] = useState(0);
    const [test, setTest] = useState(1);

    // const cb = useCallback(() => {
    //     console.log(count);
    //     console.log("Ok");
    // }, [count]);

    // useCallback不会每次渲染都执行该初始化，而是从上次的callback中获取对应的缓存。只有依赖stste改变的时候才会改变
    // 但如果是普通的函数function设置，那么每次它都会执行该初始化，即每次都会创建新的函数引用
    const cb = function () {
        console.log(count);
        console.log("ok")
    }
    
    

    const dd = useMemo(() => {
        console.log("exec dd")
        return 123;
    }, []);


    console.log("dd",dd);

    // effect
    useEffect(() => {
        // debugger
        setCount(4);
    }, [])

    useLayoutEffect(() => {
        // debugger
    }, [])

    console.log("外部")
    
    return (
        <div>
            {count}
            <h1 onClick={cb}>About home</h1>
            <p onClick={() => {setCount(20)}}>
                <i>About home</i>
            </p>
        </div>
    )
}