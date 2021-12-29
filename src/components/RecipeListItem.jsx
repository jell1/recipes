import React, { useState } from "react";
import RecipeForm from "./RecipeForm";

// displays an item in the recipe steps list
function RecipeListItem({
	RecipeList,
	completeListItem,
	removeListItem,
	updateListItem,
}) {
	const [edit, setEdit] = useState({ id: null, value: "" });

	const submitUpdate = (value) => {
		updateListItem(edit.id, value);
		setEdit({
			id: null,
			value: "",
		});
	};

	if (edit.id) {
		return <RecipeForm edit={edit} onSubmit={submitUpdate} />;
	}

	return (
		<div className='recipe-list-item'>
			{RecipeList.map((listItem, index) => {
				return (
					<div
						mt={2}
						direction='row'
						key={index}
						style={{
							border: "1px solid #314562",
							borderRadius: "3px",
							flexGrow: "1",
						}}>
						<input
							key={listItem.id}
							disabled
							onClick={() => completeListItem(listItem.id)}
							id={`recipe-step-${listItem.id}`}
							// label='Step'
							type='text'
							readOnly={true}
							style={{ paddingLeft: "12px" }}
							name={`step-${listItem.id}`}
							value={listItem.text}
						/>

						<button
							sx={{ ml: "5px" }}
							// variant='outlined'
							color='primary'
							className='edgeEnd'
							onClick={() =>
								setEdit({
									id: listItem.id,
									value: listItem.text,
								})
							}>
							{/* <EditIcon /> */}
						</button>
						<button
							sx={{ ml: "5px" }}
							// variant='outlined'
							color='primary'
							className='edgeEnd'
							onClick={() => removeListItem(listItem.id)}>
							{/* <DeleteIcon /> */}
						</button>
						{/* <div
									onClick={() => removeListItem(listItem.id)}>
									Delete
								</div>
								<div
									onClick={() =>
										setEdit({
											id: listItem.id,
											value: listItem.text,
										})
									}>
									Edit
								</div> */}
					</div>
				);
			})}
		</div>
	);
}

export default RecipeListItem;
