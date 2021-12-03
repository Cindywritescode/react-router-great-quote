import { Link, Route, useParams } from 'react-router-dom';
import { Fragment } from 'react';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Cindy', text: 'learning React is great' },
  { id: 'q2', author: 'Liang', text: 'This React course is amazing' },
  { id: 'q3', author: 'Lihsin', text: 'This React course is ok' },
  { id: 'q4', author: 'Ben', text: 'I like udemy' },
  { id: 'q5', author: 'Alex', text: 'Free code camp is my favourite' },
];

export const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quote) {
    return <NoQuotesFound/>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>
      </Route>
      <div className="centered">
        <Link className="btn--flat" to={`/quotes`}>
          Back
        </Link>
      </div>
    </Fragment>
  );
};