import ContributorsLogo from "../../assests/contributors.svg";
import Rohan from "../../assests/rohan.png";
import Krishan from "../../assests/krishan.jpg";
import Gautam from "../../assests/gautam.jpg";
import Anshul from "../../assests/anshul.png";

const Contributors = () => {
	return (
		<div className="contributors">
			<h1 className="contributors-head">Contributors</h1>

			<div>
				<img src={ContributorsLogo} alt="" />

				<div className="contributors-list">
					<div className="contributors-list__profile">
						
					</div>
					<div className="contributors-list__profile">
					
					</div>
					{/* <div className="contributors-list__profile">
						<img src={Krishan} alt="krishan" />

						<h3 className="contributors-list__profile-name">Krishan Kant</h3>
					</div> */}

					<div className="contributors-list__profile">
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contributors;
