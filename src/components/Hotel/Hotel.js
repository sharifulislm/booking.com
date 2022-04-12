import React from 'react';
import { Card } from 'react-bootstrap';

const Hotel = ({resorts}) => {
 
   const{Country,name,picture}=resorts;

    console.log(resorts);
    return (
        <Card >
        <Card.Img variant="top" src={picture}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          {Country}
          </Card.Text>
     
        </Card.Body>
      </Card>
    );
};

export default Hotel;