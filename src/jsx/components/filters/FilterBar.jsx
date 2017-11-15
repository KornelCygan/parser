import React from 'react';

class FilterBar extends React.Component{

    render(){
        return (
            <section>
                <input type="text" placeholder="Miasto" onChange={this.props.updateSearchQuery}/>
                <select onChange={this.props.updateCategory} >
                    <option value="">dowolne</option>
                    <option value="na sprzedaż">na sprzedaż</option>
                    <option value="na wynajem">do wynajęcia</option>
                </select>

                <label htmlFor="priceFrom" >Cena od</label>
                <input type="number" id='priceFrom'onChange={this.props.updatePriceGte}/>
                <label htmlFor="priceTo" >Cena do</label>
                <input type="number" id='priceTo' onChange={this.props.updatePriceLte}/>

            </section>


        )
    }
}

module.exports = FilterBar;