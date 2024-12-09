import React from 'react'
import MainContent from './components/MainContent'
import Menu from './components/Menu'
import Ourchefs from './components/Ourchefs'
import SignUp from './components/SignUp'
import SignIn from "./components/SignIn"
import Page4 from "./components/Page4"
import ShoppingCart from './components/ShoppingCart'
import Faq from './components/Faq'
import Checkout from './components/Checkout'


function page() {
  return (
    <>
 <MainContent /> 
     <Menu /> 
     <ShoppingCart />
    <Ourchefs /> 
   <SignUp /> 
    <SignIn />
    <Page4 />
   <Faq /> 
   <Checkout />
   
    </>
  )
}

export default page