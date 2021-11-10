import QuoteForm from '../components/quotes/QuoteForm';

export const NewQuotes = () => {
  const addQuoteHandler = quoteData => {
    console.log(quoteData)
  };
  return (
    <QuoteForm onAddQuote={addQuoteHandler}/>
  );
};