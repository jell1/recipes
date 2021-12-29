import React, { useMemo } from "react";
import { useTable } from "react-table";
import { MOCK_DATA } from "./Ingredients/MOCK_DATA";
import { COLUMNS } from "./Ingredients/columns";

// table for displaying all ingredients in a recipe
function IngredientsTable() {
	const ingredientsArray = MOCK_DATA.map((obj) => obj.ingredients);

	const columns = useMemo(() => COLUMNS, []);

	const data = useMemo(() => ingredientsArray[0], []);

	const tableInstance = useTable({
		columns,
		data,
	});

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		tableInstance;

	const test = (a, b) => {};

	return (
		<div className='ingredients-table'>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row, i) => {
						prepareRow(row);
						return (
							<tr
								{...row.getRowProps()}
								onClick={(e) => test(e, row.original)}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>
											{cell.render("Cell")}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default IngredientsTable;
