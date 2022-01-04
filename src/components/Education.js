import React from "react";
import './../index.css';

export default function Education() {
	return (
		<section id="education">
			<div className="description">
				<h1>Education</h1>
			</div>
			
			<div className="education-block">
				<college>
					Indian Institute of Technology, Hyderabad
					<span className="education-date">July 2018 - Present</span>
				</college>
				<br></br>
				<degree>Bachelor of Technology in Electrical Engineering</degree>
				<ul>
					<li><b>CGPA:</b> 9.07/10 (Till Semester-7)</li>
					<li><b>Courses:</b> Image and Video Processing, Representation Learning, Probabilistic Graphical Models, Statistical Inference, Applied Statistics, Detection Theory, Estimation Theory, Random Processes, Information Sciences, Source Coding, Channel Coding, Digital Modulation Techniques, Advanced Digital Signal Processing, Wireless Communications, Operating Systems-1, DBMS-1 etc.</li>
				</ul>
			</div>

			<div className="education-block">
				<college>
					Sri Chaitanya Narayana Junior College, Vijayawada
					<span className="education-date">April 2018 - May 2018</span>
				</college>
				<br></br>
				<degree>Intermediate Education</degree><br></br>
				<b>Percentage:</b> 96.5%
			</div>

			<div className="education-block">
				<college>
					Kennedy High School (Narayana Group of Schools), Vijayawada
					<span className="education-date">June 2012 - Mar 2018</span>
				</college>
				<br></br>
				<degree>Secondary Education</degree><br></br>
				<b>Grade:</b> 10/10
			</div>

			<div className="education-block">
				<college>
					Sri Telaprolu Bapanaiah English Medium High School, Vijayawada
					<span className="education-date">June 2004 - April 2012</span>
				</college>
				<br></br>
				<degree> Education</degree><br></br>
			</div>
		</section>
	);
}