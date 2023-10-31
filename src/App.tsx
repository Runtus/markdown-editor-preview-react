import { TopBar } from './components/topbar'
import { FileList } from './components/filelist'
import { Editors } from './components/editors'
import './App.css'

function App() {

  return (
    <>
      <div>
        <TopBar />
        <div className='content'>
          <FileList />
          <Editors />
        </div>
      </div>

    </>
  )
}

export default App
