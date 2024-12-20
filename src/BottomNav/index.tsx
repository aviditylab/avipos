import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import StoreIcon from '@mui/icons-material/Store';
import MenuContext from '../Menu/MenuContext';

export default function BottomNav() {
  const { menu, setMenu } = React.useContext(MenuContext);
  return (
    <div className='fixed bottom-0 w-full z-50'>
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
          showLabels
          value={menu}
          onChange={(event, newValue) => {
            setMenu(newValue);
          }}
        >
          <BottomNavigationAction value={"sales"} label="Sales" icon={<PointOfSaleIcon />} />
          <BottomNavigationAction value={"product"} label="Finance" icon={<AttachMoneyIcon />} />
          <BottomNavigationAction value={""} label="Stock" icon={<StoreIcon />} />
        </BottomNavigation>
      </Box>
    </div>
  );
}