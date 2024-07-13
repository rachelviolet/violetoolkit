function percenter(pos, number) {
    // Grabs % of screen width/height.
    let results;
    switch (pos) {
        case "x":
            results = vw * (number / 100)
            break;
        case "y":
            results = vh * (number / 100)
            break;
        default:
            console.error(`${pos} is not valid position.`)
    }
    return results
}