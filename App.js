import React, { useState } from "react";

const conditionMap = {
  fever: ["Flu", "COVID-19", "Dengue"],
  cough: ["Cold", "COVID-19"],
  headache: ["Migraine", "Tension Headache"],
  fatigue: ["Anemia", "Thyroid", "Sleep Deprivation"],
  cold: ["Allergic Rhinitis", "Viral Cold"]
};

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleCheck = () => {
    const match = conditionMap[input.toLowerCase()] || [];
    setResults(match);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Symptom to Condition Checker</h1>
      <input
        type="text"
        placeholder="Enter a symptom (e.g., fever)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "8px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={handleCheck} style={{ padding: "8px 16px" }}>
        Check Conditions
      </button>

      {input && (
        <div style={{ marginTop: "20px" }}>
          {results.length > 0 ? (
            <>
              <h3>Possible Conditions:</h3>
              <ul>
                {results.map((cond, index) => (
                  <li key={index}>{cond}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>No matching conditions found for <strong>{input}</strong>.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
