import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Cindy', text: 'learning React is great' },
  { id: 'q2', author: 'Liang', text: 'This React course is amazing' }
];


export const AllQuotes = () => (
  <QuoteList quotes={DUMMY_QUOTES}/>
);