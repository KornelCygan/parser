import React from 'react';

class CategoryRow extends React.Component{

    render(){
        return <tr>
                    <th colspan="2">{this.props.category}</th>
               </tr>
    }
}

module.exports = CategoryRow;