import { useState } from "react";
import {BrowserRouter, Routes, Route, Navigate, Outlet} from "react-router-dom";
import {Box} from "@mui/material"

import DataProvider from "./context/DataProvider.jsx";
import Login from "./components/account/Login.jsx";
import Home from "./components/home/Home.jsx";
import Header from "./components/header/Header.jsx";
import CreatePost from "./components/create/Create.jsx";
import DetailView from "./components/details/DetailView.jsx";
import Update from "./components/create/Update.jsx";
import About from "./components/about/About.jsx";

const PrivateRoute = ({isAuthenticated, ...props}) => {
    const token = sessionStorage.getItem('accessToken');
    return isAuthenticated && token ?
        <>
            <Header />
            <Outlet />
        </>
        : <Navigate replace to='/account' />
}

function App() {

    const [isAuthenticated, isUserAuthenticated] = useState(false);

    return (
        <DataProvider>
             <BrowserRouter>
                 <Header />
                 <Box style={{marginTop: 70}}>
                     <Routes>

                         <Route path='/account' element={<Login isUserAuthenticated={isUserAuthenticated} />} />

                         <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                             <Route path='/' element={<Home />} />
                         </Route>

                         <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                             <Route path='/create' element={<CreatePost />} />
                         </Route>

                         <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                             <Route path='/details/:id' element={<DetailView />} />
                         </Route>

                         <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                             <Route path='/update/:id' element={<Update />} />
                         </Route>

                         <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                             <Route path='/about' element={<About />} />
                         </Route>

                     </Routes>
                 </Box>
             </BrowserRouter>
        </DataProvider>
      );
}

export default App;