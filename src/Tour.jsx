import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMode, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMode ? info : `${info.substring(0, 200)}...`}
        <button type="button" className="info-btn" onClick={()=> setReadMore(!readMode)}>
          {readMode ? 'show less' :'read more'}
        </button></p>
        <button
          type="button"
          className="btn tbn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
