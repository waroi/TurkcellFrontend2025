import React from 'react'
import {fetchTime} from "../services/service";
const Time = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const fetch = await fetchTime("balikesir");
                setData(fetch);
                console.log(fetch);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    return (
        <div>Time</div>
    )
}

export default Time;