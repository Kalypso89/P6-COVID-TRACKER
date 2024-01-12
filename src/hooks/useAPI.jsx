import { useState, useEffect } from "react";
import { API_URL } from "../configuration/config";

export function useAPI ({ 
    endpoint,
    transformer = (state) => state,
    defaultValue = null
}) {
    const [state, setState] = useState(defaultValue);

    useEffect(() => {
        const myEndpoint = `${API_URL}${endpoint}`;
        fetch(myEndpoint)
            .then(request => request.json())
            .then(transformer)
            .then(state => setState(state));
    }, [setState]);

    return state;
}

