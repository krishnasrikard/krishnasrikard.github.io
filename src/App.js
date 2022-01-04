import React from "react";

import Introduction from "./components/Introduction";
import About from "./components/About";
import Education from "./components/Education";
import Research from "./components/Research";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

export default function App() {
	return (
	<main>
		
		<Introduction />
		<About />
		<Education />
		<Research />
		<Work />
		<Skills />
		<Projects />
		<Achievements />
		<Footer /> 
		
	</main>
	);
}