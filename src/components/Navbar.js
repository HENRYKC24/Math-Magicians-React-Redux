import React from 'react';
import Li from './Li';

const Navbar = () => {
  const routes = [
    { route: '/', name: 'Home' },
    { route: '/calculator', name: 'Calculator' },
    { route: '/quotes', name: 'Quotes' },
  ];

  return (
    <nav className="navbar">
      <h1 className="app-name">Math Magicians</h1>
      <ul className="nav-items">
        {routes.map((route, index) => (
          <Li
            key={Math.random()}
            index={index}
            name={route.name}
            route={route.route}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
