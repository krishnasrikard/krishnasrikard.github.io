import React from "react";
import './../index.css';

export default function Projects() {
	return (
		<section id="projects">
			<div className="description">
				<h1>Projects</h1>
			</div>

			<div className="project">
				<div className="images-right">
					<picture><img alt="Video-Classification" src="./imgs/Video-Classification.png"/></picture>
				</div>
				<div className="contents-left">
					<h3>Natural and Adversarial Corruptions on Video Classification | Guide: Dr. Sumohana Channappayya</h3>
					<ul>
						<li>Using CNN-RNN architecture for classifying videos.</li>
						<li>Designing various natural and adversarial single frame corruptions and understanding their impacts on classification.</li>
						<li>Designing adversarial attack to fool classification model.</li>
					</ul>
					<div className="project-link">
						<a href="https://github.com/dks2000dks/Video-Classification" target="_blank">
							<span className="iconify" data-icon="akar-icons:github-fill" data-inline="false" width="40px"></span>
						</a>
					</div>
				</div>
			</div>
			
			<div className="project">
				<div className="images-left">
					<picture><img alt="BHT-BC" src="./imgs/BHTvsBC.png"/></picture>
				</div>
				<div className="contents-right">
					<h3>Binary Hypothesis Testing vs Machine Learning Binary Classification | Guide: Dr. Sameen Naqvi</h3>
					<ul>
						<li>Worked on differences between Hypothesis Testing and Binary Classification from data and decision rule perspectives.</li>
						<li>Used Banknote Authentication dataset.</li>
					</ul>
					<div className="project-link">
						<a href="https://github.com/dks2000dks/Hypothesis-Testing-vs-Binary-Classification" target="_blank">
							<span className="iconify" data-icon="akar-icons:github-fill" data-inline="false" width="40px"></span>
						</a>
					</div>
				</div>
			</div>

			<div className="project">
				<div className="images-right">
					<picture><img alt="Social-Distancing" src="./imgs/SD.png"/></picture>
				</div>
				<div className="contents-left">
					<h3>Social Distancing Detection | Object Detection</h3>
					<ul>
						<li>Detecting violation of Social Distancing using YOLOv3-SPP Model with COCO Dataset weights for object detection and designed a violation detector from bounding boxes and their location in the image.</li>
					</ul>
					<div className="project-link">
						<a href="https://github.com/dks2000dks/Image-Processing/tree/master/Social-Distancing-Detection" target="_blank">
							<span className="iconify" data-icon="akar-icons:github-fill" data-inline="false" width="40px"></span>
						</a>
					</div>
				</div>
			</div>

			<div className="project">
				<div className="images-left">
					<picture><img alt="HMM" src="./imgs/HMM.png"/></picture>
				</div>
				<div className="contents-right">
					<h3>Hidden Markov Models | Guide: Dr. Sumohana Channappayya</h3>
					<ul>
						<li>Implemented a basic two-class classifier using HMMs which classifies depending on likelihood. HMMs are constructed on MFCCs from raw speech samples and forward backward algorithm is used to learn the parameters of a HMMs.</li>
					</ul>
					<div className="project-link">
						<a href="https://github.com/dks2000dks/IIT-Hyderabad-Semester-Courses/blob/master/EE5602/HW0/HW0.ipynb" target="_blank">
							<span className="iconify" data-icon="akar-icons:github-fill" data-inline="false" width="40px"></span>
						</a>
					</div>
				</div>
			</div>

			<div className="project">
				<div className="images-right">
					<picture><img alt="Music-Generation" src="./imgs/Music-Generation.png"/></picture>
				</div>
				<div className="contents-left">
					<h3>Music Generation | Audio Processing </h3>
					<ul>
						<li>Automatic music generation for Mendelssohn Piano collection. Generating music using two different techniques one with simple WaveNet architecture which has dilated convolutional layers and another a sequential model using LSTM units.</li>
					</ul>
					<div className="project-link">
						<a href="https://github.com/dks2000dks/Speech-and-Audio-Processing/tree/master/Music%20Generation" target="_blank">
							<span className="iconify" data-icon="akar-icons:github-fill" data-inline="false" width="40px"></span>
						</a>
					</div>
				</div>
			</div>

			<div className="project">
				<div className="images-left">
					<picture><img alt="Transliteration" src="./imgs/Transliteration.png"/></picture>
				</div>
				<div className="contents-right">
					<h3>Transliteration | Natural Language Processing</h3>
					<ul>
						<li>Transliteration from Hindi to English. A Encoder-Decoder architecture consisting of RNN units is used for Sequence-toSequence modelling for Hindi-English corpus.</li>
					</ul>
					<div className="project-link">
						<a href="https://github.com/dks2000dks/Natural-Language-Processing/tree/master/Transliteration/English-Hindi" target="_blank">
							<span className="iconify" data-icon="akar-icons:github-fill" data-inline="false" width="40px"></span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}