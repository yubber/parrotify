// RUN THIS ON cultofthepartyparrot.com

let stuff = Array.from(document.getElementsByTagName("img")).map( (e)=>{return e.src} )

let thing = [] // replace with current list of gifs

thing = stuff.filter( (e)=>thing.indexOf(e)==-1 )

let neue = thing

function flitter(a,b){ // call copy(flitter(stuff, thing))
  let c = Array.from(new Set([...a,...b]));
  c = c.filter( (e)=>e.includes("/assets/")||e.includes("flags")||e.includes("/still/")===false)
  return Array.from(c)
}
