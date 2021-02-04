function omitPrivate(doc, obj) {
    delete obj.__v
    delete obj._id
    return obj
}

let options = {
    toJSON: {
        transform: omitPrivate
    }
};

export default options