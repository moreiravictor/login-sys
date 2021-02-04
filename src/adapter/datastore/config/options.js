function omitPrivate(doc, obj) {
    delete obj.__v
    return obj
}

let options = {
    toJSON: {
        transform: omitPrivate
    }
};

export default options