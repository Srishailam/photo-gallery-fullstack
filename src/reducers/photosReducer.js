const initialState = [];

const photosReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOAD_PHOTOS":
			return action.photos;
		default:
			return state;
	}
};

export default photosReducer;
