import React from 'react';

const ProductDetails = ({ data }) => {
  if (!data) return null;

  return (
    <div className="product-details">
      <h2>{data.productName}</h2>
      <p><strong>Rating:</strong> {data.rating}</p>
      <p><strong>Number of Ratings:</strong> {data.numRatings}</p>
      <p><strong>Price:</strong> {data.price}</p>
      <p><strong>Discount:</strong> {data.discount}</p>
      
      <h3>Bank Offers:</h3>
      <ul>
        {data.bankOffers.map((offer, index) => <li key={index}>{offer}</li>)}
      </ul>

      <h3>About This Item:</h3>
      <ul>
        {data.aboutThisItem.map((item, index) => <li key={index}>{item}</li>)}
      </ul>

      <h3>Images:</h3>
      <div className="image-gallery">
        {data.images.map((src, index) => (
          <img key={index} src={src} alt={`Product ${index}`} />
        ))}
      </div>
    </div>
  );
};


export default ProductDetails;