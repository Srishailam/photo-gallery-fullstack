import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { beginAddPhoto } from "../actions/photosAction";

const UploadForm = ({ errors, dispatch }) => {
	const [photo, setPhoto] = useState(null);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errorMsg, setErrorMsg] = useState(null);

	useEffect(() => {
		setErrorMsg(errors);
	}, [errors]);

	useEffect(() => {
		setErrorMsg("");
	}, []);

	const handleOnChange = (e) => {};
	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (photo) {
			setErrorMsg("");
			dispatch(beginAddPhoto(photo));
			setIsSubmitted(true);
		}
	};

	return (
		<div className="UploadForm">
			{errorMsg && errorMsg.upload_error ? (
				<p className="errorMsg centered-message">{errorMsg.upload_error}</p>
			) : (
				isSubmitted && (
					<p className="successMsg centered-message">
						Photo uploaded successfully.
					</p>
				)
			)}
			<Form
				onSubmit={handleOnSubmit}
				method="post"
				encType="multipart/form-data"
				className="upload-form"
			>
				<Form.Group>
					<Form.Label>Choose photo to upload</Form.Label>
					<Form.Control
						type="file"
						name="photo"
						onChange={handleOnChange}
					></Form.Control>
				</Form.Group>
				<Button
					variant="primary"
					type="submit"
					className={`${!photo ? "disabled submit-btn" : "submit-btn"}`}
					disabled={photo ? false : true}
				>
					Upload
				</Button>
			</Form>
		</div>
	);
};
const mapStateToProps = (state) => ({
	photos: state.photos || [],
	errors: state.errors || {},
});

export default connect(mapStateToProps)(UploadForm);
