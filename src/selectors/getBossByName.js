export const getBossByName = async (name = '') => {
    const url = `https://eldenring.fanapis.com/api/bosses?name=${name}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    if (name === '') return [];

    const bosses = data.map(boss => {
        return {
            description: boss.description,
            drops: boss.drops,
            id: boss.id,
            image: boss.image,
            name: boss.name,
            region: boss.region
        }
    })

    return bosses;
}