import React from "react";
import './../index.css';

export default function Research() {
	return (
		<section id="research-experience">
			<div className="description">
				<h1>Research Experience</h1>
			</div>

			<div className="timeline">
				<div className="research-container right">
					<div className="date">July 2021 - Dec 2021</div>
					<i className="icon fa fa-laptop"></i>
					<div className="content">
						<h2>Reinforcement Learning for Autonomous Navigation | Guide: Dr. Sumohana Channappayya</h2>
						<ul>
							<li>Using reinforcement learning for autonomous navigation of cars with two objectives. One making sure the car is in the lane and the speed of the car is under speed limit.</li>
							<li>Agent can regulate speed and steering angle of car and is trained using Deep Q Learning and reward functions are designed from visual input from cameras using Segmentation and Lane Detection models.</li>
						</ul>
					</div>
				</div>
				<div className="research-container left">
					<div className="date">Jan 2021 - Nov 2021</div>
					<i className="icon fa fa-laptop"></i>
					<div className="content">
						<h2>AutoML Models for Wireless Signals Classification and their effectiveness against Adversarial Attacks | Guide: Dr. Sai Dhiraj Amuru </h2>
						<ul>
							<li>Designing and exploring performance of AutoML models on classification of wireless signals.</li>
							<li>Understanding effectiveness of AutoML models against transfer based white-box and black-box attacks to explain adversarial transferability of these attacks on AutoML models.</li>
							<li>Accepted in Poster Session <b>COMSNETS 2022</b></li>
							<li><a href="https://github.com/dks2000dks/Modulation-Classification" target="_blank">Code</a>, <a href="https://www.comsnets.org/poster_session.html" target="_blank">Paper</a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}