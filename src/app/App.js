import { Route, Switch, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Basket from './components/ui/basket'
import Footer from './components/ui/footer'
import NavBar from './components/ui/navBar'
import Products from './components/ui/products'
import ProductsProvider from './hooks/useProducts'
import Login from './layout/login'
import Main from './layout/main/main'
function App() {
  return (
    <>
      <div className='d-flex flex-column justify-content-between'>
        <NavBar />
        <ProductsProvider>
          <Switch>
            <Route path='/products/:productId?/:edit?' component={Products} />
            <Route path='/login/:type?' component={Login} />
            <Route path='/basket' component={Basket} />
            <Route path='/' exact component={Main} />
            <Redirect to='/' />
          </Switch>
        </ProductsProvider>
        <Footer />
      </div>
      <ToastContainer />
    </>
  )
}

export default App
