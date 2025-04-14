
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <img
      src="https://drive.google.com/uc?export=view&id=1a-Sxb_At_eYvXrQhXBWPkBAjZcQdsOWd"
      alt="Cindy Hsieh"
      style={{
        width: "200px",
        height: "200px",
        objectFit: "cover",
        borderRadius: "9999px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        marginBottom: "24px"
      }}
    />
    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Cindy Hsieh</h1>
    <p style={{ fontSize: '1.25rem', color: '#555' }}>
      Cellist | Performer | Collaborator
    </p>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
