import React from "react";

const Section = ({ title, children }) => (
  <>
    <h3 className='title'>{title}</h3>
    {children}
  </>
);

export default Section;
