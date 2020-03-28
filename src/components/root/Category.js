import React from 'react'
import {useDispatch} from "react-redux";

const Category = (props) => {

    const dispatch = useDispatch()

    return <div className={'category'}
                style={{cursor: "pointer"}}
                onClick={() => {
                    dispatch({
                        type: "ADD_CATEGORY",
                        payload: props.guid,
                    })
                }}
        >
        <img src={props.image} alt="icon" className={"category__image"}/>
        <span>{props.name}</span>
    </div>
};

export default Category