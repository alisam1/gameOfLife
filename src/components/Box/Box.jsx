import React  from "react";
import { ReactDOM } from "react";
import style from './Box.module.css';

export const Box = (props) => {

    const {selectBox, row, col, id, boxClass} = props
    
    const selectBoxFunc = () => selectBox(row, col)

    console.log(row, col)

    return (
        <div
          className={style.box}
          id={id}
          onClick={selectBoxFunc}
        />

    )  

}


