import classes from './MainNavigation.module.css';
import { Link, NavLink } from 'react-router-dom';

export const MainNavigation = () => {

  return (
    <header className={classes.header}>
      <Link to={'/'} className={classes.logo}>Great Quote</Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to={'/quotes'} activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-quote'} activeClassName={classes.active}>
              Add New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};