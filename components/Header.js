import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";

import { Users } from "./users"; // Ensure this imports your actual product data
import BarsIcon from "./Icons/Bars";



const StyledHeader = styled.header`
  background-color: #0e1420;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: 100%;
`;

const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `display: block;`
      : `display: none;`}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #0e1420;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 20px;
  flex-wrap: nowrap;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 8px;
  font-size: 13px;
  border-radius: 20px;
  border: 1px solid #e60023;

  @media screen and (max-width: 767px) {
    max-width: 220px; /* Adjusted width for mobile */
    padding: 5px;
  }
`;

const SearchButton = styled.button`
  padding: 5px;
  background-color: #e60023;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    color: white;
  }

  @media screen and (max-width: 767px) {
    padding: 5px;
  }
`;

const ListWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-width: 300px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: ${(props) => (props.isVisible ? 'block' : 'none')}; /* Conditional rendering */
  
  @media screen and (max-width: 767px) {
    max-width: 220px; /* Adjusted width for mobile */
    top: 60px; /* Adjusted position for mobile */
  }
`;

const ListItem = styled.div`
  padding: 15px 20px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  /* Ensure no underline on links within the list item */
  a {
    text-decoration: none;
    color: inherit; /* Make sure link color is inherited */
  }

  &:hover {
    background-color: #f9f9f9;
    transform: translateY(-2px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [query, setQuery] = useState("");
  const [searchListVisible, setSearchListVisible] = useState(true);

  const handleSearchClick = () => {
    // Optionally handle search button click logic here
  };

  const handleNavToggle = () => {
    setMobileNavActive((prev) => !prev);
    setSearchListVisible(false); // Hide search list when menu toggled
  };

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>
            <img
              src="https://utfs.io/f/f9b3e9ba-caa5-452a-a53b-79dfba5b8378-prcxjg.png"
              alt="Nat Computers"
              style={{ height: "40px" }}
            />
          </Logo>

          <SearchWrapper>
            <SearchInput
              type="search"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchButton onClick={handleSearchClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </SearchButton>

            <ListWrapper isVisible={searchListVisible && query}>
              {Users.filter((products) =>
                products.title.toLowerCase().includes(query.toLowerCase())
              ).map((products) => (
                <ListItem key={products._id}>
                  <Link href={`/product/${products._id}`} passHref>
                    {products.title}
                  </Link>
                </ListItem>
              ))}
            </ListWrapper>
          </SearchWrapper>

          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/"}>Account</NavLink>
            <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>

          <NavButton onClick={handleNavToggle}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
