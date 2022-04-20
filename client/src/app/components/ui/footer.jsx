import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='container-fluid'>
      <footer className='footer-bs'>
        <div className='row'>
          <div className='col-md-3 footer-brand animated fadeInLeft'>
            <h2>Logo</h2>
            <p>
              The only way to keep your health is to eat what you don't want,
              drink what you don't like, and do what you'd rather not.
            </p>
          </div>
          <div className='col-md-2 footer-nav animated fadeInUp'>
            <h4>Menu —</h4>
            <div className='col'>
              <ul className='pages'>
                <li>
                  <a href='/login'>Login</a>
                </li>
                <li>
                  <a href='/products/men'>Men</a>
                </li>
                <li>
                  <a href='/products/men'>Women</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-2 footer-nav animated fadeInUp'>
            <h4>User —</h4>
            <div className='col'>
              <ul className='list'>
                <li>
                  <a href='/about'>About Us</a>
                </li>
                <li>
                  <a href='/'>Contacts</a>
                </li>
                <li>
                  <a href='/'>{'Terms & Condition'}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-2 footer-social animated fadeInDown'>
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href='/'>Facebook</a>
              </li>
              <li>
                <a href='/'>Twitter</a>
              </li>
              <li>
                <a href='/'>Instagram</a>
              </li>
            </ul>
          </div>
          <div className='col-md-3 footer-ns animated fadeInRight'>
            <h4>Newsletter</h4>
            <p>The road to success is always under construction.</p>
            <p />
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Search for...'
              />
              <span className='input-group-btn'>
                <button className='btn btn-default' type='button'>
                  <span className='glyphicon glyphicon-envelope'></span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
