import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  HomeIcon,
  FireIcon,
  RocketLaunchIcon,
  SparklesIcon,
  ChartBarIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/solid';
import { SymbolLogo } from '../../Components/Logos';

export function SideNav(props) {
  const { routes } = props;
  const inActiveClassName = 'navlink-btn';
  const activeClassName = `${inActiveClassName} active`;

  return (
    <nav className="sidenav-grid">
      <div className="sidenav-wrapper">
        <div className="nav-logo">
          <SymbolLogo />
        </div>
        <ul>
          {Object.entries(routes)
            .slice(1)
            .map(([routeName, routeValue]) => {
              return (
                <li key={routeValue} className="navlink-list">
                  <NavLink
                    to={routes[routeName]()}
                    className={({ isActive }) =>
                      isActive ? activeClassName : inActiveClassName
                    }
                  >
                    {routeName === 'inicio' && (
                      <HomeIcon className="heroicons" />
                    )}
                    {routeName === 'mejor' && (
                      <FireIcon className="heroicons" />
                    )}
                    {routeName === 'popular' && (
                      <RocketLaunchIcon className="heroicons" />
                    )}
                    {routeName === 'nuevo' && (
                      <SparklesIcon className="heroicons" />
                    )}
                    {routeName === 'trending' && (
                      <ChartBarIcon className="heroicons" />
                    )}
                    {routeName === undefined && (
                      <QuestionMarkCircleIcon className="heroicons" />
                    )}
                    <span className="nav-link-txt">{routeName}</span>
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
