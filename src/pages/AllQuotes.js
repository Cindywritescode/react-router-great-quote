import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Cindy', text: '1. learning React is great' },
  { id: 'q2', author: 'Liang', text: '2.This React course is amazing' },
  { id: 'q3', author: 'Lihsin', text: '3. This React course is ok' },
  { id: 'q4', author: 'Ben', text: '4. I like udemy' },
  { id: 'q5', author: 'Alex', text: '5. Free code camp is my favourite' },
];


export const AllQuotes = () => (
  <QuoteList quotes={DUMMY_QUOTES}/>
);