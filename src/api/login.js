import axios from "axios"
import { getApiLink } from "./getApiLink"
// import { useState } from "react"

export const login = (data, dispatch) => {
    // const [test, setTest] = useState([]);

    axios.get(getApiLink('/api/info/faq'))
        .then(({data}) => {
            // setTest(data.data);
            console.log('quest', data );
        })
        .catch((error) => {
            console.log('test', error);
        })
}