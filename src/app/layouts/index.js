import { memo } from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';

const globalStyles = (
  <GlobalStyles
    styles={(theme) => ({
      html: {
        backgroundColor: `${theme.palette.background.default}!important`,
        color: `${theme.palette.text.primary}!important`,
      },
    })}
  />
);

function Layout(props) {
  return (
    <>
      {globalStyles}
      <main id="forever-main" className="w-full flex flex-col min-h-full">
        {props.children}
      </main>
    </>
  )
}

export default memo(Layout);
