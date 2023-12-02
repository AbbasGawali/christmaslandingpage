import React from 'react'
import Header from './components/Header'
import "./App.css"
import Content1 from './components/Content1'
import Content2 from './components/Content2'
import Decoration from './components/Decoration'
import Accessories from './components/Accessories'
import SendGift from './components/SendGift'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Header />
      <Content1 />
      <Content2 />
      <Decoration />
      <Accessories />
      <SendGift />
      <Footer />
    </div>
  )
}

export default App