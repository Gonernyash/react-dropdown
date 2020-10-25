const importAll = (request) => request.keys().reduce((imagesObj, current) => {
    imagesObj[current] = request(current);
    return imagesObj
}, {});

const importImages = importAll(require.context("../images", false, /.*\.svg$/))

export default importImages;
