const mapArrToString = (arr) => {
    return arr
        .filter((e) => Number.isInteger(e))
        .map(String)
}

module.exports = mapArrToString
