import { FC } from "react";
import { useRouteError } from "react-router-dom"

export const Error: FC = () => {
    // 提供了抛出的错误信息
    const error = useRouteError() as {data: string};
    console.error(error);

    return (
        <div>
            <h1>404</h1>
            <p>
                <i>{ error.data }</i>
            </p>
        </div>
    )
}