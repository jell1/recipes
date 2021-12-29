import React, { useEffect, useState } from "react";
import RecipeForm from "./RecipeForm";
import RecipeListItem from "./RecipeListItem";

// displays the steps to a recipe
function RecipeList() {
	const [listItems, setListItems] = useState([]);

	useEffect(() => {}, [listItems]);

	const addListItem = (listItem) => {
		console.log(listItem);
		if (!listItem || /^\s*$/.test(listItem.text)) {
			return;
		}

		const newListItems = [listItem, ...listItems];

		setListItems(newListItems);
	};

	const removeListItem = (id) => {
		let updatedListItems = listItems.filter((item) => {
			return item.id !== id;
		});

		setListItems(updatedListItems);
	};

	const updateListItem = (id, newValue) => {
		if (!newValue || /^\s*$/.test(newValue.text)) {
			return;
		}

		setListItems((prev) =>
			prev.map((item) => (item.id === id ? newValue : item))
		);
	};

	const completeListItem = (id) => {
		let updatedListItems = listItems.map((listItem) => {
			if (listItem.id === id) {
				listItem.isComplete = !listItem.isComplete;
			}

			return listItem;
		});

		setListItems(updatedListItems);
	};
	return (
		<div className='recipe-steps'>
			<div style={{ flexGrow: 0.7 }}>
				<h1>Recipe</h1>
				<RecipeForm onSubmit={addListItem} className='recipe-form' />
				<RecipeListItem
					RecipeList={listItems}
					completeListItem={completeListItem}
					removeListItem={removeListItem}
					updateListItem={updateListItem}
				/>
			</div>
		</div>
	);
}

export default RecipeList;
