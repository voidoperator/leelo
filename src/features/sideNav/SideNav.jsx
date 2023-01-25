import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  HomeIcon,
  FireIcon,
  RocketLaunchIcon,
  SparklesIcon,
  ChartBarIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/solid';
import { SymbolLogo } from '../../Components/Logos';
import { resetPosts } from '../posts/postsSlice';

export function SideNav(props) {
  const { routes } = props;
  const dispatch = useDispatch();
  const inActiveClassName = 'navlink-link';
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
                    value={routeName}
                    onClick={() => dispatch(resetPosts())}
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
