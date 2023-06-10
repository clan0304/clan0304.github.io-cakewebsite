import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Tab, Tabs, useMediaQuery } from '@mui/material';
import Item from '../../components/Item';
import { setItems } from '../../state';
import axios from 'axios';
import { shades } from '../../theme';

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('All');
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery('(min-width:600px)');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const getItems = async (res, req) => {
      try {
        const getItems = await axios.get('http://localhost:8000/product');
        dispatch(setItems(getItems.data));
      } catch (err) {
        res.status(500).json(err);
      }
    };
    getItems();
  }, [dispatch]);

  const popularItems = items.filter((item) => item.category === 'Popular');
  const allItems = items.filter((item) => item.category === 'All');

  return (
    <Box
      width="80%"
      margin="80px auto"
      fontSize="20px"
      textAlign="center"
      color={shades.sky[700]}
      fontWeight="bold"
    >
      Do you want the best cake in Melbounre for your sweeter Life?
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? 'block' : 'none' } }}
        sx={{
          m: '25px',
          '& .MuiTabs-flexContainer': {
            flexWrap: 'wrap',
          },
        }}
      >
        <Tab label="All" value="All" />
        <Tab label="Popular" value="Popular" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        alignItems="center"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === 'All' &&
          allItems.map((item) => <Item item={item} key={item._id} />)}
        {value === 'Popular' &&
          popularItems.map((item) => <Item item={item} key={item._id} />)}
      </Box>
    </Box>
  );
};

export default ShoppingList;
