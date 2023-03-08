import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Aboutus.css'
import Navibar from "../../Components/Navbar/Navibar";
const Aboutus = () => {

	return (
		<div className="Main">
			<Navibar />
			<section className='py-4 '>
				<div className='container-fluid'>
					<div className='row'>
						<h4>About Us</h4>
					</div>
				</div>
			</section>
			<br />
			<section className='section'>
				<div className='container'>
					<div className="shadow p-3 mb-5 bg-white rounded">

						<div className='col-12 text center'>
							<h2 className='text-muted'>Why E-Learning</h2>
							<br />
							<p className="text-justify">eLearning is more flexible and simple than the traditional chalk-and-board techniques of teaching. Many students have also admired it because of its efficiency and cost-effectiveness. Students can continue their learning process around other responsibilities and commitments through multimedia content and online resources anytime that is convenient for them. eLearning is also well-suited for companies who wish to further train their employees because of the increasing amount of technological advancements. It is also convenient because eLearning is suitable for companies with a limited budget. They can enroll their employees in different eLearning programs to enhance their learning. Students who are more serious and responsible about their studies are more likely to take the online courses of their choice to build their educational careers</p>

						</div>
					</div>
				</div>
			</section>
			<section className='section bg-light'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 mb-5 text center'>
							<h3 className='text-muted'>Vision, Mission,FOCUS AREAS AND STRATEGIES</h3>
						</div>
						<div className='col-md-4 text center'>
							<div className='shadow-lg p-3 mb-5 bg-white rounded'>
								<h5>Our Vision</h5>
								<p>
									ELearning and Emerging Technologies will be nationally recognized as a leader in the application of innovative instructional technologies that facilitate the next generation of teaching and learning.
								</p>
							</div>
						</div>

						<div className='col-md-4 text center'>
							<div className='shadow-lg p-3 mb-5 bg-white rounded'>
								<h5>Our Mission</h5>
								<p>
									eLearning and Emerging Technologies is dedicated to supporting faculty, contributing to teaching excellence, and enhancing student success through: exemplary instructional design, effective application and integration of instructional technologies, interactive digital media development, administration and enhancement of the university’s enterprise learning management system (Blackboard), and the deployment of innovative emerging technologies.
								</p>
							</div>
						</div>

						<div className='col-md-4 text center'>
							<div className='shadow-lg p-3 mb-5 bg-white rounded'>
								<h5>FOCUS AREAS AND STRATEGIES</h5>
								<p>
									<li>Coordinate Resources</li>
									<li>Share Best Practices</li>
									<li>
									Ensure Course Quality
									</li>
									<li>
									Digital Transformation
									</li>
									
								</p>
							</div>
						</div>

					</div>
				</div>
			</section>

			<div>
				<p>You could be part of this excellent journey. Interested?</p>
				<a className="btn btn-primary" href="/signup" role="button">Join Now</a>
			</div>
			<br />
		</div>
	)
}
export default Aboutus

