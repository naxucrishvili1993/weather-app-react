import React, { useState } from "react";

const Search = (props) => {
	const [value, setValue] = useState("");

	return (
		<form action="#" onSubmit={(event) => event.preventDefault()}>
			<input
				type="text"
				onChange={(e) => setValue(e.target.value)}
				placeholder="Search"
				value={value}
				autoFocus="true"
				maxLength="15"
			/>
			<button
				type="submit"
				onClick={(e) => {
					props.handleClick(e);
					setValue("");
				}}
				value={value}>
				Search
			</button>
		</form>
	);
};

export default Search;
