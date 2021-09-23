import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [currentQuote, setCurrentQuote] = useState({
    dataAvailable: false,
    quote: '',
    author: '',
  });

  const getQuote = () => {
    setCurrentQuote(() => ({
      dataAvailable: false,
    }));

    fetch('https://random-math-quote-api.herokuapp.com/')
      .then((result) => result.json())
      .then((data) => setCurrentQuote({
        ...data,
        dataAvailable: true,
      }));
  };

  useEffect(() => getQuote(), []);
  const { dataAvailable, quote, author } = currentQuote;

  return (
    <div className="quotes">
      {!dataAvailable && <p>Loading...</p>}
      <p className="quote">
        {quote && `${quote}`}
        <br />
        <span className="quote">{quote && `- ${author}`}</span>
      </p>
      {quote && <button className="change-quote" type="button" onClick={getQuote}>Change Quote</button>}
    </div>
  );
};

export default Quotes;
