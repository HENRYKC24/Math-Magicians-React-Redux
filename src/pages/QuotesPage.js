import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState({
    dataAvailable: false,
  });

  const getQuote = () => {
    setQuote(() => ({
      dataAvailable: false,
    }));

    fetch('https://random-math-quote-api.herokuapp.com/')
      .then((result) => result.json())
      .then((data) => setQuote({
        ...data,
        dataAvailable: true,
      }));
  };

  useEffect(() => getQuote(), []);

  return (
    <div className="quotes">
      {!quote.dataAvailable && <p>Loading...</p>}
      <p className="quote">{quote.quote && `${quote.quote} - ${quote.author}`}</p>
      {quote.quote && <button className="change-quote" type="button" onClick={getQuote}>Change Quote</button>}
    </div>
  );
};

export default Quotes;
