import React,{Component} from 'react';;
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './Navigation/Navigate';
import Register from './Components/Register';
import BchefRotation from './Animation/BchefRotation';
import Login from './Components/Login';
import EditProfile from './Components/EditProfile';
import Navbar from './Navbar/Navbar'
export default class App extends Component {

  render(){
    return (
    <Navigation/>
     )
  }
}

