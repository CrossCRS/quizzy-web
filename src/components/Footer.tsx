import React from 'react';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  const classSocial = 'inline-block text-2xl py-2 px-4 text-white hover:text-emerald-200';

  return (
    <footer className="flex flex-col items-center w-full p-6 bg-emerald-500 text-white">
      <nav className="flex">
        <a href="http://github.com/CrossCRS/" target="_blank" rel="noreferrer" className={classSocial}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/norbert-budzy%C5%84ski-b75885218" target="_blank" rel="noreferrer" className={classSocial}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </nav>

      <span className="font-light text-sm py-2">&copy; Norbert Budzyński 2023</span>
    </footer>
  );
}

export default Footer;