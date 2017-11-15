import React from 'react';

import CondoRow from './CondoRow.jsx';

class CondosTable extends React.Component{

    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Tytuł</th>
                        <th>Metraż</th>
                        <th>Cena</th>
                        <th>Cena za metr</th>
                        <th>Pokoje</th>
                        <th>link</th>
                        <th>Telefon</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        this.props.condos
                        .filter( condo =>condo.category == 'na sprzedaż')
                        .map( saleCondo => <CondoRow condo={saleCondo} key={saleCondo.id} />)
                    }

                    {
                        this.props.condos
                            .filter( condo =>condo.category == 'na wynajem')
                            .map( rentCondo => <CondoRow condo={rentCondo} key={rentCondo.id} />)
                    }
                </tbody>
            </table>

        );
    }
}

module.exports = CondosTable;