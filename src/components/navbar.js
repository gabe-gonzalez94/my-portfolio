import { makeStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/SvgIcon/SvgIcon";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import React from "react";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className="header-color" position="static">
                <Toolbar>
                    <MenuItem>
                        <Typography variant="h6" className={classes.title}>
                            <Link style={{textDecoration: 'none', color:'blanchedalmond'}} to="/">Home</Link>
                        </Typography>
                    </MenuItem>
                    {/*<MenuItem>*/}
                    {/*    <Typography variant="h6" className={classes.title}>*/}
                    {/*        <Link style={{textDecoration: 'none', color:'blanchedalmond'}} to="/about">About</Link>*/}
                    {/*    </Typography>*/}
                    {/*</MenuItem>*/}
                    <MenuItem>
                        <Typography variant="h6" className={classes.title}>
                            <Link style={{textDecoration: 'none', color:'blanchedalmond'}} to="/resume">Resume</Link>
                        </Typography>
                    </MenuItem>
                    {/*<MenuItem>*/}
                    {/*    <Typography variant="h6" className={classes.title}>*/}
                    {/*        <Link style={{textDecoration: 'none', color:'blanchedalmond'}} to="/contact">Contact</Link>*/}
                    {/*    </Typography>*/}
                    {/*</MenuItem>*/}
                </Toolbar>
            </AppBar>
        </div>
    )

}

            export default NavBar;