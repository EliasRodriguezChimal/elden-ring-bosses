import { useEffect, useState } from 'react'; 
import { getBossById } from '../selectors/getBossById';

export const useFetchBossesById = (id) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
            getBossById(id)
                .then(boss => { 
                    setState({ 
                        data: boss,
                        loading: false
                    });
                });
        }, [id]);

    return state;
}