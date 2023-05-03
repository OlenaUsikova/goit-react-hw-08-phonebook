import React, { Suspense } from 'react'
import { Outlet} from 'react-router-dom';
import { NavigationBar } from './NavBar/NavigationBar';

const Layout = () => {
      return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
      <Suspense fallback={<h2>Loading.....</h2>}>
        <Outlet />
      </Suspense>
      </main>
    </>
  );
};
export default Layout