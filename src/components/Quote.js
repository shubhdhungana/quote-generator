"use client";

import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      setQuote('Failed to fetch a quote. Please try again.');
      setAuthor('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="quote-container bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Quote of the Day</h1>
      {loading ? (
        <p className="text-lg text-gray-700">Loading...</p>
      ) : (
        <>
          <p className="text-xl text-gray-800 mb-4">{quote}</p>
          <p className="text-lg text-gray-600">- {author}</p>
        </>
      )}
    </div>
  );
};

export default Quote;
