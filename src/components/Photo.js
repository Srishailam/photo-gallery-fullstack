import React from "react";
import { Card } from "react-bootstrap";

const Photo = ({ id }) => {
	return (
		<div className="Photo">
			<Card className="photo">
				<Card.Img
					variant="top"
					src={`http://localhost:3300/photos/${id}`}
					alt="Photo"
				/>
			</Card>
		</div>
	);
};

export default Photo;
