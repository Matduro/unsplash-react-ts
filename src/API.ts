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

export type ICartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

export const getProducts = async (): Promise<ICartItemType[]> => {
  return await (await fetch("http://fakestoreapi.com/products")).json();
};

// export type Question = {
//   category: string;
//   correct_answer: string;
//   difficulty: string;
//   incorrect_answers: string[];
//   question: string;
//   type: string;
// };

// export type QuestionsState = Question & { answers: string[] };

// export const fetchQuizQuestions = async (): Promise<QuestionsState[]> => {
//   const endpoint = `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`;
//   const data = await (await fetch(endpoint)).json();

//   return data.results.map((question: Question) => ({
//     ...question,
//     answers: [...question.incorrect_answers, question.correct_answer],
//   }));
// };
