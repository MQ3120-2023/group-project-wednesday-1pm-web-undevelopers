import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

const provider = new GoogleAuthProvider();

export const useSignInWithGoogle = () => {
    const navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // console.log(result.user.uid);
                navigate("/");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return signInWithGoogle;
};
