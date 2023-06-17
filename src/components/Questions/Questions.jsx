import { useState } from "react";
import "./Questions.css";

const faqs = [
  {
    title: "Lorem ipsum dolor sit amet consectetur?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "Uid ratione beatae sequi aspernatu?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Reiciendis aliquam possimus dolor sed!?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function Questions() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion-section">
      <p className="accordion-title">Frequently Asked Questions</p>
      <div className="accordion">
        {data.map((el, i) => (
          <AccordionItem
            curOpen={curOpen}
            onOpen={setCurOpen}
            title={el.title}
            num={i}
            key={el.title}
          >
            {el.text}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`item-questions ${isOpen ? "open" : ""}`}
      onClick={handleToggle}
    >
      <p className="number-questions">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title-questions">{title}</p>
      <p className="icon-questions">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box-questions">{children}</div>}
    </div>
  );
}
