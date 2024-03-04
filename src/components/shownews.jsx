// Pic.js
import React, { useState, useEffect } from "react";
import Card from "./Cards";

 export function Pic() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setNewsList(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="text-4xl font-[arial] py-5 text-center bg-[#1f1122] ]">
      <div className="py-5">
        <h1 className="text-[#e1d8ee]">Space News</h1>
      </div>
      <div className="flex flex-wrap gap-4 p-5 rounded">
        {newsList.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}


