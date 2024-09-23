import React from 'react'
import Nav from './comp/nav'
import Footer from './comp/footer'
import { BrowserRouter} from 'react-router-dom'
import Route from './comp/rout'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Route/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App