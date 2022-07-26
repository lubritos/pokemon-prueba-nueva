import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import Search from '../search';
import Fav from '../favorito/fav';

const pages = [
    {
        label:"home",
        path:"/"
    },
    {
        label:"pokemon",
        path:"/pokemon"
    },
    {
        label:"Abilities",
        path:"/Abilities"
    },
    {
        label:"items",
        path:"/items"
    }

];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = ({
    favoritos,
    search,
    busqueda
}) => {
const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);


const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
    setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
    setAnchorElUser(null);
};


return (
    <AppBar className="bg-red pd-t pd-b f-size-1" position="static">
    <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" width={150}/>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages.map((page) => (
                    <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                        <Link to={page.path} className="td-none"> 
                            <Typography textAlign="center" sx={{textDecoration:'none'}}>{page.label}</Typography>
                        </Link>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            <Typography className="bg-red pd-t pd-b f-size-1" 
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" width={150}/>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Link key={page.label} to={page.path}>
                        <Button 
                        className='text'
                            key={page.label}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page.label}
                        </Button>
                    
                    </Link>
                ))}
            </Box>
            <Fav favoritos= {favoritos}/>
            
            <Search search={search} busqueda={busqueda}/>
            
        </Toolbar>
    </Container>
    </AppBar>
);
};
export default Navbar;
