import React from 'react';
import PropTypes from 'prop-types';

import '../style/default';

const Page = (props) => (
  <article>
    <section>
      <h2>{props.title}</h2>
    </section>
  </article>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
};

Page.defaultProps = {
  title: '',
};

export default Page;
