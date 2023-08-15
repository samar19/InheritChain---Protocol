import BeQuestLogo from "../../assests/final-logo.png";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function About() {
	const { ref, inView, entry } = useInView({
		threshold: 0.3,
	});
	const leftCardRef = useRef();
	const rightCardRef = useRef();

	useEffect(() => {
		if (inView) {
			leftCardRef.current.classList.add("left");
			rightCardRef.current.classList.add("right");
		}
	}, [inView]);

	return (
		<div ref={ref} className="about" id="about">
			<img src={BeQuestLogo} alt="BeQuest" />

			<div className="about-card">
				<div className="about-card-item" ref={leftCardRef}>
					<h2 className="about-card-item__head">InheritChain: Securing Your Legacy</h2>
					<div className="about-car-item__text">
						<p className="about-card-item__text-p">
						The inception of the InheritChain Protocol arose with the paramount aim of shielding digital assets in scenarios encompassing the loss of a private key or the passage of an individual						</p>

						<p className="about-card-item__text-p">
						The assets shall perennially reside within the owner's address, poised for a seamless transfer to their designated beneficiary as per their stipulated wishes						</p>
					</div>
				</div>

				<div className="about-card-item item-right" ref={rightCardRef}>
					<h2 className="about-card-item__head">
					Web3: Total Decentralization Achieve					</h2>

					<div className="about-car-item__text">
						<p className="about-card-item__text-p">
						Users are liberated from the need to share their invaluable private key, as a mere approval and signature of the asset request within the InheritChain Protocol's smart contract suffices						</p>
						<p className="about-card-item__text-p">
						Rest assured, your request shall be impeccably executed through the precision of a smart contract						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
