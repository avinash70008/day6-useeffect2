import { useEffect, useState } from "react"

export const Timer = () => {
    const [time, setTime] = useState(0);

    const endTime = 11;

    useEffect(() => {
        const id = setInterval(() => {
           // console.log("hello", time);
            setTime((prev) => {
                if (prev >= endTime) {
                    clearInterval(id);
                    return 0;
                }
                return prev + 1;
            });
        }, 1000);
        return () => {
            clearInterval(id);
            //console.log("stop")
        };
    },[])
    return (
        <div>Timer:{ time}</div>
    )
}