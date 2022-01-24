import React, { useState }  from "react";
import { Grid } from "../Grid/Grid";
import style from './Main.module.css';

export const Main = (props) => {
    const {speed=100, rows=10, cols=10, selectBox} = props;

    const generation = useState(0)

    const gridFull = Array(rows).fill().map(() => Array(cols).fill(false))

    console.log(generation)


    return (
        <div>
            <h1 className={style.title}>The Game of Life</h1>
            <Grid 
                gridFull={gridFull}
                rows={rows}
                cols={cols}
                selectBox={selectBox}/>
            <h2 className={style.doublleTitle}>Generations: {generation}</h2>
        </div>
    )    
}
