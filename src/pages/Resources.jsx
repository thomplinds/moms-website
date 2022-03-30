import React from "react";

import { RESOURCES } from "../constants";

export default function Resources() {
	const {
		LEGAL,
		FINANCE,
		GOVERNMENT,
		NEWS,
	} = RESOURCES;
	return (
		<div className="section-wrapper">
			<section>
				<h4>Legal</h4>
				<ul>
					{
						LEGAL.map((item, idx) => (
							<li key={ idx }>
								<a href={ item.url } target="_blank" rel="noopener noreferrer">
									{ item.name }
								</a>
							</li>
						))
					}
				</ul>
			</section>
			<section>
				<h4>Finance</h4>
				<ul>
					{
						FINANCE.map((item, idx) => (
							<li key={ idx }>
								<a href={ item.url } target="_blank" rel="noopener noreferrer">
									{ item.name }
								</a>
							</li>
						))
					}
				</ul>
				<h4>Government</h4>
				<ul>
					{
						GOVERNMENT.map((item, idx) => (
							<li key={ idx }>
								<a href={ item.url } target="_blank" rel="noopener noreferrer">
									{ item.name }
								</a>
							</li>
						))
					}
				</ul>
				<h4>News</h4>
				<ul>
					{
						NEWS.map((item, idx) => (
							<li key={ idx }>
								<a href={ item.url } target="_blank" rel="noopener noreferrer">
									{ item.name }
								</a>
							</li>
						))
					}
				</ul>
			</section>
		</div>
	);
};
