export const getBossById = async (id = '') => {
    const url = `https://eldenring.fanapis.com/api/bosses/${id}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    if (id === '') return [];

    return {
        description: data.description,
        drops: data.drops,
        id: data.id,
        image: data.image,
        name: data.name,
        region: data.region
    }
}