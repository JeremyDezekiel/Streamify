// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {

  return (
    <>
      <main>
        <section>
          <nav className="navbar navbar-expand-lg">
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
                    <a className="nav-link" href="#">TV Shows</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Movie</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">New & Popular</a>
                  </li><li className="nav-item">
                    <a className="nav-link" href="#">My List</a>
                  </li><li className="nav-item">
                    <a className="nav-link" href="#">Browse by Languages</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
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

          <div className='position-relative'>
            <img className='w-100' src='https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABV0-RxSQcYC25cCe4B6hJQlo5_8u1J8ZQA-aPv_CwRWjh3YdF2sGHWYLr47NZRxgYRAqnVF6fpBM_hGJ9KRL29L35yt6axU86iNd.webp?r=f78' alt='' />
            <div className='container'>
              <div className='row'>
                <div className='col-lg-4 position-absolute top-50 start-0 translate-middle-y ms-5'>
                  <img alt='' className='' src='https://occ-0-58-64.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUCBN072AyO2JluEcf6t1SvtMBsO7yQ_rhU9fuMYDzr9xVtnUmOCNzuPwPZhfxz6pBrQdzFm-cg1V5Wb0o3VzZ8jWv6gQaVf_EK4dz3T_4awSHqRsoIG1ZQrTUFFO_Rdueq_BfCaLdiTp41kjGIi7pakraiptG8pw5K5o29mWJ6Wif0Gad8nJA.webp?r=15b' title='' />
                  <p className='fs-4'>
                    Ex-insiders from the world's biggest brands share the manipulative tricks they use to keep customers consuming — at a devastating cost to our lives.
                  </p>
                  <div class="">
                    <div className='row'>
                      <div className='col'>
                        <button type="button" class="btn btn-secondary btn-lg">Play</button>
                      </div>
                      <div className='col'>
                        <button type="button" class="btn btn-secondary btn-lg">More Info</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='position-absolute bottom-50 end-0 translate-middle-y me-5'>
                    <span>
                      13+
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section>
          <div>

          </div>
        </section>
      </main>
    </>
  )
}

export default App
