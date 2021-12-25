import React, { Suspense, lazy, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTimes, faHeart, faMedkit } from '@fortawesome/free-solid-svg-icons'
const FileUpload = lazy(() => import('./components/FileUpload'));
const renderLoader = () => (
  <div className="lds-ellipsis">
    <div></div><div></div>
    <div></div><div></div>
  </div>
);

const App = () => {
  const [support, setsupport] = useState(false);
  const supportClick = e => {
    setsupport(support => !support);
    e.stopPropagation();
    e.preventDefault();
  }

  return (
  <div className="App min-h-screen text-blue-200 d-flex align-items-center justify-content-center">
    <img id="poweredby" src={process.env.PUBLIC_URL + '/Poweredby_640px-Black_VertLogo.png'} alt="powered by giphy" />
    <a id='donate-head' aria-label="Donate" href="https://www.buymeacoffee.com/internetboy" target="_blank" rel="noopener noreferrer" className={support ? 'animated bounceOut': 'animated bounceIn'} > <FontAwesomeIcon icon={faHeart} /> Help this server stay alive.<FontAwesomeIcon className="socials-icn close-icn" icon={faTimes} onClick={supportClick} /></a>
    <Suspense fallback={renderLoader()}>
      <FileUpload id="file-upload" />
    </Suspense>
    <footer>
      <div className="footer-socials">
        <a aria-label="Home" href="/"className="site-txt" > MP3 Anime 2021 ©{' '} </a>
        <a aria-label="Twitter" data-tooltip="Report Bug" href="https://twitter.com/internetboysux" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="socials-icn" icon={faTwitter} /></a>
        <a aria-label="Instagram" data-tooltip="Instagram" href="https://instagram.com/internetboy" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="socials-icn" icon={faInstagram} /></a>
        <a aria-label="Support" data-tooltip="Support" href="https://www.buymeacoffee.com/internetboy" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="socials-icn" icon={faMedkit} /></a>
      </div>
    </footer>
  </div>
)};

export default App;
