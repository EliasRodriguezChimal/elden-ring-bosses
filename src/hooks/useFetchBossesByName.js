import { useEffect, useState } from 'react'; 
import { getBossByName } from '../selectors/getBossByName';

export const useFetchBossesByName = (name) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
            getBossByName(name)
                .then(bosses => { 
                    setState({ 
                        data: bosses,
                        loading: false
                    });
                });
        }, [name]);

    return state;
}