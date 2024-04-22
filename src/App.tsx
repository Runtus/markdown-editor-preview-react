import { RecoilRoot } from 'recoil'
import { Main } from './router/Main'
import { Error } from './router/Error'
import { About } from './router/About'
import { EditPage } from './router/EditPage'
import { Home } from './router/Home'
import { createBrowserRouter, LoaderFunction, RouterProvider } from 'react-router-dom'
import { getFileList } from './request'

const getFile: LoaderFunction = async ({ params }) => {
  const result = await getFileList();
  return result.data;
}

const router = createBrowserRouter([{
  path: "/",
  element: <Main />,
  errorElement: <Error />,
  children: [{
    path: "/home",
    element: <Home />
  },{
    path: "/file/:fileId",
    element: <EditPage />,
    // 貌似loader有缓存
    loader: getFile
  }, {
    path: "/about",
    element: <About />
  }] 
}]);


import './App.css'

function App() {

  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
