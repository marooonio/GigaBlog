import {useState} from 'react';
import {Box, Button, TextField, styled} from "@mui/material";

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
`
const Paragraph = styled(Box)`
    padding-top: 30px;
    font-size: 30px;
    color: #212425;
    font-weight: bold;
    font-family: "Roboto Light";
    text-align: center;
`

const SignupButton = styled(Button)`
    border-radius: 2px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0/ 30%);
    font-weight: bold;
`

const signupInicials = {
    name: '',
    username: '',
    password: '',
}

const Login = () => {

    const [account, setAccount] = useState('login');
    const [signup, setSignup] = useState(signupInicials);

    const toggleSignup = () => {
        account === 'signup' ? setAccount('login') : setAccount('signup')
    };
    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]: e.target.value});
    }

    return (
        <Component>
            <Box>
                <Paragraph>Mój projekt - BLOG</Paragraph>
                {
                    account === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" label="Wprowadź nazwę użytkownika"/>
                            <TextField variant="standard" label="Wprowadź hasło"/>

                            <Button variant="contained">Zaloguj się!</Button>
                            <SignupButton onClick={() => toggleSignup()}>Stwórz konto!</SignupButton>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label="Wprowadź Imię"/>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label="Wprowadź Nazwę użytkownika"/>

                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Wprowadź hasło"/>
                            <Button variant="contained">Zarejestruj się!</Button>
                            <SignupButton onClick={() => toggleSignup()}>Już mam konto konto!</SignupButton>
                        </Wrapper>
                }
            </Box>
        </Component>
    )
};

export default Login;