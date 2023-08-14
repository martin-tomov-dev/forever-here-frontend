import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { navbarToggleMobile } from '../../store/forever/navbarSlice';
import SvgIcon from '../SvgIcon';
import useMediaQuery from '@mui/material/useMediaQuery';

function NavbarToggleButton(props) {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <IconButton
      className={props.className}
      color="inherit"
      size="small"
      onClick={(ev) => {
        if (isMobile) {
          dispatch(navbarToggleMobile());
        }
      }}
    >
      {props.children}
    </IconButton>
  );
}

NavbarToggleButton.defaultProps = {
  children: (
    <SvgIcon size={32} color="white">
      heroicons-outline:view-list
    </SvgIcon>
  ),
};

export default NavbarToggleButton;
