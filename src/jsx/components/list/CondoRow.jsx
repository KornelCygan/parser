import React from 'react';

class CondoRow extends React.Component{

    render(){
        let zlM2 = this.props.condo.price / this.props.condo.surface;

        return <tr id = {this.props.id}>
                    <td>{this.props.condo.date}</td>
                    <td>{this.props.condo.title}</td>
                    <td>{this.props.condo.surface}</td>
                    <td>{this.props.condo.price}</td>
                    <td>{zlM2.toFixed(0)}</td>
                    <td>{this.props.condo.rooms}</td>
                    <td><a href={this.props.condo.link}>Przejdź</a></td>
                    <td>{this.props.condo.tel}</td>
                </tr>
    }
}

module.exports = CondoRow;