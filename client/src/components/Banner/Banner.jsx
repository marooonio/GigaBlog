import {Typography, Box, styled} from "@mui/material";

const Background = styled(Box) `
    background: #7FDBFF;
    width: 100%;
`

const Banner = () => {
    return (
        <Background>
            <Typography>Blog</Typography>
            <Typography>HELLO GUYS</Typography>
        </Background>
    )

}

export default Banner;