import React from 'react';
import ReactDOM from 'react-dom';
import Enterscreen from './Enterscreen';

import './css/Style.sass';


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Enterscreen),
    document.getElementById('mount')
  );
});
