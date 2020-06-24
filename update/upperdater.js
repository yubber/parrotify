// i could theoretically automate the entire updating process but my magic is not potent enough

// yaml dicts of interest are guests & parrots (leaving out flags but you can include them)
// get JS object conversions of each from http://nodeca.github.io/js-yaml/ then

let birbs = [] // paste it here

copy(birbs.map((e)=>{
    if (e.hd !== undefined){ // `"hd" in e` would be much safer, but we aren't working w undefined
        return e.hd
    } else {return e.gif}
}))

// a list of the new links is in your clipboard
