import React, { useContext, useState, useEffect, useMemo } from "react";

const AppContext = React.createContext();

export function useAppContext() {
	return useContext(AppContext);
}

// Holds global state for the app
export function AppProvider({ children }) {
	const [user, setUser] = useState(null);

	return (
		<AppContext.Provider value={{ user, setUser }}>
			{children}
		</AppContext.Provider>
	);
}
