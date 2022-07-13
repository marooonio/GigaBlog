import Banner from "../Banner/Banner.jsx";
import Categories from "./Categories.jsx";
import {Grid} from "@mui/material";

const Home = () => {
    return (
        <>
            <Banner />
            <Grid container>
                <Grid item lg={2} sm={2} xs={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    Posty
                </Grid>
            </Grid>
        </>
    )
}

export default Home;