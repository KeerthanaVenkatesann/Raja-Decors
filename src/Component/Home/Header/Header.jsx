import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react"; 

// navList  style
const navList = {
    fontSize:'18px',
    fontWeight:600,
    fontFamily: "Nunito Sans",
    // color:'#535362',
    color:'black',
    cursor:'pointer',  
    '&:hover':{
        color:'blue'
    }
};

function Header() {
    const menuItem = ['Home','Service','About Us', 'Contact Us'];
    const [ open, setOpen ] = useState(false);

    // nav style
    const navStyle = {
        color:'black',
        backgroundColor:'white', 
        display: {xs:'grid',md:'flex'},
        gridTemplateColumns:'auto auto',
        mx:{xs:5,md:12},
        padding: open && '10px 0px',       
    };
    // navMenu container  style  
    const menuStyle = {
        display: { xs: open ? 'grid' : 'none', md:'flex' },
        columnGap: 8,
        fontWeight: 800, 
    };
    // icon box container style
    const iconBoxStyle = {
        display:{xs:'flex',md:'none'},
        justifyContent:'end'
    };

    const ExpandMenu = () => {
        setOpen( prev => !prev);
    }; 

    return(
        <AppBar sx={{ backgroundColor: 'white' }} >
            <Toolbar sx={ navStyle }>
                <Typography sx={{ flexGrow: 1 }} >
                    Logo
                </Typography>
                <Box sx={ iconBoxStyle } >
                    <IconButton 
                    onClick={ExpandMenu}
                    >
                    <MenuIcon />
                    </IconButton> 
                </Box>               
                <Box sx={ menuStyle }>
                    {
                        menuItem.map(
                            (value) => (
                                <Typography sx={ navList } key={ value }>
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