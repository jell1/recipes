import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { ActionMeta, OnChangeValue } from "react-select";
import { isValidFloat } from "../util/validators";
import { IngredientOptions } from "../util/RecipeData";
import {
	getMeasurementOptions,
	createMeasurementOption,
} from "../api/recipeApi";

// Form for adding ingredients to a recipe
function IngredientForm({ newIngredientObj, setNewIngredientObj }) {
	// form for adding Ingredient
	const [measurementValue, setMeasurementValue] = useState("");
	const [ingredientValue, setIngredientValue] = useState("");
	const [amountValue, setAmountValue] = useState("");
	const [label, setLabel] = useState("");
	const [value, setValue] = useState("");
	const [newIngredientValue, setNewIngredientValue] = useState("");
	const [MeasurementOptions, SetMeasurementOptions] = useState([]);

	const handleGetMeasurementOptions = async () => {
		const res = await getMeasurementOptions();

		console.log(res);
		console.log(MeasurementOptions);
		const MeasurementOptionsArray = res.data.map((o) => {
			return {
				label: o.Label,
				value: o.Value,
			};
		});
		SetMeasurementOptions(MeasurementOptionsArray);
	};

	const createMOpt = async () => {
		console.log(label, value);
		const res = await createMeasurementOption(label, value);

		console.log(res);
	};

	useEffect(() => {
		handleGetMeasurementOptions();
	}, []);

	const handleChange = (field, value) => {
		// handle set state for ingriendent / adds new ingredient to array if it is not already in list
		if (value) {
			if (field === "ingredient") {
				setIngredientValue(value);

				if (value?.__isNew__) {
					setNewIngredientValue({
						label: value.label,
						value: value.value,
					});
				}
			}
		}
	};

	const handleInputChange = (field, value) => {
		if (value) {
			setNewIngredientValue(value);
		}
	};

	const handleNumberChange = (e) => {
		// checks for a number can only contain 2 decimals otherwise returns false
		const val = e.target.value;

		if (isValidFloat(val)) {
			setAmountValue(val);
		}
	};

	useEffect(() => {
		// create new ingredient record
		setNewIngredientObj({
			amount: amountValue,
			measurement: measurementValue.value,
			ingredient: ingredientValue.value,
			newIngredient: newIngredientValue.value,
		});
	}, [measurementValue, amountValue, ingredientValue, newIngredientValue]);

	return (
		<Form className='ingredient-form'>
			<Form.Group className='mb-3' controlId='amount'>
				<Form.Label>Amount</Form.Label>
				<Form.Control
					size='sm'
					type='number'
					placeholder='Enter amount'
					name='amount'
					onChange={(e) => handleNumberChange(e)}
					value={amountValue}
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='measurement'>
				<Form.Label>Measurement</Form.Label>
				<Select
					isClearable
					isSearchable
					name='measurement'
					onChange={(value) => setMeasurementValue(value)}
					options={MeasurementOptions}
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='ingredient'>
				<Form.Label>Ingredient</Form.Label>
				<CreatableSelect
					styles={{ color: "black" }}
					isClearable
					onChange={(value) => handleChange("ingredient", value)}
					onInputChange={(value) =>
						handleInputChange("ingredient", value)
					}
					options={IngredientOptions}
				/>
			</Form.Group>
			<div>m opts</div>
			<Form.Label>label</Form.Label>
			<Form.Control
				type='text'
				name='label'
				value={label}
				onChange={(e) => {
					setLabel(e.target.value);
				}}
			/>

			<Form.Label>value</Form.Label>
			<Form.Control
				type='text'
				name='label'
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>

			<button onClick={createMOpt}>create m opt</button>
		</Form>
	);
}

export default IngredientForm;
