import React from "react";
import { Link, useLocation } from "react-router-dom";

const PAGES = [
	{ id: 1, name: "About", path: "/" },
	{ id: 2, name: "Services", path: "/services" },
	{ id: 3, name: "Resources", path: "/resources" },
]

export default function Nav() {
	const location = useLocation();
	return (
		<nav>
			<ul>
				{
					PAGES.map(
						page => (
							<li key={ page.id }>
								<Link
									className={ location?.pathname === page.path ? "active" : "" }
									to={ page.path }
								>
									{ page.name }
								</Link>
							</li>
						)
					)
				}
			</ul>
		</nav>
	);
};