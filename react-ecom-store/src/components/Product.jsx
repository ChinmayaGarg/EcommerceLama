import React from 'react';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${InfoContainer} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
// const Container = styled.div``;
// const Container = styled.div``;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <InfoContainer>
        <Icon>
          {/* <SearchOutlinedIcon style={{ color: 'gray', fontSize: 16 }}></SearchOutlinedIcon> */}

          <ShoppingCartOutlinedIcon style={{ color: 'black', fontSize: 16 }} />
        </Icon>
        <Icon>
          <SearchOutlinedIcon style={{ color: 'black', fontSize: 16 }} />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon style={{ color: 'black', fontSize: 16 }} />
        </Icon>
      </InfoContainer>
    </Container>
  );
};

export default Product;
