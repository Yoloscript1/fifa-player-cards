import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p><strong>Team:</strong> {team}</p>
          <p><strong>Nationality:</strong> {nationality}</p>
          <p><strong>Jersey Number:</strong> {jerseyNumber}</p>
          <p><strong>Age:</strong> {age}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  imageUrl: PropTypes.string
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown Nationality",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/150"
};

export default Player;
