import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSnapshot } from 'valtio';
import { LogoIcon } from '../assets';
import { authState } from '../state';
import { LocationType } from '../types';
import { Box, Input, Button, FlexCol, Text } from '../ui-kit';

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { login, errMessage } = useSnapshot(authState);

  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation() as LocationType;

  const from = location.state?.from?.pathname || '/';

  const onLoginBtn = () => {
    void login(email, password).then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <Box
      bg={theme.colors.blue2}
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <FlexCol
        width="23%"
        minWidth="200px"
      >
        <LogoIcon />

        {errMessage && (
          <Box
            width="100%"
            p="20px"
            bg={theme.colors.red2}
            mt="20px"
            color={theme.colors.white}
          >
            {errMessage}!
          </Box>
        )}

        <Input
          placeholder="Введите email"
          mt={errMessage ? '20px' : '71px'}
          width="100%"
          mb="20px"
          height="45px"
          border={`1px solid ${theme.colors.white}`}
          color={theme.colors.white}
          backgroundColor={theme.colors.blue2}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          setValue={setEmail}
        />

        <Input
          placeholder="Введите пароль"
          width="100%"
          height="45px"
          border={`1px solid ${theme.colors.white}`}
          color={theme.colors.white}
          backgroundColor={theme.colors.blue2}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          setValue={setPassword}
          type="password"
        />

        <Box
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.3)"
          height="45px"
          mt="43px"
          width="100%"
        >
          <Button
            background={theme.colors.white}
            color={theme.colors.blue2}
            width="100%"
            height="45px"
            onClick={onLoginBtn}
          >
            Войти
          </Button>
        </Box>

        <Text
          width="100%"
          mt="20px"
          color={theme.colors.white}
        >
          Хотите зарегистрироваться?
        </Text>

        <Box
          width="100%"
          mt="5px"
        >
          <Link
            to="/register"
            style={{ textDecoration: 'none' }}
          >
            <Text color={theme.colors.orange}>Регистрация</Text>
          </Link>
        </Box>
      </FlexCol>
    </Box>
  );
};
