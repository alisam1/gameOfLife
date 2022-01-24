import React  from "react";
import { Box } from "../Box/Box";
import style from './Grid.module.css';

export const Grid = (props) => {
    const {cols, rows, gridFull, selectBox} = props 
    const width = cols * 50

    var rowsArr = [];

		var boxClass = "";
		for (var i = 0; i < rows; i++) {
			for (var j = 0; j < cols; j++) {
				let boxId = i + "_" + j;

				boxClass = gridFull[i][j] ? 'on' : 'off';
				rowsArr.push(
					<Box
						boxClass={boxClass}
						key={boxId}
						boxId={boxId}
						row={i}
						col={j}
						selectBox={selectBox}
					/>
				);
			}
		}

		return (
			<div className={style.grid} style={{width: width}}>
				{rowsArr}
			</div>
		);
	}
