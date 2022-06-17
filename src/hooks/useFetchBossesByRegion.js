import { useEffect, useState } from 'react'; 
import { getBossByRegion } from '../selectors/getBossByRegion';

export const useFetchBossesByRegion = (region) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
            getBossByRegion(region)
                .then(bosses => { 
                    setState({ 
                        data: bosses,
                        loading: false
                    });
                });
        }, [region]);

    return state;
}