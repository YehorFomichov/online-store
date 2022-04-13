import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='container-fluid'>
      <div className='row' style={{ textAlign: 'center' }}>
        <h2>More info:</h2>
      </div>
      <footer className='footer-bs'>
        <div className='row'>
          <div className='col-md-3 footer-brand animated fadeInLeft'>
            <h2>Logo</h2>
            <p>
              Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam
              porttitor vitae orci nec ultricies. Curabitur vehicula, libero
              eget faucibus faucibus, purus erat eleifend enim, porta
              pellentesque ex mi ut sem.
            </p>
            <p>© 2014 BS3 UI Kit, All rights reserved</p>
          </div>
          <div className='col-md-2 footer-nav animated fadeInUp'>
            <h4>Menu —</h4>
            <div className='col'>
              <ul className='pages'>
                <li>
                  <a href='/'>Men</a>
                </li>
                <li>
                  <a href='/'>Women</a>
                </li>
                <li>
                  <a href='/'>extra</a>
                </li>
                <li>
                  <a href='/'>Science</a>
                </li>
                <li>
                  <a href='/'>Advice</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-2 footer-nav animated fadeInUp'>
            <h4>Menu —</h4>
            <div className='col'>
              <ul className='list'>
                <li>
                  <a href='/'>About Us</a>
                </li>
                <li>
                  <a href='/'>Contacts</a>
                </li>
                <li>
                  <a href='/'>{'Terms & Condition'}</a>
                </li>
                <li>
                  <a href='/'>Privacy Policy</a>
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
              <li>
                <a href='/'>RSS</a>
              </li>
            </ul>
          </div>
          <div className='col-md-3 footer-ns animated fadeInRight'>
            <h4>Newsletter</h4>
            <p>
              {'A rover wearing a fuzzy suit doesn’t alarm the real penguins'}
            </p>
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
