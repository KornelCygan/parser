class CondosData{

    static loadAll( filtersArr, callback ){

        let url = 'http://localhost:3000/condos';
        if(filtersArr.length) {
            let filters = filtersArr.reduce((prev, curr) => prev + '&' + curr);
            if (filters.length) {
                url += '?' + filters;
            }
        }

        fetch(url)
            .then( resp => resp.json())
            .then( data => callback(data) ) // //dopiero w momencie wywołania mówię co będzie się działo  z tymi danymi np. Condos.loadAll( [], (condos) => this.setState({condos} );
            .catch( e => console.log(e) );
    }

}

module.exports = CondosData;