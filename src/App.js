import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqs = [
    {
      category: "General Questions",
      questions: [
        { q: "What is Chimoney API?", a: "Chimoney API allows seamless payments and wallet management in over 100+ countries." },
        { q: "How do I get started with Chimoney API?", a: "You can get started by visiting the Chimoney API documentation." },
        { q: "Where can I find the API documentation?", a: "API documentation is available at https://chimoney.readme.io." },
      ],
    },
    {
      category: "Authentication and Security",
      questions: [
        { q: "How to obtain an API key?", a: "Sign up at Chimoney and generate an API key in your dashboard." },
        { q: "How to manage and rotate API keys?", a: "Navigate to the API Key Management page to rotate keys securely." },
        { q: "Best practices for securing API keys?", a: "Keep keys confidential and restrict usage to specific IPs." },
      ],
    },
    {
      category: "Integration and Usage",
      questions: [
        { q: "What are the SDKs available for Chimoney API?", a: "SDKs are available for Node.js, Python, and more platforms." },
        { q: "How to integrate Chimoney API with different platforms?", a: "Refer to our step-by-step integration guides in the documentation." },
      ],
    },
    {
      category: "Error Handling",
      questions: [
        { q: "How to handle common API errors (e.g., 400, 401, 403, 404, 500)?", a: "Review the error codes section in the documentation." },
      ],
    },
    {
      category: "Support and Community",
      questions: [
        { q: "How can I get support if I encounter issues?", a: "Contact us at support@chimoney.io or join the Discord community." },
        { q: "How can I contribute to the Chimoney community?", a: "Submit feedback or contribute to the GitHub repository." },
      ],
    },
  ];

  return (
    <div className="faqs-page">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>FAQs</h1>
        <p>Your guide to getting started with Chimoney. All questions answered in one place!</p>
      </header>

      {/* FAQ Sections */}
      <div className="faq-grid">
        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex} className="faq-card">
            <h2>{section.category}</h2>
            {section.questions.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${
                  activeQuestion === `${sectionIndex}-${index}` ? "active" : ""
                }`}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleQuestion(`${sectionIndex}-${index}`)}
                >
                  {item.q}
                  <span className="icon">
                    {activeQuestion === `${sectionIndex}-${index}` ? "-" : "+"}
                  </span>
                </div>
                {activeQuestion === `${sectionIndex}-${index}` && (
                  <div className="faq-answer">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="faqs-footer">
        <a href="https://github.com/gemata/ChimoneyTranslation" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
          Medium
        </a>
        <a href="https://chimoney.io" target="_blank" rel="noopener noreferrer">
          Chimoney Toolkit
        </a>
      </footer>
    </div>
  );
}

export default App;
