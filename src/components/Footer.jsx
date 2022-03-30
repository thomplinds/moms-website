import React from "react";

export default function Footer() {
	return (
		<footer>
			<div className="footer-item italic">
				{ `© Judith A Thompson ${new Date().getFullYear()} | Attorney Advertising Material` }
			</div>
		</footer>
	);
};