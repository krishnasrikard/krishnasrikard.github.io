import React from "react";
import './../index.css';

export default function Work() {
	return (
		<section id="work-experience">
			<div className="description">
				<h1>Work Experience</h1>
			</div>

			<div className="timeline">
				<div className="work-container right">
					<div className="date">May 2021 - July 2021</div>
					<i className="icon fa fa-briefcase"></i>
					<div className="content">
						<h2>Application Development Intern at Oracle</h2>
						<ul>
							<li>Developed an Oracle Digital Assistant to give response and perform tasks that a user can perform on Oracle Journeys application</li>
							<li>Created dataset and worked on backend functioning of the chatbot and integrating it with Journeys application using RestAPI, OBotML, Client Web SDK and Oracle HCM Cloud. Used tools like Mocha Chai and Jasmine frameworks for testing and JSDoc for writing documentation.</li>
						</ul>
					</div>
				</div>
				<div className="work-container left">
					<div className="date">Sep 2019 - May 2021</div>
					<i className="icon fa fa-pencil"></i>
					<div className="content">
						<h2>Core Member of Epoch</h2>
						<ul>
							<li><b>Epoch:</b> The ML and Data Science Club of IIT Hyderabad</li>
							<li>Guided students through starting machine learning, taught some topics of <b>deep learning</b> and provided help in projects related to <b>computer vision.</b>.</li>
						</ul>
					</div>
				</div>
				<div className="work-container right">
					<div className="date">July 2019 - May 2020</div>
					<i className="icon fa fa-pencil"></i>
					<div className="content">
						<h2>Core Member of Elektronica</h2>
						<ul>
							<li><b>Elektronica:</b> The Electrical and Electronics Club of IIT Hyderabad</li>
							<li>Motivated and guided students through starting <b>IoT projects</b> and taught sessions related to IoT sensors and their intergration with Arduino.</li>
						</ul>
					</div>
				</div>
				<div className="work-container left">
					<div className="date">Nov 2019 - Dec 2019</div>
					<i className="icon fa fa-briefcase"></i>
					<div className="content">
						<h2>Machine Learning Intern</h2>
						<ul>
							<li>I have developed sequential models for modelling human activity from the data collected using sensors to provide appropriate estimations for adjustments of smart appliances inorder to consume power.</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}