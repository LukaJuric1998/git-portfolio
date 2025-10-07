"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Shipping usually takes 3-7 business days for domestic orders.",
    },
    {
      question: "Can I return a product?",
      answer:
        "Yes! Returns are accepted within 14 days of delivery, no questions asked.",
    },
    {
      question: "Do you offer discounts for bulk orders?",
      answer: "Absolutely! Contact us directly for bulk order pricing.",
    },
    {
      question: "Is my payment secure?",
      answer:
        "Yes. All payments are processed through Stripe, which is fully PCI-compliant.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="page-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
            </button>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
