import {AppBar, Toolbar, styled} from "@mui/material";
import {Link} from "react-router-dom";

const Component = styled(AppBar) ` 
    color: black;
    background: white;
`

const Container = styled(Toolbar) `
    justify-content: center;
    & > a {
        padding: 20px;
        text-decoration: none;
    }
`

const Header = () => {

    return (
        <Component>
            <Container>
                <Link to='/'>Główna</Link>
                <Link to='/about'>O nas</Link>
                <Link to='/contact'>Kontakt</Link>
                <Link to='login'>Wyloguj</Link>
            </Container>
        </Component>
    )
}

export default Header;