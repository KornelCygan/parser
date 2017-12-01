import React from 'react';

class SearchCity extends React.Component {


    handleSearchingValue = (e) => {
        console.log( e.target.value );
    }


    render(){
        return (

            <form onSubmit = {this.handleSearchingValue}>
                <h2>Wpisz miasto w którym szukasz mieszkania</h2>
                <input type = 'text' />
                <button type = 'submit'>Szukaj</button>
            </form>

        );
    }
}

module.exports = SearchCity;