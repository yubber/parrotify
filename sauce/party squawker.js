void(function(){
    let base = "https://cultofthepartyparrot.com/parrots/"
    let imgs = document.getElementsByTagName("img")
    let divs = document.getElementsByTagName("div")
    let spans = document.getElementsByTagName("span")
    let birbs = [].sort(()=>Math.random()-0.5) // add list you copied. this randomly sorts the arr
    let lien;
    Array.from(imgs).forEach( (e)=>{
        // if ("://" in birbs[lien]){e.src = birbs[lien]} // uncomment these lines if you want to add custom images
        // else {
            e.src = base + birbs[lien]
        // }
        e.alt = birbs[lien]
        lien += 1
    });
    Array.from(divs).concat(Array.from(spans)).forEach( (e)=>{
        // e.style.backgroundImage = `url(${"://" in birbs[lien] ? base : ""}${birbs[lien]})` // uncomment for custom imgs
        e.style.backgroundImage = `url(${base}${birbs[lien]})`
        lien += 1
    })
})
