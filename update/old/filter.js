// RUN THIS ON cultofthepartyparrot.com

let stuff = Array.from(document.getElementsByTagName("img")).map( (e)=>{return e.src} )

let thing = [] // replace with current list of gifs

thing = stuff.filter( (e)=>thing.indexOf(e)==-1 )

function flitter(a,b){
  let c = Array.from(new Set([...a,...b]));
  c = c.filter( (e)=>e.includes("/assets/")===false||e.includes("flags")===false||e.includes("/still/")===false)
  return Array.from(c)
}

// now run:
// copy(flitter(stuff, thing))
