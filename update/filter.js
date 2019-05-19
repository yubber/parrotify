let stuff = Array.from(document.getElementsByTagName("img")).map( (e)=>{return e.src} )

let thing = [] // replace with current list of gifs

thing = stuff.filter( (e)=>thing.indexOf(e)==-1 )

copy(thing)
