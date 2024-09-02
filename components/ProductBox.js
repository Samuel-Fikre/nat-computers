import styled from "styled-components";
//import Button from "@/components/Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import CartIcon from "./Icons/Cart";

const ProductWrapper = styled.div`
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid #eee;
  transition: background-color 0.3s ease;

  img {
    max-width: 100%;
    max-height: 100px;
    object-fit: contain;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Title = styled(Link)`
  font-weight: 500;
  font-size: 1rem;
  color: #333;
  text-decoration: none;
  margin: 10px 0;
  display: block;
  text-align: center;

  &:hover {
    color: #0070f3;
  }
`;

const ProductInfoBox = styled.div`
  padding: 15px;
`;


const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  gap: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr auto; /* Adjust to fit content better */
  }
`;

const Price = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e60023;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;  /* Space between icon and text */
  padding: 8px 12px;  /* Adjust padding to make the button smaller */
  font-size: 0.9rem;  /* Slightly smaller font size */
  color: #e60023;
  background: #fff;  /* Background color can be lighter */
  border: 1px solid #e60023;  /* Thinner border */
  border-radius: 5px;  /* Slightly rounded corners */
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: #e60023;
    color: #fff;  /* Invert colors on hover for a nice effect */
  }
  
  svg {
    width: 16px;  /* Adjust icon size */
    height: 16px;
  }
`;



export default function ProductBox({ _id, title, description, price, images, category }) {
  const { addProduct } = useContext(CartContext);
  const url = `/product/${_id}`;
  
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <img src={images?.[0]} alt={title} />
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>Br {price.toLocaleString('en-US')}</Price>
          <Button block onClick={() => addProduct(_id)} primary outline>
            <CartIcon />
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
