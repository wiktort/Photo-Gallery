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



const codesGeneretor = (codeLength=15) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz0123456789_';

    return [...Array(codeLength)].reduce(acc => {
        const index = Math.floor(Math.random() * chars.length);
        return acc += chars[index];
    },"");
};

export { createURL, codesGeneretor };

