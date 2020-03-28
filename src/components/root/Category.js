import React from 'react'

const Category = (props) => {

    return <div className={'category'}>
        <img src={props.image} alt="icon" className={"category__image"}/>
        <span>{props.name}</span>
    </div>
};

export default Category