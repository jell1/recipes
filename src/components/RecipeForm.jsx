import React, { useState, useEffect, useRef } from "react";

// Form for adding steps to a recipe
function RecipeForm({ onSubmit, edit }) {
	// value of the recipe list item
	const [value, setValue] = useState(edit ? edit.value : "");

	const inputRef = useRef(null);

	useEffect(() => {
		// focus on the input
		inputRef.current.focus();
	}, []);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = () => {
		onSubmit({
			id: Math.floor(Math.random() * 1000),
			text: value,
		});

		setValue("");
	};

	return (
		<div>
			{edit ? (
				<>
					<div
						direction='row'
						spacing={2}
						mt={2}
						style={{
							flexGrow: ".75",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<input
							id='recipe-step'
							label='Edit Step'
							type='text'
							name='step'
							onChange={handleChange}
							value={value}
							ref={inputRef}
						/>
						{/* <input
						type='text'
						placeholder='Update value'
						value={value}
						name='text'
						onChange={handleChange}
						ref={inputRef}
					/> */}

						<button
							sx={{ m: 2 }}
							variant='outlined'
							color='primary'
							onClick={handleSubmit}
							className='edgeEnd'>
							Update
						</button>
					</div>
				</>
			) : (
				<>
					<div direction='row' spacing={2} style={{}}>
						{/* <Box sx={{ width: 100 }}> */}
						<input
							id='recipe-step'
							label='Add Step'
							type='text'
							name='step'
							onChange={handleChange}
							value={value}
							ref={inputRef}
							required
						/>

						{/* <input
								type='text'
								placeholder='Enter step'
								value={value}
								name='text'
								onChange={handleChange}
								ref={inputRef}
							/> */}

						<button
							sx={{ m: 2 }}
							variant='outlined'
							color='primary'
							onClick={handleSubmit}
							className='edgeEnd'>
							Add
						</button>
						{/* </Box> */}
					</div>
				</>
			)}
		</div>
	);
}

export default RecipeForm;
