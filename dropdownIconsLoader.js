class ImportIcons {
    constructor() {
        this.list = this.import(require.context("./icons", false, /.*\.svg$/))
    }

    import(request) {
        const result = request.keys().reduce((iconsObj, current) => {
            iconsObj[current] = request(current);
            return iconsObj
        }, {});
        return result
    }

    getKey(value) {
        for (let key in this.list) {
            if (this.list[key] === value) return key
        }
    }
}

export default new ImportIcons();
