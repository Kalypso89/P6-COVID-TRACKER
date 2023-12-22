import { useState } from "react"
import { useEffect } from "react"
import API_URL from "config.js"

export function useTotalStatistics () {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const myEndpoint = `${API_URL}all`;
        fetch(myEndpoint)
            .then(request => request.json())
            .then(json => {
                setTestimonials(json.data.slice(0,10))
            })
    }, [setTestimonials]);

    return testimonials;
}

