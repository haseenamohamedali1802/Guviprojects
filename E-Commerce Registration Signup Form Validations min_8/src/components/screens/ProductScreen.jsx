import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductScreen({ product }) {
  return (
    <Card className="my-3 p-3 rounded shadow-sm product-card">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          alt={product.name}
          variant="top"
          style={{ height: "200px", objectFit: "cover" }}
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="h5" className="text-center">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="h6" className="text-center text-muted my-2">
          ⭐ {product.ratings} | {product.numReviews} Reviews
        </Card.Text>

        <Card.Text as="h5" className="text-center text-success">
          Rs {product.price}
        </Card.Text>

        <div className="text-center">
          <Link className="text-primary" to={`/product/${product._id}`}>
            View More
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductScreen;
