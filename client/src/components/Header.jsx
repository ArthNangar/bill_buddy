import {AppBar , Toolbar } from "@mui/material";


const Header= () =>{

    
    return(
            <AppBar color="secondary" position="static" sx={{ backgroundColor: 'skyblue' }}>
            <Toolbar>
            <img src="billbuddy.png" alt="Your logo" style={{ width: 60, height: 40 }} />
            </Toolbar>
            </AppBar>
    )
}

export default Header;