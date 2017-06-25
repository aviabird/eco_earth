import React from 'react';
import LoaderImage from '../../../assets/images/loader.svg';
import './Loader.css';

const Loader = () => {
  return (
    <div className="text-center">
      <img className="loader" src={LoaderImage} />
    </div>
  );
};

export default Loader;