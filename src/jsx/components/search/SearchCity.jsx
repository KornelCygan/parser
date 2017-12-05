import React from 'react';

class SearchCity extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            city: ''
        }
    }



    handleSearchingValue = (e) => {
        this.setState({
            city: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state.city);

        this.setState({
            city: ''
        })
    }


    render(){

        return (

            <form onSubmit = {this.handleSubmit}>
                <h2>Wpisz miasto w którym szukasz mieszkania</h2>
                <input type = 'text' onChange={this.handleSearchingValue} value={this.state.city}/>
                <button type = 'submit'>Szukaj</button>
            </form>

        );
    }
}

module.exports = SearchCity;