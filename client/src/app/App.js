import { Route, Switch, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Cart from './components/ui/cart'
import Footer from './components/ui/footer'
import NavBar from './components/ui/navBar'
import Products from './components/ui/products'
import ProductsProvider from './hooks/useProducts'
import Login from './layout/login'
import Main from './layout/main/main'
import AdminPanel from './layout/adminPanel'
import ProductPage from './components/ui/productPage/productPage'
import './App.css'
import Modal from './components/ui/modal/modal'
import { useState } from 'react'
function App() {
  const [modalState, setModalState] = useState(false)
  const toggleModalWindow = () => {
    setModalState((prevState) => !prevState)
  }
  return (
    <>
      <div className='d-flex flex-column justify-content-between'>
        <NavBar onModalOpen={toggleModalWindow} />
        <ProductsProvider>
          <Switch>
            <Route path='/admin' component={AdminPanel} />
            <Route
              path='/products/:sex?/:category?/:type?'
              component={Products}
            />
            <Route path='/product/:productId?/:edit?' component={ProductPage} />
            <Route path='/login/:type?' component={Login} />
            <Route path='/cart' component={Cart} />
            <Route path='/' exact component={Main} />
            <Redirect to='/' />
          </Switch>
        </ProductsProvider>
        {modalState && <Modal onModalOpen={toggleModalWindow} />}
        <Footer />
      </div>
      <ToastContainer />
    </>
  )
}

export default App
