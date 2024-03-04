import React from 'react';
import './Navbar.css';
import { Button } from '@chakra-ui/react';
import { Link, useRoutes } from 'react-router-dom';
import { APODApp } from './picofTheDay';
import './register.module.css';
import {Pic} from './shownews';
import Control from './register';
const Navbar = () => {
  const routes = useRoutes([
    { path: '/news', element: <Pic/> },
    { path: '/pics', element: <APODApp/> },
    {path:'/register',element: <Control/>}
    // Add more routes as needed
  ]);
  return (
    <div className='nav'>
      <ul className='navlist'>
        <li>
          <Button colorScheme='purple'>
            <Link to='/news'>News</Link>
          </Button>
        </li>
        <li>
          <Button colorScheme='purple'>
            <Link to='/pics'>Pics</Link>
          </Button>
        </li>
        <li>
          <Button colorScheme='purple'>
            <Link to='/register'>Register</Link>
          </Button>
        </li>
      </ul>
      {routes}
    </div>
  );
};

export default Navbar;

// Example components for '/news' and '/pics'

