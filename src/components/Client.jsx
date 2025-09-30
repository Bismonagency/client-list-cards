import React, { useState } from 'react';
import ClientImage from './ClientImage';
import ClientDesc from './ClientDesc';

const Client = ({name, img, options, link}) => {
  const [show, setShow] =useState(true)
  return (
    <div className='cardWrapper' onClick={()=>setShow(!show)}>
      {show && (
      <ClientImage img={img} name={name} />
      )}

      {!show && (
        <ClientDesc  options={options} link={link}/>
        )}
      </div>
  
  
  );
};

export default Client;
