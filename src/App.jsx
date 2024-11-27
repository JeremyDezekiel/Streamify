// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {

  return (
    <>
      {/* <main>
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
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className='position-relative'>
            <img className='w-100' src='https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABV0-RxSQcYC25cCe4B6hJQlo5_8u1J8ZQA-aPv_CwRWjh3YdF2sGHWYLr47NZRxgYRAqnVF6fpBM_hGJ9KRL29L35yt6axU86iNd.webp?r=f78' alt='' />
            <div className=''>
              <div className='row'>
                <div className='col-lg-4 position-absolute top-50 start-0 translate-middle-y ms-5'>
                  <img alt='' className='' src='https://occ-0-58-64.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUCBN072AyO2JluEcf6t1SvtMBsO7yQ_rhU9fuMYDzr9xVtnUmOCNzuPwPZhfxz6pBrQdzFm-cg1V5Wb0o3VzZ8jWv6gQaVf_EK4dz3T_4awSHqRsoIG1ZQrTUFFO_Rdueq_BfCaLdiTp41kjGIi7pakraiptG8pw5K5o29mWJ6Wif0Gad8nJA.webp?r=15b' title='' />
                  <p className='fs-4 text-white'>
                    Ex-insiders from the world's biggest brands share the manipulative tricks they use to keep customers consuming — at a devastating cost to our lives.
                  </p>
                  <div className="">
                    <div className='row'>
                      <div className='col'>
                        <button type="button" className="btn btn-secondary btn-lg">Play</button>
                      </div>
                      <div className='col'>
                        <button type="button" className="btn btn-secondary btn-lg">More Info</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='position-absolute bottom-50 end-0 translate-middle-y me-5'>
                    <button type="button" className="btn btn-secondary btn-lg">Restart</button>
                    <span className='fs-1 text-white'>
                      13+
                    </span>
                  </div>
                </div>
              </div>
              <div className=''>
                <div className='position-absolute translate-middle-y ms-5'>
                  <h2 className='text-white'>
                    <a>
                      <div>Your Next Watch</div>
                      <div>
                        <div>Explore All</div>
                        <div></div>
                      </div>
                    </a>
                  </h2>
                  <div className='d-flex flex-row'>
                    <div className='card' style={{width: '20rem',}}>
                      <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXMQiKl7WK7Ye0nsPacAmUPseRS3k_RCn71_cwn5oYSuue9qJ5MBPUWSwyXIqxMLe6MKxs_zNygXgTN2iDkMGd9W8mc586yVLnKUmW7b40OsSbbUlVRiLht1N60JvEzY68F9ZPlL3HITeVMmpzHTUcs46lIQygHJMG5d7WO-VNTeX-rUtun0p6MByJc9qgWw6H4Fd8RGLG_B_tTn7coEZKkVyLAiNT21fvZnSKOs5TxQ_IyPp9ZMLGMJuJYzoE8Zv_1PsUKa06td6Qe9fI0t-mYnKqnlKO5VGXkKBY4u_aezyBXbryk4fgAL_TrE0aIWcrn7NXRfBYdieyY8nKpftbc.webp?r=67a" classNameName="card-img-top" alt="..."/>
                    </div>
                    <div className='card' style={{width: '20rem',}}>
                      <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb3z_J3XGQztP0TN8korj7rJOSUzLg_TBoblj_5cVaN6MGTWpXfb2JVYzk3ssu1JpONDShhsk08mYz_iK9jFywWFucPHOlMB45DyN4uTb50ltZQHUE_RPhaSi5h0U0jP84_P.jpg?r=872" classNameName="card-img-top" alt="..."/>
                    </div>
                    <div className='card' style={{width: '20rem',}}>
                      <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVP12YvFY34JSp9OjsOxLrxVB-AG6_FyFb2gVCpijKfzJxTYeNUrTgh80AcELW2wxLZEyuhLAhDYTfDIbaTFj7Rf5XzT1l2LTRe0oEh45vhhTTEmZ9DWF1IwjhVIOaRMnqSEpojU2zbIPZzRpTh-rag9jNbG_WXjHxyvlpDfsO0YJecu3ly8ukoNilcsVgZLgEocBWJiwhiOmrNvBNtL4MJJLn9v6qdo3DyCEn_8bZRSL43OBVJ1zywM_s_WLUqwc3daF85WZcBE35O4_NGLgQTF3wh1Arj5Ofsly3noDcgmoIAXtKWnEo_CbrjNK027NbD7OwKJuxOYd8G6tg4ziTE.webp?r=f87" classNameName="card-img-top" alt="..."/>
                    </div>
                    <div className='card' style={{width: '20rem',}}>
                      <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeCyEX58PwPpegcbW3T_J5wR6Ogxf1dxCAWM62_rDigZu6ee3qyxoNgFMS9H8RLkCQ-JUdxk9Wx6Xabo06D6IguzBH692whymFnDXbPKtD6m8avkPFk0lHYea3YJ0GVyB4c-k1Gxp6REvPOBv0EZtjivACXuKa74VekEaJ7P0yAbtveWdw63hwMqActYy8oGossKQpzAPtdl5MWkeFsI_YifPmSQ3MC5q7EjU5emfLGDSNwQAus3cJGDD3Ix1ydhLJFXguugfFJfd2ED2QZ0mxSAwIEwEQDAeQoNxr3DpsQmWxiSQPXuKr5XxJnvnKvG3S7imX-GlFwOGzCAxVgIe5k.webp?r=83b" classNameName="card-img-top" alt="..."/>
                    </div>
                    <div className='card' style={{width: '20rem',}}>
                      <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeoa4BFwDJiCUNTZdCSQG4yab0MDEwYuZ4up56k5Pq-x_G2mIBa3L_iRKLlUzk9cPHZ-Zzj0j7TwYfnyFYp82AleLb4_TX52zss.webp?r=dbe" classNameName="card-img-top" alt="..."/>
                    </div>
                    <div className='card' style={{width: '20rem',}}>
                      <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ_wyuaKDX2rC8U6CONyA1ZeHvlF8tcl3bTw7rcp4dnY9ziAEwIy_Gb6-cUO7khOgUB9sQoOr5YZcDqZ7JL0UZD2ImpFysUikCo.webp?r=01d" classNameName="card-img-top" alt="..."/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main> */}

      <section>
        <div className='col-12'>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider"/></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div className='col-12'>
          <div className=''></div>
        </div>
      </section>
    </>
  )
}

export default App
