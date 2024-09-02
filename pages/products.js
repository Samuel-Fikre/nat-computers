import React, { useState, useEffect } from "react";
import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/products";
import styled from "styled-components";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

const Title = styled.h1`
  font-size: 1.5em;
`;

const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const PageButton = styled.button`
  background-color: ${(props) => (props.active ? "#000" : "#ddd")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border: none;
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    background-color: #444;
    color: #fff;
  }
`;

export default function ProductsPage({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Limit to 12 products per page

  const totalPages = Math.ceil(products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <Center>
        <Title>All Products</Title>
        <ProductsGrid products={paginatedProducts} />
        <PaginationControls>
          {Array.from({ length: totalPages }, (_, index) => (
            <PageButton
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </PageButton>
          ))}
        </PaginationControls>
      </Center>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
