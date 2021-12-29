import React, { useState } from "react";

import { isValidFloat } from "../util/validators";
import { MeasurementOptions, ingredientsOptions } from "../util/RecipeData";

// page displays all recipes
function Recipes() {
	const ingredientsOptions = [
		{
			display: "Lettuce",
			value: "Lettuce",
			title: "Lettuce",
		},
		{
			display: "Carrots",
			value: "Carrots",
			title: "Carrots",
		},
	];

	// table of recipes

	const [measurementValue, setMeasurementValue] = useState("");
	const [amountValue, setAmountValue] = useState("");

	console.log(MeasurementOptions);
	const handleOnChange = (e) => {};

	const handleNumberChange = (e) => {
		console.log(e.target.value);
		const val = e.target.value;
		// const numPattern = /^[0-9]*(\.[0-9]{0,2})?$/;

		// const numPattern = /^\d+$/;

		// const valid = numPattern.test(val);
		// console.log(valid);

		// isValidFloat(val);
		if (isValidFloat(val)) {
			setAmountValue(val);
		}
		// const niceVal = parseFloat(val).toFixed(2); //12.23
		// console.log(niceVal);
	};

	const test = (e) => {
		console.log(e);
	};
	return <div></div>;
}

export default Recipes;
