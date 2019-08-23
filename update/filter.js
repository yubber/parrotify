let stuff = Array.from(document.getElementsByTagName("img")).map( (e)=>{return e.src} )

let thing = [] // replace with current list of gifs

thing = stuff.filter( (e)=>thing.indexOf(e)==-1 )

let neue = thing

function flitter(a,b){
  let c = Array.from(new Set([...a,...b]));
  c = c.filter( (e)=>e.includes("/assets/")===false)
  c = c.filter( (e)=>e.includes("flags")===false)
  return Array.from(c)
}
