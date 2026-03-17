import { useState } from "react";
import "./accordion.css";

export default function AccordionItem({ per, res }) {
  const [expandido, setExpandido] = useState(false);

  return (
      <div className="accordion-item">
        <button
          className={`accordion-header ${expandido ? "active" : ""}`}
          onClick={() => setExpandido(!expandido)}
          aria-expanded={expandido}
        >
          <h3>{per}</h3>
          <span className="icon">{expandido ? "−" : "+"}</span>
        </button>

        <div className={`accordion-content ${expandido ? "open" : ""}`}>
          <p>{res}</p>
        </div>
      </div>
    );
}
