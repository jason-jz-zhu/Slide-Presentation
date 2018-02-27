import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Cards.css';

class Cards extends Component {
  render() {
    const cards = this.props.data.map(itemList => (
      
      <Card key={itemList.id} className="card">
        <CardImg top width="100%" src='Data%20Infra.PNG' alt='photo'/>
        <CardBody>
          <CardTitle>Data Infrastructure</CardTitle>
          <CardSubtitle>02/28/2018</CardSubtitle>
          <CardText>Quick Overview for Data Infrastructure</CardText>
          <a href={itemList.link}><Button color='info'>READ MORE</Button></a>
        </CardBody>
      </Card>
    ));
    


    return (
      <FlipMove duration={750} easing="ease" className="cards">
        {cards}
      </FlipMove>
    );
  }
}

export default Cards;
