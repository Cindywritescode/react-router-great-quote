import { Route, useParams } from 'react-router-dom';
import { Fragment } from 'react';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Cindy', text: 'learning React is great' },
  { id: 'q2', author: 'Liang', text: 'This React course is amazing' },
  { id: 'q3', author: 'Lihsin', text: 'This React course is ok' },
  { id: 'q4', author: 'Ben', text: 'I like udemy' },
  { id: 'q5', author: 'Alex', text: 'Free code camp is my favourite' },
];

export const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId );

  if (!quote) {
    return <p>No quote found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`} >
        <Comments/>
      </Route>
    </Fragment>
  );
};