import React from "react";
import './../index.css';

export default function Introduction() {
	return (
		<div id="particles-js">
			<div class="header">
				<h1>
					<span class="name">Krishna Srikar Durbha</span>
					<span class="details">Electrical Engineering Senior at IIT Hyderabad</span>
				</h1>
			
				<div class="handles-icons">
					<a aria-label="LinkedIn Profile" target="_blank" href="https://www.linkedin.com/in/krishna-srikar-durbha/">
						<i class="icon fa fa-linkedin" aria-hidden="true"></i>
					</a>
					<a aria-label="GitHub Profile" target="_blank" href="https://www.github.com/dks2000dks/">
						<i class="icon fa fa-github-alt" aria-hidden="true"></i>
					</a>
					<a aria-label="Resume" target="_blank" href="https://drive.google.com/file/d/1qZZ81kAM-aL4TUoztYAqhEKA79OjS7vq/view?usp=sharing">
						<i class="icon fa fa fa-file-pdf-o" aria-hidden="true"></i>
					</a>
					<a aria-label="Mail Me" target="_blank" href="mailto:srikarkrishnad@gmail.com">
						<i class="icon fa fa-envelope" aria-hidden="true"></i>
					</a>
					<a aria-label="Instagram Profile" target="_blank" href="https://www.instagram.com/krishnasrikar.d/">
						<i class="icon fa fa-instagram" aria-hidden="true"></i>
					</a>
					<a aria-label="Facebook Profile" target="_blank" href="https://www.facebook.com/krishnasrikar.d/">
						<i class="icon fa fa-facebook-official" aria-hidden="true"></i>
					</a>
				</div>

				<div class="handles-links">
					<a class="link" href="#about" data-scroll>About Me</a>
					<a class="link" href="#education" data-scroll>Education</a>
					<a class="link" href="#work-experience" data-scroll>Work-Experience</a>
					<a class="link" href="#research-experience" data-scroll>Research-Experience</a>
					<a class="link" href="#skills" data-scroll>Skills</a>
					<a class="link" href="#projects" data-scroll>Projects</a>
					<a class="link" href="#achievements" data-scroll>Achievements</a>
				</div>
			</div>

			<a class="down" href="#about" data-scroll><i class="icon fa fa-chevron-down" aria-hidden="true"></i></a>
		</div>
	);
}