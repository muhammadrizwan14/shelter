import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { navItems } from "./Data";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

const drawerWidth = 300;

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [activeMenuItem, setActiveMenuItem] = React.useState(null); // Add state for active menu item


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };



    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Box

                // variant="h5"
                sx={{ py: 2, background: 'white' }}
            >
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "white",
                    }}
                >
                    <Typography sx={{
                        fontSize: '2rem',
                        lineHeight: '2.2rem',
                        letterSpacing: ' 0.06em',
                        color: '#545454'
                    }}>Cozy House</Typography>
                    <Typography
                        sx={{
                            // display:{md:'block',xs:'none'},
                            color: 'black',
                            fontSize: '0.81rem',
                            lineHeight: '0.93rem',
                            fontFamily: 'Arial',
                            letterSpacing: ' 0.1em',
                            marginTop: '0.65rem'
                        }}>
                        Shelter for pets in London
                    </Typography>
                </Link>
            </Box>
            <Divider />
            <List sx={{ display: "flex", flexDirection: "column" }}>
                {navItems.map(({ id, title, url }) => (
                    <Link
                        style={{ color: "white", textDecoration: "none" }}
                        key={id}
                        to={url}
                    >
                        <Stack direction="column" alignItems="center">
                            <p style={{ fontSize: "13px", color: "black" }}>{title}</p>
                        </Stack>
                    </Link>
                ))}

            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                component="nav"
                sx={{ backgroundColor: "white", color: "black", padding: "10px 0px" }} 
            >
                <Box
                    sx={{
                        width: "90%",
                        maxWidth: "1300px",
                        mx: "auto",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <Link to="/"
                            style={{ textDecoration: "none", color: "white" }}

                        >
                            <Typography sx={{
                                fontSize: { md:'2rem',xs:'1rem'},
                                   lineHeight: '2.2rem',
                                letterSpacing: ' 0.06em',
                                color:'#545454'
                            }}>Cozy House</Typography>
                            <Typography
                                sx={{
                                    // display:{md:'block',xs:'none'},
                                    color: 'black',
                                    fontSize:'0.81rem',
                                    lineHeight: '0.93rem',
                                    fontFamily: 'Arial',
                                    letterSpacing: ' 0.1em',
                                    marginTop:'0.65rem'
                            }}>
                                Shelter for pets in London
                            </Typography>
                        </Link>
                    </Box>
                    <Box
                        sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
                    >
                        {navItems.map(({ id, title, url}) => (
                            <Link
                                key={id}
                                to={url}
                                style={{ color: "black", textDecoration: "none", mr: "20px" }}
                                onClick={() => setActiveMenuItem(id)}
                            >
                             
                                <Button
                                    variant="text"
                                    sx={{
                                        marginRight: "10px",
                                        borderRadius: "0px",
                                        fontSize:'0.74rem',
                                        color: "black",
                                        ":hover": {
                                            borderBottom: "2px solid #f1cdb3",
                                        },
                                        ...(activeMenuItem === id && {
                                            borderBottom: "2px solid #f1cdb3",
                                        }),
                                    }}
                                >
                                    {title}
                                    </Button>
                               
                            </Link>
                        ))}
                       
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            ml: "auto",
                            display: { md: "none" },
                            border: "1px solid #353538",
                            borderRadius: "9px",
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </AppBar>

            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" mt={{ md:2,xs:0}}>
                <Toolbar />
            </Box>
        </Box>
    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Header;
