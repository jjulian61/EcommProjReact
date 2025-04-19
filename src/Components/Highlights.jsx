import React from "react";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              Icon={<FontAwesomeIcon Icon="bolt" />}
              title="Easy and Quick"
              para="Get access to the book you purchased online instantly"
            />
            <Highlight
              Icon={<FontAwesomeIcon Icon="tags" />}
              title="Affordable"
              para="Get your hands on popular books for as little as $10"
            />
            <Highlight
              Icon={<FontAwesomeIcon Icon="book-open" />}
              title="10,000+ Books"
              para="Library has books in all your favorite categories"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
