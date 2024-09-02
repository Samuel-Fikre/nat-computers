import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Center from "@/components/Center";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("HP");
  const [products, setProducts] = useState([]);
  const [mobileNavActive, setMobileNavActive] = useState(false); // Track mobile navigation state

  console.log(mobileNavActive);

  const productsData = {
    HP: [
      { id: 1, name: "HP EliteBook 850", price: 46500, discount: 7, imageUrl: "https://utfs.io/f/47d0fe93-3dc9-49cd-af44-e9a3efb49ae5-rc2slf.jpg" },
      { id: 2, name: "Slim HP Pavilion 2023", price: 57500, discount: 4, imageUrl: "https://utfs.io/f/20d259be-2e20-46e6-abea-ce65b36c4895-px7brq.jpg" },
      { id: 3, name: "HP Envy 14-es0013dx", price: 79500, discount: 2, imageUrl: "https://utfs.io/f/3a5e95ea-748e-4613-ae33-f61807ab6167-7z1jnd.jpg" },
    ],
    "HP Envy": [
      { id: 3, name: "HP Envy 14-es0013dx", price: 79500, imageUrl: "https://utfs.io/f/3a5e95ea-748e-4613-ae33-f61807ab6167-7z1jnd.jpg" },
    ],
    // Add more categories and products here
  };

  useEffect(() => {
    setProducts(productsData[selectedCategory]);
  }, [selectedCategory,productsData]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setProducts(productsData[event.target.value]);
  };

  const toggleMobileNav = () => {
    setMobileNavActive((prev) => !prev);
  };

  return (
    <>
      <Header mobileNavActive={mobileNavActive} toggleMobileNav={toggleMobileNav} /> {/* Pass the state and function as props */}

      <Center>
        <CategorySelect value={selectedCategory} onChange={handleCategoryChange}>
          {Object.keys(productsData).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </CategorySelect>
        <ProductGrid mobileNavActive={mobileNavActive}>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage>
                <img src={product.imageUrl} alt={product.name} />
              </ProductImage>
              <h3>{product.name}</h3>
              <p>Price: {product.price.toLocaleString()} Br</p>

              
            </ProductCard>
          ))}
        </ProductGrid>
      </Center>
    </>
  );
}

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    display: ${({ mobileNavActive }) => (mobileNavActive ? "none" : "flex")}; // Use flex on mobile
    flex-direction: column;
    overflow-x: auto; // Allow horizontal scrolling
    padding: 10px; // Add some padding
    gap: 10px; // Adjust the gap for mobile view
  }
`;

const Container = styled.div`
  display: ${({ mobileNavActive }) => (mobileNavActive ? 'none' : 'flex')};
  padding: 20px;
  background-color: #f8f8f8;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const Sidebar = styled.div`
  width: 20%;
  padding-right: 20px;
  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

const CategoryTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CategorySelect = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Products = styled.div`
  width: 80%;
  display: ${({ mobileNavActive }) => (mobileNavActive ? 'none' : 'grid')};
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  border: 1px solid #ddd;
`;

const ProductImage = styled.div`
  width: 100%;
  height: 150px; /* Adjusted height */
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Ensures the image fits within the container */
  }
`;

const ProductName = styled.h3`
  font-size: 16px;
  margin: 10px 0;
`;

const Price = styled.div`
  font-size: 16px;
  color: red;
  margin-bottom: 10px;
`;

const DiscountedPrice = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const Discount = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: orange;
  color: #fff;
  padding: 2px 5px;
  font-size: 14px;
  border-radius: 3px;
`;
