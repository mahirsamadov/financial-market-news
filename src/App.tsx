import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes'


function App() {


  return (
    <div className="App w-full h-[100vh]">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
