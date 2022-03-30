import React from "react";
import { ABOUT } from "../constants";

export default function About() {
	const {
		BAR_ADMISSIONS,
		CERTIFICATIONS,
		REGISTRATION_TRAININGS,
		EDUCATION,
		LEGAL_ORGANIZATIONS,
		ACCOUNTING_ORGANIZATIONS,
		HONORS,
		COMMUNITY_INVOLVEMENT
	} = ABOUT;
	return (
		<div className="section-wrapper">
			<section>
				<h4>Bar Admissions</h4>
				<ul>
					{
						BAR_ADMISSIONS.map((item, idx) => (
							<li key={ idx }>
								{ item }
							</li>
						))
					}
				</ul>
				<h4>Certifications</h4>
				<ul>
					{
						CERTIFICATIONS.map((item, idx) => (
							<li key={ idx }>
								{ item }
							</li>
						))
					}
				</ul>
			</section>
			<section>
				<h4>Registration/Trainings</h4>
				<ul>
					{
						REGISTRATION_TRAININGS.map((item, idx) => (
							<li key={ idx }>
								{ item }
							</li>
						))
					}
				</ul>
			</section>
			<section>
				<h4>Education</h4>
				<ul>
					{
						EDUCATION.map((item, idx) => (
							<li key={ idx }>
								{ item }
							</li>
						))
					}
				</ul>
			</section>
			<section>
				<h4>Legal Organizations</h4>
				<ul>
					{
						LEGAL_ORGANIZATIONS.map((item, idx) => (
							<li key={ idx }>
								{ item }
							</li>
						))
					}
				</ul>
				<h4>Accounting Organizations</h4>
				<ul>
					{
						ACCOUNTING_ORGANIZATIONS.map((item, idx) => (
							<li key={ idx }>
								{ item }
							</li>
						))
					}
				</ul>
			</section>
			<section>
				<h4>Honors</h4>
				<ul>
					{
						HONORS.map((item, idx) => (
							<li key={ idx }>
								{ item }
							</li>
						))
					}
				</ul>
			</section>
			<section>
				<h4>Community Involvement</h4>
				<ul>
					{
						COMMUNITY_INVOLVEMENT.map((item, idx) => (
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
