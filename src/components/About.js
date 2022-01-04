import React from "react";
import './../index.css';

export default function About() {
	return (
		<section id="about">
			<div className="description">
				<h1>About Me</h1>
				<picture>
					<img
						src="./imgs/Me.jpg"
						alt="Professional Me"
						width="20%"
						// style="border-radius: 50%"
					/>
				</picture>
				<p>
					I am a Electrical Engineering Senior at IIT Hyderbad. My interests primarly lie the domains of Computer Vision, Generative-Modelling, Autonomous-Driving, Representation-Learning, Deep Learning, Machine Learning, and Signal Processing.
				</p>
			</div>
		</section>
	);
}