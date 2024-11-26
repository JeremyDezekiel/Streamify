// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {

  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Movie.com</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className='profile-icon' src='https://occ-0-58-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABV7Sri1-D7qEbxbugWRmCLNbtHHf8ZnmqzUv-mNSrHyzV8wW79qYqLFYhCXARsp6d87_p46hVjDnj1qCMpmsaugwMo9nLr8.png?r=ddf' alt='profileIcon' />
                  </span>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default App
