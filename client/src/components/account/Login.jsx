import {useState, useContext, useEffect} from 'react';
import {Box, Button, TextField, styled, Typography} from "@mui/material";
import {API} from "../../service/api";
import {DataContext} from "../../context/DataProvider";
import { useNavigate } from 'react-router-dom';

const Component = styled(Box)`
    width: 500px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.8);
`;

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const Paragraph = styled(Box)`
    padding-top: 30px;
    font-size: 30px;
    color: #212425;
    font-weight: bold;
    font-family: "Roboto Light";
    text-align: center;
`;

const SignupButton = styled(Button)`
    border-radius: 2px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0/ 30%);
    font-weight: bold;
`;

const Error = styled(Typography)`
  color: #ef4e4e;
  font-size: 10px;
  line-height: 0;
  margin-top: 10px;
`

const signupInicial = {
    name: '',
    username: '',
    password: '',
}

const loginInitial = {
    username: '',
    password: '',
}

const Login = ({isUserAuthenticated}) => {

    const [login, setLogin] = useState(loginInitial);
    const [signup, setSignup] = useState(signupInicial);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const {setAccount} = useContext(DataContext);

    useEffect(() => {
        showError(false);
    }, [login]);

    const onValueChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value});
    }

    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]: e.target.value});
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);

            setAccount({name: response.data.name, username: response.data.username});

            isUserAuthenticated(true);
            setLogin(loginInitial);
            navigate('/');
        } else {
            showError('Something went wrong!');
        }
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInicial);
            toggleAccount('login');
        } else {
            showError('Something went wrong!');
        }
    }

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }


    return (
        <Component>
            <Box>
                <Paragraph>GiGaBlog by Marek</Paragraph>
                {
                    account === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name='username' label="Wprowadź nazwę użytkownika"/>
                            <TextField variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name='password' label="Wprowadź hasło"/>

                            {error && <Error>{error}</Error>}

                            <Button variant="contained" onClick={() => loginUser()}>Zaloguj się!</Button>
                            <SignupButton onClick={() => toggleSignup()}>Stwórz konto!</SignupButton>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label="Wprowadź Imię"/>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label="Wprowadź Nazwę użytkownika"/>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Wprowadź hasło"/>

                            <Button onClick={() => signupUser()}>Zarejestruj się!</Button>
                            <SignupButton variant="contained" onClick={() => toggleSignup()}>Już mam konto konto!</SignupButton>
                        </Wrapper>
                }
            </Box>
        </Component>
    )
};

export default Login;