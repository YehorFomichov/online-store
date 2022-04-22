import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='container-fluid'>
      <footer className='footer-bs'>
        <div className='row'>
          <div className='col-md-5 footer-brand animated fadeInLeft'>
            <h2>Logo</h2>
            <p>
              The only way to keep your health is to eat what you don't want,
              drink what you don't like, and do what you'd rather not.
            </p>
          </div>
          <div className='col-md-2 footer-social animated fadeInDown'>
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href='https://www.facebook.com/yehor.fomichov'>Facebook</a>
              </li>
              <li>
                <a href='/'>Instagram</a>
              </li>
            </ul>
          </div>
          <div className='col-md-2 footer-social animated fadeInDown'>
            <h4>Other</h4>
            <ul>
              <li>
                <a href='https://github.com/YehorFomichov/online-store'>
                  Github
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/yehor-fomichov-486304233/'>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className='col-md-3 footer-ns animated fadeInRight'>
            <h4>Newsletter</h4>
            <p>The road to success is always under construction.</p>
            <p />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
