import "./Business.css";

export default function Business() {
  return (
    <section className="business-wrapper">
      <div className="business-container">
        <h1 className="business-title">What We Have Done&nbsp; For Business</h1>

        <div className="business-grid">
          {/* Left Labels */}
          <div className="business-left">
            {[
              "Capture/OCR",
              "Classification",
              "Reconciliation",
              "AP/AR",
              "Inventory/COGS",
              "Month-End Close",
              "Compliance",
              "MIS/Consolidation",
              "Forecasts",
              "Audit",
            ].map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>

          {/* Before Manual */}
          <div className="business-card dark">
            <h3>Before (Manual)</h3>
            {[
              "Typing From PDFs/Photos",
              "Hand-Coding GL/Tax",
              "CSV + Vlookup",
              "Manual Aging & Follow-Ups",
              "Excel Joins",
              "Schedules By Hand",
              "Compile & Check",
              "Manual Decks",
              "Static Excel",
              "Document Chase",
            ].map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          {/* With Co-Book Highlight */}
          <div className="business-card highlight">
            <span className="badge">
              <span className="badge-icon">✨</span> Ultimate Solution
            </span>

            <h3>With Co-Book</h3>

            {[
              "Auto-Ingest + Line-Items",
              "AI Suggestions + Rules",
              "Auto-Match + Exceptions",
              "Smart Aging + Nudges",
              "Connected SKU Flows",
              "Auto Schedules + Checklist",
              "Return-Ready + Anomalies",
              "One-Click MIS",
              'Live "What-Ifs"',
              "Source-Linked Packs",
            ].map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          {/* Time Saved */}
          <div className="business-card dark">
            <h3>Time Saved</h3>

            {[
              "6–12 Hours",
              "5–10 Hours",
              "8–16 Hours",
              "4–8 Hours",
              "3–6 Hours",
              "6–12 Hours",
              "4–10 Hours",
              "6–14 Hours",
              "3–6 Hours",
              "4–8 Hours",
            ].map((time, i) => (
              <p key={i}>{time}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}