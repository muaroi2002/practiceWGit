import React from 'react';
import '../Sidebar/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>Home</li>
        <li>Friends</li>
        <li>Messages</li>
        <li>Notifications</li>
      </ul>
    </div>
  );
}

export default Sidebar;
