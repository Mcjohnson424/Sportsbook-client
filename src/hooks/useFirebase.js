import { useContext } from "react";
import FirebaseContext from "../contexts/FirebaseContext";

export default function useFirebase() {
    const firebase = useContext(FirebaseContext);
    return firebase;
}
