import React from 'react'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Ourchefs from './components/Ourchefs'
import SignUp from './components/SignUp'
import SignIn from "./components/SignIn"
import Page4 from "./components/Page4"
import ShoppingCart from './components/ShoppingCart'

function page() {
  return (
    <>
 <MainContent /> 
     <Menu /> 
    <Ourchefs /> 
   <ShoppingCart />
   <SignUp /> 
    <SignIn />
    <Page4 />
    </>
  )
}

export default page