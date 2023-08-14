import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { memo } from 'react';
import NavbarToggleButton from './NavbarToggleButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Root = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
}));

function NavbarStyle1Content(props) {
  const navigations = [
    {
      title: "Home",
      url : "/",
    },
    {
      title: "About Us",
      url : "/about-us",
    },
    {
      title: "Features",
      url : "/features",
    },
    {
      title: "Pricing",
      url : "/pricing",
    },
    {
      title: "Affiliates",
      url : "/affiliates",
    },
    {
      title: "Forever Messages",
      url : "/forever-messages",
    },
    {
      title: "Sign in",
      url : "/sign-in",
    },
    {
      title: "Sign up",
      url : "/sign-up",
    },
  ]

  return (
    <Root className={clsx('flex flex-auto flex-col overflow-hidden h-full', props.className)}>
      <div className="flex flex-row justify-end items-center shrink-0 px-24 py-16">
        <NavbarToggleButton className="w-40 h-40 p-0" />
      </div>

      <List>
      {
        navigations.map(nav => {
          return (
            <ListItem>
              <ListItemButton component="a" href={nav.url}>
                <ListItemText primaryTypographyProps={{ color: '#FFF' }} primary={nav.title} />
              </ListItemButton>
            </ListItem>
          )
        })
      }
      </List>
    </Root>
  );
}

export default memo(NavbarStyle1Content);
