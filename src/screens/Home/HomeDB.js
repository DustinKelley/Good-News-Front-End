import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:3001/home`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
      console.log(res.persons);
    });
  }

  render() {
    return (
      <Carousel className="homeCar" slide="true" variant="">
        {this.state.persons.map((person) => (
          <Carousel.Item key={person.id}>
            <img
              className="d-block w-100 carImage"
              // src="/tile4.svg"
              src="Flower.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>{person.description}</h1>
              <h3>{person.user_name}</h3>
              <p>{person.location}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}
