import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub } from '@mui/icons-material';

const Banner = styled(Box)`
    width: 100%;
    height: 50vh;
    background-position: left 0 bottom 0;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;


const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Mareeek</Typography>
                <Text variant="h5">Mój pierwszy tak zaawansowany projekt wykonany na kursu MEGAK.<br />
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/marooonio" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;