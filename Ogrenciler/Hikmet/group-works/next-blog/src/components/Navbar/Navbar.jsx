"use client";
import useBlogStore from "@/store/blogStore";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useEffect } from "react";
import UserComponent from "./UserComponent";

function Navbar() {
	const filterBlogs = useBlogStore((state) => state.filterBlogs);
	const setInputValue = useBlogStore((state) => state.setInputValue);
	const theme = useBlogStore((state) => state.theme);
	const toggleTheme = useBlogStore((state) => state.toggleTheme);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.filterInput.value);
		filterBlogs(e.target.filterInput.value ?? "Zustand");
	};

	const supabase = createClient();

	const handleFetchData = async () => {
		let { data: blogs, error } = await supabase.from("blogs").select("*");

		if (error) {
			console.log("error", error);
		} else {
			console.log("blogs", blogs);
		}
	};

	return (
		<nav
			className="navbar navbar-sticky navbar-expand-lg"
			style={{
				backgroundColor: "var(--color-header-bg)",
				color: "var(--color-header-text)",
			}}>
			<div className="container">
				<Link className="navbar-brand bolder" href="/">
					NextBlog
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbar"
					aria-controls="navbar"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbar">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" href="/">
								Anasayfa
							</Link>
						</li>

						<UserComponent />
					</ul>
					<form onSubmit={handleSubmit} className="d-flex" role="search">
						<input
							onChange={(e) => setInputValue(e.target.value)}
							name="filterInput"
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-primary" type="submit">
							Ara
						</button>
					</form>
					<button className="btn btn-primary ms-2" onClick={toggleTheme}>
						{theme === "light" ? "🌞" : "🌙"}
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
