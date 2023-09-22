import React from "react";

import { faqs } from "../../static";
import image from "../../assets/faqs.svg";

const Faqs = () => {
  const items = document.querySelectorAll(".faqs button");

  function toggleAccordion(e: any) {
    const itemToggle = e.currentTarget.getAttribute("aria-expanded");

    items.forEach((item) => {
      item.setAttribute("aria-expanded", "false");
    });

    if (itemToggle === "false") {
      e.currentTarget.setAttribute("aria-expanded", "true");
    }
  }

  const faqHandler = () => {
    items.forEach((item) => item.addEventListener("click", toggleAccordion));
  };

  return (
    <div className="homepage_faqs">
      <div className="container flex">
        <div className="faqs_container">
          <div className="title">
            <h2>
              Frequently Ask <br />
              <span className="p-clr">Question</span>
            </h2>

            <p>
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </p>
          </div>

          <div className="faqs">
            {faqs.map((faq, idx) => (
              <div key={faq.id} className="accordion-item" onClick={faqHandler}>
                <button id={`accordion-button-${idx}`} aria-expanded="false">
                  <span className="accordion-title">{faq.title}</span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div className="accordion-content">
                  <p>{faq.content}</p>
                </div>
              </div>
              //   <div key={faq.id} className="faq" onClick={faqHandler}>
              //     <button
              //       id={`accordion-button-${idx}`}
              //       aria-expanded="false"
              //       className="faq-title flex">
              //       <span>{faq.title}</span>
              //       <span className="faq-plus open">+</span>
              //       <span className="faq-minus">-</span>
              //     </button>

              //     <p className="faq-content">{faq.content}</p>
              //   </div>
            ))}
          </div>
        </div>

        <div className="right">
          <img src={image} alt="questions" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
