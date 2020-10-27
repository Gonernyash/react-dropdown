class ImportImages {
    constructor() {
        this.list = this.import(require.context("../images", false, /.*\.svg$/))
    }

    import(request) {
        const result = request.keys().reduce((imagesObj, current) => {
            imagesObj[current] = request(current);
            return imagesObj
        }, {});
        return result
    }

    getKey(value) {
        for (let key in this.list) {
            if (this.list[key] === value) return key
        }
    }
}

export default new ImportImages();
