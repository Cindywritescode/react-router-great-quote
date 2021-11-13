import classes from './QuoteItem.module.css';
import { NavLink } from 'react-router-dom';

const QuoteItem = (
  text,
  author
) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <NavLink className="btn" to="/quotes/:quoteId">
        View Fullscreen
      </NavLink>
    </li>
  );
};

export default QuoteItem;
