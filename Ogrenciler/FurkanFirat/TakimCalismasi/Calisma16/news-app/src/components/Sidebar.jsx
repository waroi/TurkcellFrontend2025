import { NavLink } from 'react-router';

export default function Sidebar() {
  return (
    <ul className='list-group'>
      <NavLink className='list-group-item' to='/news/general'>
        General
      </NavLink>
      <NavLink className='list-group-item' to='/news/tech'>
        Tech
      </NavLink>
      <NavLink className='list-group-item' to='/news/sports'>
        Sports
      </NavLink>
      <NavLink className='list-group-item' to='/news/health'>
        Health
      </NavLink>
      <NavLink className='list-group-item' to='/news/business'>
        Business
      </NavLink>
    </ul>
  );
}
