import config from '../../config/config';

const data = {
        path: "/topics/:slug/photos",
        perPage: "20",
};


const createNewPath = (slug, page) => {
    const regexp = new RegExp(':slug');
 
    const newID = data.path.replace(regexp, slug);

    const perPage = `${newID}/?per_page=${data.perPage}&&page=${page}`;

    return perPage;
}

const createURL = (slug, page) => {
    const url = config.unsplash.UNSPLASH_BASE_URL;
    return url + createNewPath(slug, page);
}





const codesGeneretor = () => {
    const chars = 'ABCDEFGIJK0123456789';

    const codesNumber = 1000;
    const charsNumber = 12;

    let code = "";

    for (let i = 0; i < codesNumber; i++) {
        for (let i = 0; i < charsNumber; i++) {
        const index = Math.floor(Math.random() * 20)
        code += chars[index];
        }
    }
    return code;
}

export { createURL, codesGeneretor };