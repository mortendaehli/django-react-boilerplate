import axios from "axios";
import { toast } from "react-toastify";
import {
    CREATE_USER_ERROR,
    CREATE_USER_SUBMITTED,
    CREATE_USER_SUCCESS
} from "./SignupTypes";

export const signupNewUser = userData => dispatch => {
    dispatch({ type: CREATE_USER_SUBMITTED });
    axios
        .post("/api/v1/users/", userData)
        .then(response => {
            toast.success(
                "Account for " +
                userData.username +
                " created successfully. Please login."
            );
            dispatch({ type: CREATE_USER_SUCCESS });
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                toast.error(JSON.stringify(error.response.data));
                dispatch({
                    type: CREATE_USER_ERROR,
                    errorData: error.response.data
                });
            } else if (error.message) {
                // the error message is available,
                toast.error(JSON.stringify(error.message));
            } else {
                // strange error, just show it
                toast.error(JSON.stringify(error));
            }
        });
};