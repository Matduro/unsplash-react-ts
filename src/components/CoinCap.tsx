import React, { useState, useEffect } from "react";
import { fetchQuizQuestions, fetchCoinCap } from "../API";
// Components
import { Button } from "@mui/material";
// Styles
//import { Wrapper } from "./Unsplash.styles";
// Types
import { QuestionsState, ICoinData } from "../API";

const CoinCap = () => {
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [coinData, setCoinData] = useState<ICoinData[]>([]);

  const startTrivia = async () => {
    const newQuestions = await fetchQuizQuestions();
    console.log("newQuestions: ", newQuestions);
    setQuestions(newQuestions);
  };

  const handleFetchCoinData = async () => {
    const newCoinData = await fetchCoinCap();
    console.log("newCoinData: ", newCoinData);
    setCoinData(newCoinData);
  };

  return (
    <>
      <h1>CoinCap</h1>
      <Button onClick={startTrivia}>Click Me</Button>
      <Button onClick={handleFetchCoinData}>CoinData</Button>
    </>
  );
};

export default CoinCap;
