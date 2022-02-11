import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { BASE_ASSETS_URL } from "../config";

function ProductList({ products = [] }) {
  return (
    <div className="product-list-container">
      <Row xs={1} md={3} className="g-4">
        {Array.isArray(products) &&
          products.map((product, index) => (
            <Col key={index} >
              <Card>
                <Card.Img
                  variant="top"
                  src={`${BASE_ASSETS_URL}${product.imageUrl}`}
                  className="p-2"
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default ProductList;
