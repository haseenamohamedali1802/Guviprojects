import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import ProductScreen from "./screens/ProductScreen";

function HomeScreen() {
  return (
    <>
      <h2 className="text-center my-4">Latest Products</h2>

      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductScreen product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
