import { FC } from "react";


export const Friend: FC = () => {
    const contact = {
        name: 'Contact Name',
        email: 'runtugo1999@gmail.com'
    }

    // const routes = useRoutes()
        
    return (
        <div>
            <h1>{ contact.name }</h1>
            <p>
                <i>{ contact.email }</i>
            </p>
        </div>
    )
}