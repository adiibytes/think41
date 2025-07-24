import React, { useState } from 'react';

const UrlLogger = () => {
  const [url, setUrl] = useState('');
  const [history, setHistory] = useState([]);
  const [historyLimit, setHistoryLimit] = useState(10); // Default display limit

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleButtonClick = () => {
    if (url.trim()) {
      console.log('Visiting URL:', url);
      visitPage(url);
      setUrl('');
    }
  };

  const handleLimitChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setHistoryLimit(isNaN(value) ? 0 : value);
  };

  const visitPage = (newUrl) => {
    if (!newUrl.trim()) return;

    setHistory((prevHistory) => {
      const filtered = prevHistory.filter(entry => entry.url !== newUrl);
      const newEntry = { url: newUrl, timestamp: new Date().toISOString() };
      const updated = [newEntry, ...filtered];
      return updated.slice(0, 50);
    });
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const getMostRecentHistory = (n) => {
    return history.slice(0, n);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={handleInputChange}
        className="border border-gray-300 p-2 rounded w-full mb-3"
      />
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Isit Page
      </button>

      <div className="mb-6">
        <label className="block mb-1 font-medium text-sm">How many recent URLs to display?</label>
        <input
          type="number"
          min="1"
          max="50"
          value={historyLimit}
          onChange={handleLimitChange}
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>

      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">Most Recent Visits (Top {historyLimit})</h3>
        {history.length > 0 && (
          <button
            onClick={clearHistory}
            className="text-red-600 hover:underline text-sm"
          >
            Clear History
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="text-gray-500">No history yet.</p>
      ) : (
        <ul className="list-disc pl-5 text-sm text-gray-800">
          {getMostRecentHistory(historyLimit).map((entry, index) => (
            <li key={index}>
              {entry.url}{' '}
              <span className="text-gray-500">
                ({new Date(entry.timestamp).toLocaleString()})
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UrlLogger;
