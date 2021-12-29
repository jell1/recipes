import React, { useState } from "react";
import "../css/Recipe.scss";

import { Button } from "react-bootstrap";

import IngredientsTable from "./IngredientsTable";
import RecipeList from "./RecipeList";
import IngredientForm from "./IngredientForm";
import JCard from "./JCard";
import JModal from "./JModal";

// Page for a recipe  , includes ingredients and steps
function Recipe() {
	const [modalOpen, setModalOpen] = useState(false);
	const handleOpen = () => setModalOpen(true);
	const handleClose = () => setModalOpen(false);
	const [newIngredientObj, setNewIngredientObj] = useState(null);

	// when user saves ingredient add it to ingredients array
	// const createNewIngredient = (obj) => {
	// 	console.log(obj);
	// };

	const saveNewIngredient = () => {
		console.log("save", newIngredientObj);
	};

	return (
		<div className='recipe'>
			<div className='ingredients-card-container'>
				<JCard height='550px' width='500px' margin='2rem'>
					<div className='ingredients-card-header'>
						<div className='ingredients-card-title'>
							Ingredients
						</div>
						<div className='btn-right-absolute'>
							<Button
								variant='outline-primary'
								cursor='default'
								onClick={() => handleOpen(true)}>
								Add
							</Button>
						</div>
					</div>
					<div className='ingredients-table-container'>
						<IngredientsTable />
					</div>
				</JCard>
			</div>
			<RecipeList />
			<JModal
				modalOpen={modalOpen}
				setModalOpen={setModalOpen}
				location='centered'
				size='lg'
				title='Add Ingredient'
				onSave={saveNewIngredient}>
				<IngredientForm
					newIngredientObj={newIngredientObj}
					setNewIngredientObj={setNewIngredientObj}
				/>
			</JModal>
		</div>
	);
}

export default Recipe;
