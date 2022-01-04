import React from "react";
import './../index.css';

export default function Achievements() {
	return (
		<section id="achievements">
			<div className="description">
				<h1>Achievements</h1>
			</div>
			<ul>
				<li><b>I’m Beside You’s Hackathon:</b> Won 5000 INR cashprice for the Explainability in a Deep Learning competition for Smile Classification conducted in IIT Hyderabad.</li>
				<li><b>JEE Advanced Rank: 1373</b> Top 0.7% of students appeared for the examination.</li>
				<li><b>JEE Main Rank: 1405</b> Top 0.15% of students appeared for the examination.</li>
			</ul>
		</section>
	);
}