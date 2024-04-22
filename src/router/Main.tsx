import { FC } from 'react'
import { Outlet } from 'react-router-dom'
// import { Editors } from '../components/editors'
import { TopBar } from '../components/topbar'
// import { useLoaderData } from 'react-router-dom'

export const Main: FC =function() {
    // const data = useLoaderData();

    // console.log(this)
    return (<div>
        <TopBar />
        <div className='content'>
            <Outlet />   
        </div>
    </div >)
}