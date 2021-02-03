import React from 'react'; 

const Item = ({item}) => {
    console.log(item)
    return (
        <div className="item-wrapper">
            <h2>{item.name}</h2>
            <p>Description: {item.description}</p>
            <p>Price:${item.price}</p>
        </div>
    )
}

export default Item; 