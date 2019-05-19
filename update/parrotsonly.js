function flitter(a,b){
  let c = Array.from(new Set([...a,...b]));
  c = c.filter( (e)=>e.includes("/assets/")===false)
  c = c.filter( (e)=>e.includes("flags")===false)
  return Array.from(c)
}
