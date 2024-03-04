import React, { useState } from 'react';
import axios from 'axios';
import './picofTheDay.css';
import { Button } from '@chakra-ui/react';
const apiKey = "xFKaZFkixW4o3huUSs4kAdGRCJHCgkUFu5asbOly";
const url = "https://api.nasa.gov/planetary/apod?";

 export function APODApp(){
  const [imageUrl, setImageUrl] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchImage = (value) => {
    setLoading(true);
    const apiUrl = `${url}date=${date}&api_key=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          const imageUrl = value === "hd" ? data.hdurl : data.url;
          setImageUrl(imageUrl);
        } else {
          window.alert("Please enter the date in correct format.");
        }
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <div className="details-container">
        <div className="title">
          <h1>Welcome to Astronomical Picture Of the Day</h1>
        </div>
        <div className="details">
          <div className="details-input">
            <span>Date: </span>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
         
          <Button 
          onClick={() => fetchImage("hd")} disabled={loading}>
            Click
          </Button>
        </div>
      </div>
      <div className="image-container">
        {loading ? (
          <p>Loading...</p>
        ) : imageUrl ? (
          <img src={imageUrl} alt="NASA APOD" />
        ) : null}
      </div>
    </div>
  );
}

