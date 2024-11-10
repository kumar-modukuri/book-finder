import NotFoundImage from "../../assets/cover_not_found.jpg";
import "./CardStyles.css";

const Card = (props) => {
	const truncateText = (text, maxLength) => {
		return text && text.length > maxLength
			? text.substring(0, maxLength) + "..."
			: text;
	};

	const handleClick = () => {
		console.log("Extra Features");
	};

	return (
		<div className="card" onClick={handleClick}>
			<img
				src={
					props.cover
						? `https://covers.openlibrary.org/b/id/${props.cover}-L.jpg`
						: NotFoundImage
				}
				alt={props.title}
			/>
			<p className="title">{truncateText(props.title, 20)}</p>
			<p className="author">
				Author :{" "}
				{Array.isArray(props.author)
					? truncateText(props.author.join(", "), 30)
					: truncateText(props.author, 30) || "Unknown Author"}
			</p>
			<p>Edition : {props.edition}</p>
			<p>Year : {props.year}</p>
		</div>
	);
};

export default Card;
