import React from "react";
import { FaGavel, FaCalculator } from "react-icons/fa";
import { SERVICES } from "../constants";

export default function Services() {
	const { ATTORNEY, ACCOUNTANT } = SERVICES;
	return (
		<div className="section-wrapper">
			<section>
				<h4>
					<FaGavel />
					Attorney-at-Law
				</h4>
				<ul>
					{
						ATTORNEY.map((item, idx) => (
							<li key={ idx }>
								{ item }
							</li>
						))
					}
				</ul>
			</section>
			<section>
				<h4>
					<FaCalculator />
					Certified Public Accountant
				</h4>
				<ul>
					{
						ACCOUNTANT.map((item, idx) => (
							<li key={ idx }>
								{ item }
							</li>
						))
					}
				</ul>
			</section>
		</div>
	);
};
