import React, { PropTypes } from 'react';

const Content = ({ children }) => (
  <section className="content">
    {children}
  </section>
);

export default Content;

Content.propTypes = {
  children: PropTypes.node
};
