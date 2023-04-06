import React from 'react';

import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  const classSocial = 'inline-block text-2xl py-2 px-4 text-white hover:text-emerald-200';

  return (
    <footer className="flex flex-col items-center w-full p-6 bg-emerald-500 text-white">
      <nav className="flex">
        <a href="/" className={classSocial}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="/" className={classSocial}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="/" className={classSocial}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="/" className={classSocial}>
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </nav>

      <span className="font-light text-sm py-2">&copy; Norbert Budzyński 2023</span>
    </footer>
  );
}

export default Footer;