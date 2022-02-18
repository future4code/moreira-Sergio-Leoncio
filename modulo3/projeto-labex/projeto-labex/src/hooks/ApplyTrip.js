import { useEffect, useState } from "react";
import axios from "axios";

const ApplyTrip = (url, initialState) => {
    const [data, setData] = useState(initialState)   
    
    useEffect(() => {
        axios
            .post(url)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    },[url])

    return data
}
export default ApplyTrip;