import aboutImg from "../../assets/about-img.jpg";
import Navbar from "../../components/navbar/Navbar";
import "./AboutStyles.css";

const About = () => {
	return (
		<div>
			<Navbar />
			<section className="about">
				<div className="container">
					<div className="section-title">
						<h2>About</h2>
					</div>

					<div className="about-content grid">
						<div className="about-img">
							<img src={aboutImg} alt="" />
						</div>
						<div className="about-text">
							<h2 className="about-title fs-26 ls-1">About Book Finder</h2>
							<p className="fs-17">
								Book Finder is a web application designed to help book
								enthusiasts discover and explore books effortlessly. Using the
								OpenLibrary API, Book Finder allows users to search for books by
								title, author, or keywords and presents detailed information
								about each book. Users can view book covers, authors,
								descriptions, publication dates, and subjects—all in one place.
							</p>
							<p className="fs-17">
								With a clean, user-friendly interface, Book Finder makes it
								simple to: Discover new books on topics of interest Explore
								authors and genres in depth View detailed book information,
								including covers and descriptions Whether you're a student, an
								avid reader, or someone looking for a quick read, Book Finder is
								your go-to tool for discovering and learning more about books.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
