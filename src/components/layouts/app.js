import React from 'react';
import Sidebar from '../navigation/sidebar';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main>
        {children}
      </main>
    </div>
  )
}

export default AppLayout;