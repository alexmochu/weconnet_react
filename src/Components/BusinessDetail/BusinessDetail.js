import React from "react";
import { Container, Card, Button, Label } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./BusinessDetail.css";

document.title = "weConnect | Business";

const BusinessDetail = props => {
  return (
    <Container text>
      <div className="business-detail">
        <br />
        <Card fluid>
          <Card.Content textAlign="center">
            <Card.Header content={props.business} />
            <Card.Meta>
              Owned by <strong>{props.owner}</strong>
            </Card.Meta>
            <p>
              <Label>Location: {props.location}</Label>

              <Label color="olive">Category: {props.category}</Label>
            </p>
          </Card.Content>
          <Card.Content extra textAlign="center">
            <Button animated="fade" color="yellow">
              <Link to={`/business/${props.id}`}>
                <Button.Content visible>View Business Reviews</Button.Content>
                <Button.Content hidden>or Review Business</Button.Content>
              </Link>
            </Button>
          </Card.Content>
        </Card>
      </div>
    </Container>
  );
};

// typechecking validation
BusinessDetail.propTypes = {
  business: PropTypes.string,
  owner: PropTypes.string,
  location: PropTypes.string,
  id: PropTypes.number
};

export default BusinessDetail;
