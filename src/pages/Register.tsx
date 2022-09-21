import { useTheme } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSnapshot } from 'valtio';
import { LogoIcon } from '../assets';
import { registerState } from '../state/register';
import { Box, Input, Button, FlexCol, Text } from '../ui-kit';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[A-Z]).{4,10}$/;

export const Register = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPwd, setValidPwd] = useState(false);

  const { register, errMessage, successMessage } = useSnapshot(registerState);

  const theme = useTheme();

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
  }, [password]);

  const onRegisterBtn = () => {
    void register(email, password);
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

        {successMessage && (
          <Box
            width="100%"
            p="20px"
            bg={theme.colors.green}
            mt="20px"
            color={theme.colors.white}
          >
            {successMessage}!
            <br />
            <Link
              to="/login"
              style={{ textDecoration: 'none' }}
            >
              <Text
                color={theme.colors.orange}
                fontSize="20px"
              >
                Перейти к странице входа
              </Text>
            </Link>
          </Box>
        )}

        <Input
          placeholder="Введите email"
          mt={errMessage || successMessage ? '20px' : '71px'}
          width="100%"
          mb={email && !validEmail ? '0' : '20px'}
          height="45px"
          border={
            email && !validEmail
              ? `1px solid ${theme.colors.red}`
              : `1px solid ${theme.colors.white}`
          }
          color={theme.colors.white}
          backgroundColor={theme.colors.blue2}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          setValue={setEmail}
        />

        {email && !validEmail && (
          <Text
            width="95%"
            fontSize="17px"
            color={theme.colors.red}
            p="6px"
            mb="10px"
          >
            Не валидный email!
          </Text>
        )}

        <Input
          placeholder="Введите пароль"
          width="100%"
          height="45px"
          border={
            password && !validPwd
              ? `1px solid ${theme.colors.red}`
              : `1px solid ${theme.colors.white}`
          }
          color={theme.colors.white}
          backgroundColor={theme.colors.blue2}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          setValue={setPassword}
          type="password"
        />

        {password && !validPwd && (
          <Text
            width="95%"
            fontSize="17px"
            color={theme.colors.red}
            p="6px"
          >
            Должно быть от 4 до 10 символов.
            <br />
            Должен содержать заглавную букву.
          </Text>
        )}

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
            onClick={onRegisterBtn}
            disabled={!email || !password || !validEmail || !validPwd}
          >
            Регистрация
          </Button>
        </Box>

        <Text
          width="100%"
          mt="20px"
          color={theme.colors.white}
        >
          Уже зарегистрированы?
        </Text>

        <Box
          width="100%"
          mt="5px"
        >
          <Link
            to="/login"
            style={{ textDecoration: 'none' }}
          >
            <Text color={theme.colors.orange}>Войти</Text>
          </Link>
        </Box>
      </FlexCol>
    </Box>
  );
};
