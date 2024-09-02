---
layout: category
title: Preprints
sidebar_sort_order: 1
---
<!-- Style for Preprints Page -->
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

<!-- Preprints -->

<div markdown=1>
<table>
	<tbody>
		<tr>
      		<td><h2 style="color:tomato;">2024</h2></td>
      		<td></td>
    	</tr>
    	<tr>
			<td>
	  			<img class="icon" src="../assets/imgs/Publications/Per-Shot-Bitrate-Ladders-1.png" onmouseover="this.src='../assets/imgs/Publications/Per-Shot-Bitrate-Ladders-2.png';" onmouseout="this.src='../assets/imgs/Publications/Per-Shot-Bitrate-Ladders-1.png';" />
			</td>
      		<td class="paper_text">
				<a href="https://arxiv.org/abs/2408.01932" style="font-size: 1.15em; color:#0000ff;">
					<strong style="font-weight: 600">Constructing Per-Shot Bitrate Ladders using Visual Information Fidelity</strong>
				</a>
				<br/>
				<strong>Krishna Srikar Durbha</strong> and Alan C. Bovik
				<br/>
				<p></p>
                <ul>
					<li>We study the efficacy of using features drawn from <b>Visual Information Fidelity</b>, extracted over scales and subbands, as features for constructing <b>video bitrate and quality ladders</b>.</li>
                    <li> We proposed <b>multiple feature sets based on VIF features</b>, as well as an <b>ensemble of VIF features and low-level features</b> for constructing content-gnostic ladders for video delivery.</li>
                    <li>We compared our proposed models against existing popular techniques, including predicting crossover bitrates and quality using low-level features. We also <b>designed counterpart models</b> that predict cross-over VMAF points and bitrates.</li>
                    <li>Our results show that when considering various <b>quality and bitrate prediction methodologies</b>, the use of an <b>ensemble of low-level features and VIF features</b> to predict quality in the construction of bitrate ladders, and the prediction of bitrates in the construction of quality ladders, obtained excellent performance against fixed bitrate ladder and reference bitrate ladders constructed from exhaustive encoding.</li>
				</ul>
				[<a href="https://arxiv.org/abs/2408.01932" style="color:red; font-weight:bold">Paper</a>] [<a href="https://github.com/krishnasrikard/Constructing-Per-Shot-Bitrate-Ladders-using-Visual-Information-Fidelity" style="color:red; font-weight:bold">Code</a>][<strong>Under Review</strong>]
			</td>
    	</tr>
	</tbody>
</table>