import React from 'react';
import CondosData from '../../model/CondosData.jsx';
import CondosTable from '../list/CondosTable.jsx';
import FilterBar from '../filters/FilterBar.jsx';

class Main extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            condos: null,
            filters: {
                location_like: false,
                category: false,
                price_gte: false,
                price_lte: false

            },
            reloadData: true //właściwość do zabezpieczenie przed przeładowywaniem danych w nieskończoność (patrz. metoda componentDidUpdate)
        }
    }

    handleFilterQuery = (event) => {
        this.state.filters.location_like = (event.target.value.length) ? event.target.value : false;

        this.setState( {
            filters: this.state.filters,
            reloadData: true
        });
    }

    handleFilterCategory = (event) => {

        // let changed = () => {
        //     let toChange = event.target.value.toLowerCase()
        //     let changingParam;
        //         changingParam = toChange.replace(/ę/ig,'e');
        //         changingParam = toChange.replace(/ż/ig,'z');
        //         changingParam = toChange.replace(/ó/ig,'o');
        //         changingParam = toChange.replace(/ł/ig,'l');
        //         changingParam = toChange.replace(/ć/ig,'c');
        //         changingParam = toChange.replace(/ś/ig,'s');
        //         changingParam = toChange.replace(/ź/ig,'z');
        //         changingParam = toChange.replace(/ń/ig,'n');
        //         changingParam = toChange.replace(/ą/ig,'a');
        //     return changingParam
        // }


        this.state.filters.category = event.target.value;

        this.setState( {
            filters: this.state.filters,
            reloadData: true
        });
        console.log(changed())
    }



    handleFilterPriceGte = (event) => {
        this.state.filters.price_gte = (event.target.value.length) ? parseInt(event.target.value) : false;

        this.setState( {
            filters: this.state.filters,
            reloadData: true
        });
    };

    handleFilterPriceLte = (event) => {
        this.state.filters.price_lte = (event.target.value.length) ? parseInt(event.target.value) : false;

        this.setState( {
            filters: this.state.filters,
            reloadData: true
        });
    };

    prepareFilters(){
        let filters = [];

        for (let key in this.state.filters){
            console.log(key);//nazwa właściwości z obiektu
            console.log(this.state.filters[key]); //pobranie wartości dla ww. właściwości (key)
            if (this.state.filters[key]){
                filters.push( key+'='+this.state.filters[key]); //q=Fi
            }
        }

        return filters;
    }



    componentDidMount(){

        CondosData.loadAll( this.prepareFilters() , (condos) => {
            // console.log(condos);
            this.setState({ condos });
        })
    }

    componentDidUpdate(){
        console.log('update')
        if(this.state.reloadData) { //zabezpieczenie przed wykonaniem w nieskończoność - wewnętrzna rekurencja
            CondosData.loadAll(this.prepareFilters(), (condos) => {
                this.setState({condos: condos, reloadData: false});
            })
        }
    }

    render(){
        if(this.state.condos === null) return null;

        return (
                   <section>
                       <FilterBar parentThis={this} updateSearchQuery={this.handleFilterQuery} updateCategory={this.handleFilterCategory}
                                  updatePriceGte = {this.handleFilterPriceGte} updatePriceLte = {this.handleFilterPriceLte}/>

                       <CondosTable condos={this.state.condos} />
                   </section>
                );
    }

}

module.exports = Main;