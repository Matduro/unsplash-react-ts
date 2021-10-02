export type IImage = {
  src: string;
};

export const fetchUnsplash = async (): Promise<IImage[]> => {
  const endpoint = "https://picsum.photos/200/300";
  const image = await fetch(endpoint).then((res) => {
    console.log("Image: ", res);

    if (res.status !== 200) {
      throw new Error(`There was an error with status code ${res.status}`);
    }
    return res.json();
  });

  console.log("Here is your data from unsplash", image);
  return image;
};
