import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'


export const Root = () => {
  return (
    <div className='w-full h-[100vh]'>
        <Navbar name='Financial Market News' links={['Home']}/>
        <Outlet/>
        <Footer info={`© ${new Date().getFullYear()} - Financial Market News. All rights reserved.`}/>
    </div>
  )
}
