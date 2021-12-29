import React, { useMemo, useState } from "react";
import "../src/css/App.scss";
import { Routes, Route, Link, Router, Switch } from "react-router-dom";
import Login from "./components/Login";
import NavTopBar from "./components/NavTopBar";

import { AppProvider } from "./components/AppContext";
import Recipes from "./components/Recipes";
import RecipeList from "./components/RecipeList";
import Recipe from "./components/Recipe";
import Main from "./components/DefaultLayout";
import DefaultLayout from "./components/DefaultLayout";

const App = () => {
	return (
		// <ThemeProvider theme={theme}>
		<AppProvider>
			<div className='app'>
				<DefaultLayout>
					<Routes>
						<Route exact path='/' element={<Login />} />
						<Route exact path='/recipes' element={<Recipes />} />
						<Route exact path='/recipe' element={<Recipe />} />
					</Routes>
				</DefaultLayout>
			</div>
		</AppProvider>
		// </ThemeProvider>
	);
};

export default App;
