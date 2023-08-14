import { memo } from 'react';
import Navbar from './Navbar';

function NavbarWrapper(props) {

  return (
    <>
      <Navbar />
    </>
  );
}

export default memo(NavbarWrapper);
