import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

export default function Header({ handleSearch }) {
	const [searchValue, setSearchValue] = useState("");

	return (
		<Navbar
			fixed="top"
			className="px-5 bg-dark justify-content-between text-light"
		>
			<Navbar.Brand className="text-warning" href="#home">
				Movie App
			</Navbar.Brand>
			<Form.Control
				type="text"
				placeholder="Search"
				className="mr-sm-2"
				value={searchValue}
				onChange={(e) => {
					setSearchValue(e.target.value);
					handleSearch(e.target.value);
				}}
			/>
		</Navbar>
	);
}
