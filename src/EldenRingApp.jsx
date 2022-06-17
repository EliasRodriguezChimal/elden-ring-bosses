import { AppRouter } from './router/AppRouter';

export const EldenRingApp = () => {

    const datos = [50,32,16, 84, 91, 47, 64, 28, 07, 72];
    const n = 10;
    let v=0, m=0;
    for (let index = 0; index < n-1; index++) {
        m=m+datos[index];
        
    }

    console.log(m);

    return (
        <AppRouter />
    )
}
