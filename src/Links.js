import React from 'react';
import { Link } from 'react-router-dom';

function Links(props) {
  const { categories } = props
  return (
    <div>
      {categories.map(category => (
        <Link to={`/${category}`} className="top-link" key={category}>{category[0].toUpperCase() + category.slice(1)}</Link>
      ))}
      <Link to="/" className="top-link total">Total</Link>
    </div>
  );
}

export default Links;