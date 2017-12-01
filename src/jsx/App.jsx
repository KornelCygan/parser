import React from 'react';
import ReactDOM from 'react-dom';
// import Main from './components/template/Main.jsx';
import  Search from './components/search/Search.jsx'

document.addEventListener('DOMContentLoaded', function(){



    ReactDOM.render(
        <Search/>,
        document.getElementById('app')
    );

});
