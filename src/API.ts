export type IImage = {
  url?: string;
};

export const fetchUnsplash = async (): Promise<IImage | any> => {
  const endpoint = "https://picsum.photos/600/600";
  return await fetch(endpoint).then((res) => res.url);
};
