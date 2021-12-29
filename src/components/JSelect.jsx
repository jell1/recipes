import React, { useState } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

// reusable select component
function JSelect({ type, options, field, value, setValue }) {
	const [creatableValue, setCreatableValue] = useState(null);

	const customStyles = {
		option: (provided, state) => ({
			...provided,
			borderBottom: "1px black solid",
			color: state.isSelected ? "red" : "blue",
			padding: 20,
		}),
	};

	const handleChange = (field, value, type) => {
		if (type === "creatable") {
			setCreatableValue(value);
		} else {
		}
	};

	return (
		<>
			{type === "select" && (
				<Select
					className={className}
					classNamePrefix='select'
					defaultValue={options[0]}
					isDisabled={isDisabled}
					isLoading={isLoading}
					isClearable={isClearable}
					isRtl={isRtl}
					isSearchable={isSearchable}
					name={field}
					options={options}
				/>
			)}
			{type === "creatable" && (
				<CreatableSelect
					styles={customStyles}
					isClearable={isClearable}
					onChange={(value) =>
						handleChange(field, value, "creatable")
					}
					// onInputChange={(value) =>
					// 	handleInputChange("ingredient", value)
					// }
					options={options}
					value={value}
				/>
			)}
		</>
	);
}

export default JSelect;
