import React, {Component} from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Main from './components/main';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container'
import Grid from "@material-ui/core/Grid";
import NavBar from "./components/navbar";

class App extends Component{
  render(){
    return(
        <div>
            <NavBar />
            <Main />
        </div>
    );
  }
}

export default App;
