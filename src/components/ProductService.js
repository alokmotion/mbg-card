import React from "react";

const ProductService = ({ name, text, image }) => {
  return (
    <div className="item">
      <div className="shadow-effect">
        <img className="img-circle" src={image} alt={name} />
        <p>{text}</p>
      </div>
      <div className="testimonial-name">{name}</div>
    </div>
  );
};

export default ProductService;
