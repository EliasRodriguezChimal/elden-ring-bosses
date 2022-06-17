export const getBossByRegion = async (region) => {
    const url = `https://eldenring.fanapis.com/api/bosses?limit=100`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    if (region === '') return [];

    const bosses = data.filter(boss => {
        if (boss.region === region) {
            return {
                description: boss.description,
                drops: boss.drops,
                id: boss.id,
                image: boss.image,
                name: boss.name,
                region: boss.region
            }
        }
    })

    return bosses;
}