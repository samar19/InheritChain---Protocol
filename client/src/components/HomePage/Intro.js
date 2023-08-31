import Web3Img from "../../assests/Bitcoin-bro.svg";
import { Link, useNavigate } from "react-router-dom";

function Intro() {
	const navigate = useNavigate();

	const handleWalletNavigate = () => {
		navigate("/wallet");
	};
	return (
		<div className="intro">
			<div className="intro-img">
				<img src={Web3Img} alt="" />
			</div>

			<div className="intro-text">
				<h1 className="intro-text__head bequest-gradient">
				InheritChain Securing Digital Legacies, Today and Tomorrow

				</h1>

				<p className="intro-text__p">
				"Empower Your Legacy: InheritChain secures digital assets for heirs,
				 bridging the gap between today and tomorrow"
				</p>

				<p className="intro-text__p">
				Innovative Solution: InheritChain uses smart contracts to ensure safe transfer of digital legacies,
				 without exposing private keys
				</p>

				<div className="intro-text__launch">
					<button className="button" onClick={handleWalletNavigate}>
						<Link to="/wallet">Launch App</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Intro;
