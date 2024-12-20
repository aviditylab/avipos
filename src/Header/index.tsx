import { useState } from 'react';
import logoFull from '../assets/AviPosFull.png'
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from '@mui/material/Drawer';
import Menu from './Menu';

export default function Header() {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setDrawer(open);
      };

  return (
    <div className='flex justify-between items-center fixed top-0 w-full z-50 bg-white'>
      <img src={logoFull} className=' h-10 m-2' alt="AviPos" />
      <div className='p-3 cursor-pointer' onClick={toggleDrawer(true)}>
        <GiHamburgerMenu className=' text-primary text-2xl' />
      </div>

      <Drawer
        anchor={"right"}
        open={drawer}
        onClose={toggleDrawer(false)}
      >
        {Menu(toggleDrawer)}
      </Drawer>
    </div>
  )
}