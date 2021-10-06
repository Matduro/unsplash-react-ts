import axios, { AxiosResponse } from "axios";

export type IImage = {
  url?: string;
};

export type ICoinData = {
  id: string;
  name: string;
  rank: string;
  symbol: string;
  priceUsd: string;
  changePercent24Hr: string;
  explorer: string;
};

export const fetchUnsplash = async (): Promise<IImage | any> => {
  const endpoint = "https://picsum.photos/600/600";
  return await fetch(endpoint).then((res) => res.url);
};

// export const fetchCoinCap = async (): Promise<ICoinData[]> => {
//   const endpoint = "https://api.coincap.io/v2/assets";
//   // var config = {
//   //   method: 'get',
//   //   url: "https://api.coincap.io/v2/assets"
//   // };

//   const data = axios
//     .get(endpoint, transformResponse)
//     .then((response) => {
//       console.log("axios get: ", response);
//       return response;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   // const data = await (await fetch(endpoint, { mode: "no-cors" })).json().then(
//   //   (jsonData) =>
//   //     jsonData.data.map((coinData: ICoinData) => ({
//   //       id: coinData.id,
//   //       name: coinData.name,
//   //       rank: coinData.rank,
//   //       symbol: coinData.symbol,
//   //       priceUsd: coinData.priceUsd,
//   //       changePercent24Hr: coinData.changePercent24Hr,
//   //       explorer: coinData.explorer,
//   //     }))
//   // .then((res) => {
//   //   console.log("your response: ", res);

//   //   if (res.status !== 200) {
//   //     throw new Error(`There was an error with status code ${res.status}`);
//   //   }
//   //   return res.json();
//   // })
//   console.log("Your data: ", data);

//   return data;
// };

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestions = async (): Promise<QuestionsState[]> => {
  const endpoint = `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`;
  const data = await (await fetch(endpoint)).json();

  return data.results.map((question: Question) => ({
    ...question,
    answers: [...question.incorrect_answers, question.correct_answer],
  }));
};

export type ITechAnalysis = {
  success: boolean;
  symbol: string;
  exchange: string;
  name: string;
  date: null;
  price_btc: number;
  recommendation: string;
  sentiment: number;
};

export const fetchTechAnalysisData = (): ITechAnalysis => {
  const apikey = process.env.APIKEY;
  console.log("APIKEY", apikey);

  const endpoint = `https://technical-analysis-api.com/api/v1/analysis/BTC?apiKey=${apikey}`;
  const data = axios
    .get(endpoint)
    .then((res: AxiosResponse) => {
      // const data = {
      //   success: res.success,
      //   symbol: res.symbol,
      //   exchange: res.exchange,
      //   name: res.name,
      //   date: res.date,
      //   price_btc: res.price_btc,
      //   recommendation: res.recommendation,
      //   sentiment: res.sentiment,
      // };
      return res;
    })
    .catch((e) => console.log(e));
  return data;
};
