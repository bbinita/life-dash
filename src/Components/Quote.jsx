import React, { useEffect, useState } from "react";

export default function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(`${data.content} — ${data.author}`))
      .catch(() => setQuote("Stay positive and keep coding!"));
  }, []);

  return (
    <div className="widget">
      <h2>💡 Quote of the Day</h2>
      <p>{quote}</p>
    </div>
  );
}
