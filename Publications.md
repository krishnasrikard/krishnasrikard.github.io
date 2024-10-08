---
layout: category
title: Publications
sidebar_sort_order: 1
---
<!-- Style for Publications Page -->
<style>
	table {
		width:100%;
		background: none;
	}
	td.paper_text {
		/* padding-top: 1rem; */
		padding-bottom: 4rem;
		width: 70%;
	}
	p.summary {
		margin-top: 0.5rem;
		margin-bottom: 0rem;
	}
	.award {
		color: deeppink;
	}
	img.icon {
		padding-top: 0.3rem;
		border-radius: 10px;
		width: 100%;
	}
	@media screen and (max-width: 1200px) {
		td.paper_text {
			width: 70%;
		}
	}
</style>
<p></p>

<!-- Publications -->

<div markdown=1>
<table>
	<tbody>
		<tr>
      		<td><h2 style="color:tomato;">2024</h2></td>
      		<td></td>
    	</tr>
    	<tr>
			<td>
	  			<img class="icon" src="../assets/imgs/Publications/Bitrate-Ladder-Construction-1.png" onmouseover="this.src='../assets/imgs/Publications/Bitrate-Ladder-Construction-2.png';" onmouseout="this.src='../assets/imgs/Publications/Bitrate-Ladder-Construction-1.png';" />
			</td>
      		<td class="paper_text">
				<a href="https://ieeexplore.ieee.org/document/10566405" style="font-size: 1.15em; color:#0000ff;">
					<strong style="font-weight: 600">Bitrate Ladder Construction Using Visual Information Fidelity</strong>
				</a>
				<br/>
				<strong>Krishna Srikar Durbha</strong>, Hassene Tmar, Cosmin Stejerean, Ioannis Katsavounidis, and Alan C. Bovik
				<br/>
				<p></p>
				<ul>
					<li>We deploy features drawn from <b>Visual Information Fidelity (VIF) (VIF features)</b> extracted from uncompressed videos to <b>predict the visual quality (VMAF)</b> of compressed videos.</li>
					<li>We present <b>multiple VIF feature sets</b> extracted from <b>different scales</b> and <b>subbands</b> of a video to tackle the problem of bitrate ladder construction.</li>
					<li>We compare the performance of <b>predicted bitrate ladders</b> against a fixed bitrate ladder and a bitrate ladder obtained from exhaustive encoding using Bjontegaard delta metrics.</li>
					<li> Our best-performing approach showed average BD-rate and BD-VMAF gains of <b>15.187%</b> and <b>3.731</b> respectively, against Apple’s fixed bitrate ladder and BD-rate and BD-VMAF losses of <b>3.307%</b> and <b>0.664</b> respectively, against a bitrate ladder obtained by exhaustive encoding.</li>
				</ul>
				[<a href="https://ieeexplore.ieee.org/document/10566405" style="color:red; font-weight:bold">Paper</a>] [<a href="https://github.com/krishnasrikard/Constructing-Per-Shot-Bitrate-Ladders-using-Visual-Information-Fidelity" style="color:red; font-weight:bold">Code</a>]
			</td>
    	</tr>
	</tbody>
</table>

<table>
	<tbody>
		<tr>
      		<td><h2 style="color:tomato;">2022</h2></td>
      		<td></td>
    	</tr>
    	<tr>
			<td>
	  			<img class="icon" src="../assets/imgs/Publications/AutoML-Models-for-Wireless-Signals-Classification-and-effectiveness-against-Adversarial-Attacks.png" onmouseover="this.src='../assets/imgs/Publications/AutoML-Models-for-Wireless-Signals-Classification-and-effectiveness-against-Adversarial-Attacks.png';" onmouseout="this.src='../assets/imgs/Publications/AutoML-Models-for-Wireless-Signals-Classification-and-effectiveness-against-Adversarial-Attacks.png';" />
			</td>
      		<td class="paper_text">
				<a href="https://ieeexplore.ieee.org/document/9668448" style="font-size: 1.15em; color:#0000ff;">
					<strong style="font-weight: 600">AutoML Models for Wireless Signals Classification and their effectiveness against Adversarial Attacks</strong>
				</a>
				<br/>
				<strong>Krishna Srikar Durbha</strong> and SaiDhiraj Amuru
				<br/>
				<p></p>
				<ul>
					<li>We designed <b>AutoML models</b> of four different architectures namely Deep Residual Network (ResNet), Convolutional Long Short-Term Deep Neural Network (CLDNN), Convolutional Neural Network (CNN) and Recurrent Neural Network (RNN)</li>
					<li>We studied and compared their performance of proprosed AutoML models with state-of-the-art on the task of <b>wireless signal classification</b>.</li>
					<li>We also analyzed the <b>vulnerability</b> and <b>effectiveness</b> of the proposed AutoML models against transfer-based Projected Gradient Descent and Carlini-Wagner adversarial attacks</li>
					<li>Our results show that <b>AutoML models</b> are a <b>viable</b> and <b>solid</b> candidate approach for the classification of wireless signals.</li>
				</ul>
				[<a href="https://ieeexplore.ieee.org/document/9668448" style="color:red; font-weight:bold">Paper</a>] [<a href="https://github.com/krishnasrikard/AutoML-Models-for-Wireless-Signals-Classification-and-effectiveness-against-Adversarial-Attacks" style="color:red; font-weight:bold">Code</a>]
			</td>
    	</tr>
	</tbody>
</table>