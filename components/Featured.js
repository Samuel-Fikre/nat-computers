import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";
import CartIcon from "./Icons/Cart";


const Bg = styled.div`
  background-color: #0E1420;
  color:#fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size:1.5rem;
  @media screen and (min-width: 768px) {
    font-size:3rem;
  }
`;
const Desc = styled.p`
  color:#aaa;
  font-size: .9rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap:10px;
  margin-top:25px;
`;

export default function Featured({product}) {
  const {addProduct} = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>Nat Computers</Title>
              <Desc>Discover the latest in technology at our computer eCommerce store, where quality meets affordability. Explore a wide selection of laptops, desktops, and accessories from top brands, designed to meet the needs of professionals, gamers, and everyday users alike. Whether you're looking for high-performance gaming rigs, sleek and portable laptops, or reliable peripherals, our store offers competitive prices, expert customer service, and fast shipping to keep you connected and productive.</Desc>
              <ButtonsWrapper>
          
                <ButtonLink href={'/products'} white onClick={addFeaturedToCart}>
                  <CartIcon />
                  See All Products
                </ButtonLink>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img src="https://utfs.io/f/8b9051b0-9e47-4b11-9676-231c4f19ef5f-qfibfl.png" alt=""/>
          </Column>
        </ColumnsWrapper>
      </Center>

    </Bg>
  );
}