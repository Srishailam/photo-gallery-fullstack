import axios from "axios";
import React from "react";
import { BASE_API_URL } from "../utils/constants";
import { getErrorsAction } from "./errorsAction";

export const beginAddPhoto = (photo) => {
	return async (dispatch) => {
		try {
			const formData = new FormData();
			formData.append("photo", photo);
			await axios.post(`${BASE_API_URL}/photos`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
		} catch (error) {
			error.response && dispatch(getErrorsAction(error.response.data));
		}
	};
};
export const startLoadPhotos = () => {
	return async (dispatch) => {
		try {
			const photos = await axios.get(`${BASE_API_URL}/photos`);
			dispatch(loadPhotos(photos.data));
		} catch (error) {
			error.response && dispatch(getErrorsAction(error.response.data));
		}
	};
};

export const loadPhotos = (photos) => ({
	type: "LOAD_PHOTOS",
	photos,
});
