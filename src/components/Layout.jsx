import React, { Suspense } from 'react'
import { Outlet} from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';

const Layout = () => {
      return (
    <>
      <header>
        <Navigation />
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