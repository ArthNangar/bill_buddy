import {AppBar , Toolbar } from "@mui/material";


const Header= () =>{

    
    return(
            <AppBar color="secondary" position="static" sx={{ backgroundColor: 'skyblue' }}>
            <Toolbar>
            <h1> Pending Bills Management System </h1>
            </Toolbar>
            </AppBar>
    )
}

export default Header;