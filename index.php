<?php include "header.php" ?>

	<main role="main">
		<section class="slider">
			<div class="wrap">
					<div class="slideshow" style="background-image: url('img/wow.jpg'); background-size: cover;">
						<div class="profile">
							<div class="innerprofile">
								<img src="img/portrait.png" alt="yes, it's Margaret!">
								<h2 class="namebanner"><span class="name">Margaret Hobbie</span></h2>
								<p>Margaret is probably the nicest person you'll ever meet. You'd be missing out on a wonderful opportunity here, not hiring her. 
									<a class="goto" href="about">Read More...</a>
							</div>
						</div>

					</div>
			</div>
			
		</section>
		<div class="threemusketeers"> <!-- Feel awful using all these div but i'm rushin :C !-->
			<div class="wrap">
				<section class="property featured">
					<h2>Featured Property</h2>
					<article>
						<img class="featured" src="img/house1.jpg" alt="really really gorgeous house">
						<ul class="property">
							<li>
								<a class="goto" href="property/924-cliff">924 Cliff Street</a>
								<span>$259,000</span>
						</ul>
					</article>
					<p>
						<a class="goto" href="properties">more properties</a>
					</p>
				</section>
				<section class="news">
					<h2>News</h2>
					<article>
						<h3>
							<a class="goto" href="john">Curabaitoireoijerjiods</a>
						</h3>
						<p>John Frusciante plays guitar by the seashore. Occasionally he sells conches.
					</article>
					<article>
						<h3>
							<a class="goto" href="latin-stuff">Suspendisse dictum, tellus et porta</a>
						</h3>
						<p>I studied french for a while, but I have to say, this is much mrore difficult having no background in Latin.
					</article>
					<p><a class="goto" href="news">more news</a>
				</section>
				<section class="property map">
					<h2>Property Map</h2>
					<div id="map" class="map"></div>
				</section>
			</div>
		</div>
	</main>

<?php include "footer.php" ?>