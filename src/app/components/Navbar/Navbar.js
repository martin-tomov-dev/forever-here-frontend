import Hidden from '@mui/material/Hidden';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { navbarCloseMobile, selectForeverNavbar } from '../../store/forever/navbarSlice';
import NavbarContent from './NavbarContent';

const navbarWidth = 280;

const StyledNavBarMobile = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    minWidth: navbarWidth,
    width: navbarWidth,
    maxWidth: navbarWidth,
  },
}));

function NavbarStyle1(props) {
  const dispatch = useDispatch();
  const navbar = useSelector(selectForeverNavbar);

  return (
    <>
      <Hidden mdUp>
        <StyledNavBarMobile
          classes={{
            paper: 'flex-col flex-auto h-full',
          }}
          anchor="right"
          variant="temporary"
          open={navbar.mobileOpen}
          onClose={() => dispatch(navbarCloseMobile())}
          onOpen={() => {}}
          disableSwipeToOpen
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <NavbarContent />
        </StyledNavBarMobile>
      </Hidden>
    </>
  );
}

export default NavbarStyle1;
