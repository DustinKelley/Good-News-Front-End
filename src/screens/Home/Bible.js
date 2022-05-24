import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";

const ApiCall = () => {
  const [verse1, setVerse1] = useState([]);
  const [verse2, setVerse2] = useState([]);
  const [verse3, setVerse3] = useState([]);

  useEffect(() => {
    axios
      .get("https://bible-api.com/ephesians+3:19-20")
      .then((res) => {
        setVerse1(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://bible-api.com/john+3:16-17")
      .then((res) => {
        setVerse2(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://bible-api.com/philippians+4:8")
      .then((res) => {
        setVerse3(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const objList = [verse1, verse2, verse3];

  return (
    <>
      <Carousel 
        className="p-4 d-flex justify-content-center box"
        indicators={false}
        interval={10000}
        controls={false}
        fade={true}
      >
        {objList.map((data, i) => (
          <Carousel.Item key={i}>
            <p className="d-block w-100 justify-content-center">
              "{data.text}"
            </p>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ApiCall;
