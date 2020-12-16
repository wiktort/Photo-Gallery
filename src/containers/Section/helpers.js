import config from '../../config/config';
import settings from './global';


const createNewPath = (slug, page, order) => {
    const { perPage } = settings;
    const regexp = new RegExp(':slug');
    const newID = settings.path.replace(regexp, slug);

    const withParams = `${newID}/?per_page=${perPage}&&page=${page}&&order_by=${order}`;

    return withParams;
}

const createURL = (slug, page, order) => {
    const url = config.unsplash.UNSPLASH_BASE_URL;
    return url + createNewPath(slug, page, order);
}



const codesGeneretor = (codeLength=15) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz0123456789_';

    return [...Array(codeLength)].reduce(acc => {
        const index = Math.floor(Math.random() * chars.length);
        return acc += chars[index];
    },"");
};

export { createURL, codesGeneretor };

