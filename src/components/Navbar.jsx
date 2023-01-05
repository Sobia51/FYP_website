import React from 'react';
import { Link } from 'react-router-dom';
// import Link from '@mui/material/Link'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
const pages =
        [
            {
                name: 'Home',
                path: '/'
            },
            {
                name: 'Solution',
                path: '/Solution'
            },
            {
                name: 'About us',
                path: '/About-us'
            },
            {
                name: 'Contact us',
                path: '/Contact-us'
            }
        ];

    const settings = ['Profile', 'Account', 'Logout'];
const ResponsiveAppBar=()=> {
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
        <AppBar position="static">
            <Container maxWidth="xl" style={{
                backgroundColor: 'rgb(20, 20, 61)',
            }}>
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            //   fontFamily: 'monospace',
                            fontWeight: 700,
                            fontSize: '2rem',
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        WEBACCESSIFY
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
                            {pages.map((page,index) => (
                                <MenuItem key={index} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" color={'green'}>{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        WEBACCESSIFY
                    </Typography>
                    <Box sx={{ flexGrow: 1,flexDirection: 'row', ml: 15, display: { s: 'flex', l: 'flex', xs: 'none', md: 'flex' }}}>
                        <div>
                        {pages.map((page, index) => 
                        {
                            return(
                                <Link
                                 key={index}
                                    to={page.path}
                                onClick={handleCloseNavMenu}
                                style={{
                                    color: 'white',
                                    margin: '2rem',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '1.9rem' 
                                }}>
                                    {page.name}
                                </Link>
                            );
                            })}
                            </div>  
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting, index) => (
                                <MenuItem key={index} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" fontSize='1.3rem' color='rgb(20, 20, 61)'>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;







// import {Link} from 'react-router-dom';
// export default function App() {
//     const pages =
//         [
//             {
//                 name: 'Home',
//                 path: '/'
//             },
//             {
//                 name: 'Solution',
//                 path: '/Solution'
//             },
//             {
//                 name: 'About us',
//                 path: '/About-us'
//             },
//             {
//                 name: 'Contact us',
//                 path: '/Contact-us'
//             },
//         ];

//     const obj = {
//         id: 4,
//         name: 'Dean',
//         country: 'Denmark',
//     };

//     return (
//         <div>
//             {pages.map((page, index) => {
//                 return (
//                     <div key={index}>
//                         {/* <h2>name: {page.name}</h2>
//                         <h2>country: {page.country}</h2> */}
//                         <Link to={page.path}>
//                             {page.name}
//                         </Link>
//                         <hr />
//                     </div>
//                 );
//             })}

//             <hr />
//             <hr />
//             <hr />

//             <div>
//                 <h2>name: {obj.name}</h2>
//                 <h2>county: {obj.country}</h2>
//             </div>

//             <hr />
//         </div>
//     );
// }
