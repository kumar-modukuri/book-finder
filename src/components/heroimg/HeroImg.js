import axios from "axios";
import { useState } from "react";
import IntroImg from "../../assets/intro_bg.jpg";
import Card from "../card/Card";
import Spinner from "../spinner/Spinner";
import "./HeroImgStyles.css";

const HeroImg = () => {
	const [searched, setSearched] = useState("");
	const [loading, setLoading] = useState(false);
	const [books, setBooks] = useState([]);

	const URL = "http://openlibrary.org/search.json?title=";

	const handleSearch = async () => {
		try {
			if (searched === "") {
				console.log("Empty");
			} else {
				setLoading(true);
				const response = await axios.get(URL + searched);

				if (response.data) {
					setBooks(response.data.docs);
				} else {
					console.log("0 Results Found");
				}
			}
		} catch (error) {
			console.log("Frontend Error : ", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="heroimg-container">
			<div className="mask">
				<img className="intro-img" src={IntroImg} alt="IntroImage" />
			</div>
			<div className="content">
				<p>One place for all your books</p>
				<h1>BOOK FINDER</h1>
				<div className="content-div">
					<input
						type="text"
						value={searched}
						onChange={(e) => setSearched(e.target.value)}
						placeholder="search title here..."
					/>
					<button className="btn" onClick={handleSearch} disabled={loading}>
						Search
					</button>
				</div>
			</div>
			<div className="books-div">
				{books.length === 0 && !loading && (
					<p>Search Results will display here</p>
				)}
				{loading ? (
					<Spinner />
				) : (
					books.map((val, index) => {
						return (
							<Card
								key={index}
								id={val.key}
								cover={val.cover_i}
								title={val.title}
								author={val.author_name?.join(", ") || "Unknown Author"}
								edition={val.edition_count || "N/A"}
								year={val.first_publish_year || "N/A"}
							/>
						);
					})
				)}
			</div>
		</div>
	);
};

export default HeroImg;
