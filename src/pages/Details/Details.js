import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFoundImage from "../../assets/cover_not_found.jpg";
import Navbar from "../../components/navbar/Navbar.js";
import Spinner from "../../components/spinner/Spinner.js";
import "./DetailsStyles.css";

const Details = () => {
	const { id } = useParams();
	const [book, setBook] = useState(null);

	useEffect(() => {
		const fetchBookDetails = async () => {
			try {
				const response = await axios.get(
					`https://openlibrary.org/works/${id}.json`
				);
				setBook(response.data);
			} catch (error) {
				console.error("Error fetching book details: ", error);
			}
		};

		fetchBookDetails();
	}, [id]);

	if (!book) return <Spinner />;

	const coverImg = book.covers
		? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
		: NotFoundImage;

	return (
		<>
			<Navbar />
			<div className="details-container">
				<h1>{book.title}</h1>
				<img src={coverImg} alt={`${book.title} cover`} />
				<p className="author">
					Author :{" "}
					{Array.isArray(book.author)
						? book.author.join(", ")
						: book.author || "Unknown Author"}
				</p>
				<p>
					<strong>Description : </strong>{" "}
					{book.description
						? book.description.value || book.description
						: "No description available."}
				</p>
				<p>
					<strong>First Published : </strong> {book.first_publish_date || "N/A"}
				</p>
				<p className="subjects">
					<strong>Subjects : </strong>{" "}
					{book.subjects ? book.subjects.join(", ") : "N/A"}
				</p>
			</div>
		</>
	);
};

export default Details;
