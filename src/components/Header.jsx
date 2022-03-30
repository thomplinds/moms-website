import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaHome } from "react-icons/fa";

import Nav from "./Nav";
import { HEADSHOT_URL, EMAIL_ADDRESS, PHONE_NUMBER, STREET_ADDRESS } from "../constants";

export default function Header() {
	return (
		<header>
			<div className="content-wrap">
				<div>
					<Link to="/"><img src={ HEADSHOT_URL } alt="Headshot" /></Link>
				</div>
				<div>
					<h1>Judith A Thompson</h1>
					<h3>Attorney-at-Law & Certified Public Accountant</h3>
					<h3>Serving Hendricks and Marion County</h3>
					<div className="contact-info">
						<div className="contact-info-item">
							<FaPhone />
							{ PHONE_NUMBER }
						</div>
						<div className="contact-info-item">
							<FaEnvelope />
							<a href={ `mailto:${EMAIL_ADDRESS}` }>{ EMAIL_ADDRESS }</a>
						</div>
						<div className="contact-info-item">
							<FaHome />
							{ STREET_ADDRESS }
						</div>
					</div>
				</div>
			</div>
			<Nav />
		</header>
	);
};