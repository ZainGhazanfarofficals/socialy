

// Local File Imports
import Left from './Left'
import Right from './Right'
import './header.scss';
import { Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className='header'>
        <Left/>
        <Right/>
      </div>
      <Outlet/>
    </>
  )
}

export default Header
