import { Box, Button, IconButton, Typography } from '@mui/material';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { shades } from '../../theme';
import { addToCart } from '../../state';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const ItemDetail = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();

  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getItem = async () => {
      const getItem = await axios.get(
        `http://localhost:8000/product/${itemId}`
      );
      setItem(getItem.data);
      console.log(getItem);
    };
    getItem();
  }, [itemId]);

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        <Box flex="1 1 40%" mb="40px">
          <img
            src={`http://localhost:8000/images/${item?.picturePath}`}
            alt={item?.productName}
            width="100%"
            height="100%"
            style={{ objectFit: 'contain' }}
          />
        </Box>

        <Box flex="1 1 50%" mb="40px">
          <Box m="65px 0 25px 0">
            <Typography variant="h2">{item?.productName}</Typography>
            <Typography>${item?.price}</Typography>
            <Typography sx={{ mt: '20px' }}>{item?.description}</Typography>
          </Box>

          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.purple[400]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: '0 5px' }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>

            <Button
              sx={{
                backgroundColor: '#222222',
                color: 'white',
                borderRadius: 0,
                minWidth: '150px',
                padding: '10px 40px',
              }}
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            >
              Add To Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetail;
