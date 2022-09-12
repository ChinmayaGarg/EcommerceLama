import React from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { mobile } from '../responsive';
import { isIos } from '../DeviceHelper';

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: '50px',
  })}
`;
// background-color: black;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: '10px 0px',
    width: '100vw',
    // backgroundColor: 'green',
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({
    flex: 1,
    justifyContent: 'flexStart',
    // backgroundColor: 'yellow',
  })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: 'none',
  })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({
    marginLeft: '5px',
  })}
`;

const Input = styled.input`
  border: none;
  ${mobile({
    width: '50px',
  })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({
    flex: 1,
  })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: '12px',
    marginLeft: '10px',
    // backgroundColor: 'blue',
  })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    // backgroundColor: 'red',
    flex: 2,
    justifyContent: 'flex-start',
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: '12px',
    marginLeft: () => (!!isIos() ? '15px' : '6px'),

    // display: (props) => props.type === 'register' && 'none',
  })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchOutlinedIcon style={{ color: 'gray', fontSize: 16 }}></SearchOutlinedIcon>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BLUEDREAM.</Logo>
        </Center>
        <Right>
          <MenuItem type="register">REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
