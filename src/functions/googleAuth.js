import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

// Create a GoogleAuthProvider instance
const provider = new GoogleAuthProvider();

// Custom hook for handling Google Sign-In
export const useSignInWithGoogle = () => {
    const navigate = useNavigate();

    // Function to initiate Google Sign-In
    const signInWithGoogle = () => {
        // Use signInWithPopup to initiate the Google Sign-In process
        signInWithPopup(auth, provider)
            .then((result) => {
                // Handle the successful sign-in
                // For example, you might navigate to the home page
                navigate("/");
            })
            .catch((error) => {
                // Handle errors during the sign-in process
                console.log(error.message);
            });
    };

    // Return the function to be used by components
    return signInWithGoogle;
};
