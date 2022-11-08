
const beatleObj = (name, beatles) => {
    let nombre = name.join(' ').split('%20').join(' ');
    let beatle = beatles.find(e => e.name === nombre);
    return beatle;
}

module.exports = {
    beatleObj
}