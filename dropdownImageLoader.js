const importAll = (i) => i.keys().map(i);
const getId = (img) => {
    img = img.slice(14);
    img = img.slice(0, -13);
    return img + ".svg"
}

let importImages = {};
importAll(require.context("./flags", false, /.*\.svg$/))
.forEach((val) => importImages[getId(val)] = val);

export default importImages;
