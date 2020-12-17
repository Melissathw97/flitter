import React from 'react';
import Sidebar from '../navigation/sidebar';

const AppLayout = ({ profileData, children }) => {
  return (
    <div>
      <Sidebar
        profileData={profileData}
      />
      <main>
        <div className="content-container">
          {children}
        </div>
      </main>
    </div>
  )
}

export default AppLayout;