import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Cindy', text: 'learning React is great' },
  { id: 'q2', author: 'Liang', text: 'This React course is amazing' },
  { id: 'q3', author: 'Lihsin', text: 'This React course is ok' },
  { id: 'q4', author: 'Ben', text: 'I like udemy' },
  { id: 'q5', author: 'Alex', text: 'Free code camp is my favourite' },
];


export const AllQuotes = () => (
  <QuoteList quotes={DUMMY_QUOTES}/>
);