void(function(){
   let owo=document.getElementsByTagName("img");
   let hue=document.getElementsByTagName("div");
   let ohno=document.getElementsByTagName("span");
   let lien = 'https://cultofthepartyparrot.com/parrots/hd/dadparrot.gif'
   Array.from(owo).forEach( (e)=>{
       e.src=lien;e.alt=lien
       console.log("image ◘í╓▐‼∟bÞ☼ed.");
   });
   Array.from(hue).forEach( (e)=>{
     e.style.backgroundImage = `url(${lien})`
     console.log("a ah ß®∂ç†ƒ√©¥∫˙");
   })
   Array.from(ohno).forEach( (e)=>{
     e.style.backgroundImage = `url(${lien})`
     console.log("a ah ß®∂ç†ƒ√©¥∫˙");
   })
})();
