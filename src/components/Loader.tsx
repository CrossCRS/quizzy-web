import React from 'react';

import { PulseLoader } from 'react-spinners';

function Loader() {
  return (
    <div className='flex h-full justify-center content-center'><PulseLoader color='#10B981' /></div>
  );
}

export default Loader;