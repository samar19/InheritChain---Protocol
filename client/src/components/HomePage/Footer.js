import React from "react";
import logoName from "../../assests/logo-name.png";
const Footer = () => {
	return (
		<div className="footer-main">
			<footer class="footer-distributed">
				<div class="footer-left">
					<h3>
						<img src={logoName} alt="" />
					</h3>

					<p class="footer-company-name">Company Name © 2015</p>
				</div>

				<div class="footer-center">
					<div>
						<i class="fa fa-map-marker"></i>
						<p>
							<span> Dora Grant DAO  💖 Hackathon</span> Round 4👨‍💻
						</p>
					</div>

					{/* <div>
						<i class="fa fa-phone"></i>
						<p>+91 8920304880</p>
					</div> */}

					<div>
						<i class="fa fa-envelope"></i>
						<p>
							<a href=""></a>
						</p>
					</div>
				</div>

				<div class="footer-right">
					<p class="footer-company-about">
						<span>About the company</span>
						"InheritChain was born to safeguard digital assets, enabling users to fortify holdings
						 like cryptocurrencies, NFTs, against private key loss or demise"
					</p>

					<div class="footer-icons">
						<a href="https://www.youtube.com/watch?v=RMH2iMOrTck" target="_blank">
							<i class="fa fa-youtube"></i>
						</a>

						<a
							href="https://github.com/samar19/InheritChain---Protocol"
							target="_blank"
						>
							<i class="fa fa-github"></i>
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
