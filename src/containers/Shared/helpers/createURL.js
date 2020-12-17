import config from '../../../config/config';

const paramsSettings = {
    order: "order_by=",
    page: "page=",
    perPage: "per_page="
};

const addParams = ({perPage, page, order}, path) => {
    const base = (perPage || page || order ? '/?' : "");
    const withParams = path + base +
    (perPage ? `${paramsSettings.perPage}${perPage}&&` : "") +
    (page ? `${paramsSettings.page}${page}&&` : "") +
    (order ? `${paramsSettings.order}${order}` : "");
    
    return withParams;
};

const createNewPath = ({id, slug, params, path, isSection}) => {
    
    const _slug = [[id, ':id'],[slug, ':slug']][Number(isSection)];
    const regexp = new RegExp(_slug[1]);
    const tempPath = path.replace(regexp, _slug[0]);

    const newPath = isSection 
    ? addParams(params, tempPath)
    : tempPath;

    return newPath;
};

export const createURL = (data) => {
    const url = config.unsplash.UNSPLASH_BASE_URL;
    return url + createNewPath(data);
};