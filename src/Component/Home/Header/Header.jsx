import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const navStyle = {
    color:'black',
    backgroundColor:'white',
};

// nav menu custom style  
const menuStyle = {
    display:{xs:'none',sm:'flex'},
    columnGap:5,
};

function Header() {
    const menuItem = ['Home','Service','About Us', 'Contact Us'];
    const [ mobile, setMobile ] = useState(false);

    const ExpandMenu = () => {
        setMobile( prev => !prev);
    };

    return(
        <AppBar sx={navStyle}>
            <Toolbar sx={{mx:10}}>
                <Typography sx={{flexGrow:1}}>Logo</Typography>
                <IconButton 
                sx={{display:{xs:'block',sm:'none'},}}
                onClick={ExpandMenu}
                >
                   <MenuIcon />
                </IconButton>                
                <Box sx={menuStyle}>
                    {
                        menuItem.map(
                            (value) => (
                                <Typography key={value}>
                                    {value}
                                </Typography>
                            )
                        )
                    }
                </Box>                
            </Toolbar>
        </AppBar>
    );
};

export default Header;