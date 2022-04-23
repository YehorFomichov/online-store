import { Route, Switch, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/ui/footer/footer'
import NavBar from './components/ui/navBar/navBar'
import Login from './layout/login/login'
import Main from './layout/main/main'
import AdminPanel from './layout/adminPanel'
import ProductPage from './components/pages/productPage/productPage'
import './App.css'
import { useState } from 'react'
import FilterProvider from './hooks/useFilter'
import Cart from './components/pages/cart/cart'
import ProductsPage from './components/pages/productsPage/productsPage'
import PaginateProvider from './hooks/usePaginate'
function App() {
  const [modalState, setModalState] = useState(false)
  const toggleModalWindow = () => {
    setModalState((prevState) => !prevState)
  }
  return (
    <>
      <div className='container-fluid d-flex flex-column justify-content-between'>
        <FilterProvider>
          <NavBar onModalOpen={toggleModalWindow} />
          <Switch>
            <PaginateProvider>
              <Route path='/admin' component={AdminPanel} />
            </PaginateProvider>
            <Route
              path='/products/:sex?/:category?/:type?'
              component={ProductsPage}
            />
            <Route path='/product/:productId?/:edit?' component={ProductPage} />
            <Route path='/login/:type?' component={Login} />
            <Route path='/' exact component={Main} />
            <Redirect to='/' />
          </Switch>
        </FilterProvider>

        <Footer />
      </div>
      {modalState && <Cart onModalOpen={toggleModalWindow} />}
      <ToastContainer
        toastStyle={{ backgroundColor: '#353746', color: 'white' }}
      />
    </>
  )
}

export default App
