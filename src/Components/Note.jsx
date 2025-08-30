import React, { useState, useEffect } from "react";

export default function Notes() {
  const [note, setNote] = useState(() => {
    return localStorage.getItem("note") || "";
  });

  useEffect(() => {
    localStorage.setItem("note", note);
  }, [note]);

  return (
    <div className="widget">
      <h2>🖊 Quick Notes</h2>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write something..."
        rows="5"
      ></textarea>
    </div>
  );
}
