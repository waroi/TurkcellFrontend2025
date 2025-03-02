import React from "react";
import { useState } from "react";
import { getNewsletter } from "../model/RequestModel";
import { useEffect } from "react";

const NewsletterController = () => {
  const [newsletter, setNewsletter] = useState({});
  const [tag, setTag] = useState("general");

  const getNewsLetters = async (tag) => {
    const allNewsletter = await getNewsletter(tag);
    console.log("All Newsletters", allNewsletter);
    setNewsletter(allNewsletter);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => getNewsLetters(tag)}></button>
    </div>
  );
};

export default NewsletterController;
