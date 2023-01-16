import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SymbolLogo } from '../../Components/Logos';

export function SideNav(props) {
  const { routes } = props;
  const inActiveClassName = 'navlink';
  const activeClassName = `${inActiveClassName} active`;

  return (
    <nav className="sidenav-grid">
      <div className="sidenav-main-wrap">
        <div className="nav-logo">
          <SymbolLogo />
        </div>
        <ul className="space-y-2">
          <li>
            <NavLink className="navlink bg-re" exact="true" to="/">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="sidenav-svg"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              <span className="ml-3">inicio</span>
            </NavLink>
          </li>
          {Object.entries(routes)
            .slice(1)
            .map(([route, key]) => {
              return (
                <li key={key}>
                  <NavLink
                    to={routes[route]()}
                    className={({ isActive }) =>
                      isActive ? activeClassName : inActiveClassName
                    }
                  >
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="sidenav-svg"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                    <span className="ml-3">{route}</span>
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </div>
    </nav>
  );
}

SideNav.propTypes = {
  routes: PropTypes.objectOf(PropTypes.func).isRequired,
};
