import React from "react";
import './../index.css';

export default function Skills() {
	return (
		<section id="skills">
			<div className="description">
				<h1>Skills</h1>
			</div>

			<div className="skill">
				<div className="category">
					<h3>Programming Languages</h3>
					<span className="fa" aria-hidden="true"><img src="icons/C.svg" className="icon-resize" alt="C"/></span>
					<span className="fa" aria-hidden="true"><img src="icons/C++.svg" className="icon-resize" alt="C++"/></span>
					<span className="fa" aria-hidden="true"><img src="icons/Python.svg" className="icon-resize" alt="Python"/></span>
					<span className="fa" aria-hidden="true"><img src="icons/MatLab.svg" className="icon-resize" alt="MatLab"/></span>
					<span className="fa" aria-hidden="true"><img src="icons/Java.svg" className="icon-resize" alt="Java"/></span>
					<span className="fa" aria-hidden="true"><img src="icons/Javascript.svg" className="icon-resize" alt="Javascript"/></span>
				</div>

				<div className="category">
					<h3>Libraries</h3>
					<span className="fa" aria-hidden="true"><img src="icons/Tensorflow.svg" className="icon-resize" alt="Tensorflow"/></span>
					<span className="fa" aria-hidden="true"><img src="icons/PyTorch.svg" className="icon-resize" alt="PyTorch"/></span>
					<span className="fa" aria-hidden="true"><img src="icons/NumPy.svg" className="wide-icon-resize" alt="NumPy"/></span>
					<span className="fa" aria-hidden="true"><img src="icons/OpenCV.svg" className="icon-resize" alt="OpenCV"/></span>
					<span className="fa" aria-hidden="true"><img src="icons/Pandas.svg" className="wide-icon-resize" alt="Pandas"/></span>
					<span className="fa" aria-hidden="true"><img src="icons/AutoKeras.svg" className="wide-icon-resize" alt="AutoKeras"/></span>
					<span className="fa" aria-hidden="true"><img src="icons/Scikit-Learn.svg" className="wide-icon-resize" alt="Scikit-Learn"/></span>
				</div>

				<div className="category">
					<h3>Web-Development and Tools</h3>
					<span className="fa" aria-hidden="true"><img src="icons/HTML.svg" className="icon-resize" alt="HTML"/></span>
					<span className="fa" aria-hidden="true"><img src="icons/CSS.svg" className="icon-resize" alt="CSS"/></span>
					<span className="fa" aria-hidden="true"><img src="icons/Nodejs.svg" className="icon-resize" alt="Nodejs"/></span>
					<span className="fa" aria-hidden="true"><img src="icons/Ubuntu.svg" className="icon-resize" alt="Ubuntu"/></span>
					<span className="fa" aria-hidden="true"><img src="icons/LaTeX.svg" className="wide-icon-resize" alt="LaTeX"/></span>
					<span className="fa" aria-hidden="true"><img src="icons/SQLite.svg" className="wide-icon-resize" alt="SQLite"/></span>
				</div>
			</div>
		</section>
	);
}