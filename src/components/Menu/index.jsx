import React, {Children} from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

const Menu = () => (
  <nav className="menu">
      <NavLink
          to="/"
          className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
          }
          >
          Home
      </NavLink>
      <NavLink
          to="/reviews"
          className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
          }
          >
          Reviews
      </NavLink>
      <NavLink
          to="/articles"
          className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
          }
          >
          Articles
      </NavLink>
      <NavLink
          to="/movies/1"
          className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
          }
          >
          Movies
      </NavLink>
  </nav>
  )

export default Menu;