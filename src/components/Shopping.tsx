import { useState } from "react";
import { useQuery } from "react-query";
import { getProducts } from "../API";
// Components
import { Grid } from "@mui/material";
// types
import { ICartItemType } from "../API";
// Styles
import { Wrapper } from "./Shopping.styles";

export const Shopping = () => {
  const [cartItems, setCartItems] = useState([] as ICartItemType[]);
  const { data, isLoading, error } = useQuery<ICartItemType[]>(
    "products",
    getProducts
  );

  const handleAddToCart = (clickedItem: ICartItemType) => {
    setCartItems((prev) => {
      // Product in cart?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) => {
          return item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });
      }
      // First addition
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  return (
    <div>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Wrapper>
              <div className="card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <h3 className="card-title">${item.price}</h3>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Wrapper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
