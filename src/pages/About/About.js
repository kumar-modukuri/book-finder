import aboutImg from "../../assets/about-img.jpg";
import Navbar from "../../components/navbar/Navbar";
import "./AboutStyles.css";

const About = () => {
	return (
		<>
			<Navbar />
			<div className="about-container">
				<div className="container">
					<div className="about-img">
						<img src={aboutImg} alt="" />
					</div>
					<div className="about-text">
						<h2 className="about-title">About Book Finder</h2>
						<div className="about-section">
							<p>
								<strong>Book Finder</strong> is a web application designed to
								help book enthusiasts discover and explore books effortlessly.
								Using the OpenLibrary API, Book Finder allows users to search
								for books by title, author, or keywords and presents detailed
								information about each book. Users can view book covers,
								authors, descriptions, publication dates, and subjects—all in
								one place.
							</p>
							<p>
								With a clean, user-friendly interface, Book Finder makes it
								simple to:
							</p>
							<ul>
								<li>Discover new books on topics of interest</li>
								<li>Explore authors and genres in depth</li>
								<li>
									View detailed book information, including covers and
									descriptions
								</li>
							</ul>
							<p>
								Whether you're a student, an avid reader, or someone looking for
								a quick read,
								<strong>Book Finder</strong> is your go-to tool for discovering
								and learning more about books.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
