import { useTheme } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import { Box } from '../ui-kit';

export const MainLayout = () => {
  const theme = useTheme();

  return (
    <Box
      bg={theme.colors.white}
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Outlet />
    </Box>
  );
};
