import { Fragment } from 'react';
import { MainNavigation } from './MainNavigation';
import classes from './Layout.module.css';

export const Layout = ({
  children
}) => {
  return (
    <Fragment>
      <MainNavigation/>
      <main className={classes.main}>
        {children}
      </main>
    </Fragment>
  );
};