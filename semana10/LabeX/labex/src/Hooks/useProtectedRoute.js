import { useEffect } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios'
export const useProtectedRoute = () => {
    const history = useHistory ();

    useEffect (() => {
        const token = localStorage.getItem("token");

        if (!token) {
            history.push('/')
        }
    }, [history]);
};

// export const useGetTrip = () => {
//     const [allTrip, setAlltrip] = useState([])
//     useEffect(() => {
//         axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/viviancosta-epps/trips")
//         .then((res) => {
//             setAlltrip(res.data.trips)
//         })
//         .catch((err) => {
//             console.log(err)
//         })

//     }, []) 
// }