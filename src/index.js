import React from 'react';
import ReactDOM from 'react-dom';
import Enterscreen from './Enterscreen';

import './css/Style.sass';
import './css/Logstyle.sass';


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Enterscreen),
    document.getElementById('mount')
  );
});
