void(function(){
   let owo=document.getElementsByTagName("img");
   let hue=document.getElementsByTagName("div");
   let ohno=document.getElementsByTagName("span");
   let uwu=["https://bit.ly/2RqrUoL",
       "parrots/hd/parrot.gif",
       "parrots/hd/opensourceparrot.gif",
       "parrots/hd/middleparrot.gif",
       "parrots/hd/rightparrot.gif",
       "parrots/aussieparrot.gif",
       "parrots/gothparrot.gif",
       "parrots/oldtimeyparrot.gif",
       "parrots/boredparrot.gif",
       "parrots/hd/shuffleparrot.gif",
       "parrots/shufflefurtherparrot.gif",
       "parrots/hd/congaparrot.gif",
       "parrots/reversecongaparrot.gif",
       "parrots/hd/partyparrot.gif",
       "parrots/hd/sadparrot.gif",
       "parrots/parrotcop.gif",
       "parrots/hd/fastparrot.gif",
       "parrots/hd/ultrafastparrot.gif",
       "parrots/slowparrot.gif",
       "parrots/slomoparrot.gif",
       "parrots/parrotdad.gif",
       "parrots/hd/dealwithitparrot.gif",
       "parrots/fiestaparrot.gif",
       "parrots/pizzaparrot.gif",
       "parrots/hamburgerparrot.gif",
       "parrots/bananaparrot.gif",
       "parrots/chillparrot.gif",
       "parrots/explodyparrot.gif",
       "parrots/shufflepartyparrot.gif",
       "parrots/ice-cream-parrot.gif",
       "parrots/sassyparrot.gif",
       "parrots/confusedparrot.gif",
       "parrots/aussiecongaparrot.gif",
       "parrots/aussiereversecongaparrot.gif",
       "parrots/parrotwave1.gif",
       "parrots/parrotwave2.gif",
       "parrots/parrotwave3.gif",
       "parrots/parrotwave4.gif",
       "parrots/parrotwave5.gif",
       "parrots/parrotwave6.gif",
       "parrots/parrotwave7.gif",
       "parrots/hd/congapartyparrot.gif",
       "parrots/moonwalkingparrot.gif",
       "parrots/thumbsupparrot.gif",
       "parrots/coffeeparrot.gif",
       "parrots/hd/mustacheparrot.gif",
       "parrots/hd/christmasparrot.gif",
       "parrots/hd/sleepingparrot.gif",
       "parrots/parrotbeer.gif",
       "parrots/darkbeerparrot.gif",
       "parrots/blondesassyparrot.gif",
       "parrots/bluescluesparrot.gif",
       "parrots/hd/gentlemanparrot.gif",
       "parrots/margaritaparrot.gif",
       "parrots/dreidelparrot.gif",
       "parrots/harrypotterparrot.gif",
       "parrots/upvotepartyparrot.gif",
       "parrots/twinsparrot.gif",
       "parrots/tripletsparrot.gif",
       "parrots/stableparrot.gif",
       "parrots/shipitparrot.gif",
       "parrots/skiparrot.gif",
       "parrots/loveparrot.gif",
       "parrots/halalparrot.gif",
       "parrots/hd/wendyparrot.gif",
       "parrots/hd/popcornparrot.gif",
       "parrots/hd/donutparrot.gif",
       "parrots/evilparrot.gif",
       "parrots/hd/discoparrot.gif",
       "parrots/matrixparrot.gif",
       "parrots/papalparrot.gif",
       "parrots/stalkerparrot.gif",
       "parrots/hd/scienceparrot.gif",
       "parrots/hd/prideparrot.gif",
       "parrots/hd/revolutionparrot.gif",
       "parrots/fidgetparrot.gif",
       "parrots/hd/beretparrot.gif",
       "parrots/tacoparrot.gif",
       "parrots/ryangoslingparrot.gif",
       "parrots/luckyparrot.gif",
       "parrots/hd/birthdaypartyparrot.gif",
       "parrots/hd/jediparrot.gif",
       "parrots/hd/sithparrot.gif",
       "parrots/angryparrot.gif",
       "parrots/invisibleparrot.gif",
       "parrots/rotatingparrot.gif",
       "parrots/cryptoparrot.gif",
       "parrots/hd/sushiparrot.gif",
       "parrots/hd/pumpkinparrot.gif",
       "parrots/hd/angelparrot.gif",
       "parrots/hd/bluntparrot.gif",
       "parrots/hd/sintparrot.gif",
       "parrots/hd/pirateparrot.gif",
       "parrots/hd/ceilingparrot.gif",
       "parrots/hd/mardigrasparrot.gif",
       "parrots/sovjetparrot.gif",
       "parrots/portalparrot.gif",
       "parrots/hd/hardhatparrot.gif",
       "parrots/hd/flyingmoneyparrot.gif",
       "parrots/portalorangeparrot.gif",
       "parrots/portalblueparrot.gif",
       "parrots/hd/bunnyparrot.gif",
       "parrots/hd/norwegianblueparrot.gif",
       "parrots/hd/transparront.gif",
       "parrots/fixparrot.gif",
       "parrots/brazilianplayerparrot.gif",
       "parrots/brazilianfanparrot.gif",
       "parrots/hd/marshmallowparrot.gif",
       "parrots/hd/whitewalkerparrot.gif",
       "parrots/hd/trans-parrot.gif",
       "parrots/hd/calvinist_parrot.gif",
       "guests/nyanparrot.gif",
       "guests/oriolesparrot.gif",
       "guests/hd/capsparrot.gif",
       "guests/fieriparrot.gif",
       "guests/witnessprotectionparrot.gif",
       "guests/hd/party-wizard.gif",
       "guests/partyowl.gif",
       "guests/hd/parrotpoop.gif",
       "guests/catparrot.gif",
       "guests/hd/trollparrot.gif",
       "guests/dogeparrot.gif",
       "guests/congadoge.gif",
       "guests/hd/partygopher.gif",
       "guests/hd/stubparrot.gif"
     ];
   let lien;
   Array.from(owo).forEach( (e)=>{
       lien = uwu[Math.floor(Math.random(0,uwu.length-1)*6969)%uwu.length];
       if (lien.includes(".gif")){
         lien = "https://cultofthepartyparrot.com/" + lien
       }
       e.src=lien;e.alt=lien
       console.log("image ◘í╓▐‼∟bÞ☼ed.");
   });
   Array.from(hue).forEach( (e)=>{
     lien = uwu[Math.floor(Math.random(0,uwu.length-1)*6969)%uwu.length];
     if (lien.includes(".gif")){
         lien = "https://cultofthepartyparrot.com/" + lien
      }
     e.style.backgroundImage = `url(${lien})`
     console.log("a ah ß®∂ç†ƒ√©¥∫˙");
   })
   Array.from(ohno).forEach( (e)=>{
     lien = uwu[Math.floor(Math.random(0,uwu.length-1)*6969)%uwu.length];
     if (lien.includes(".gif")){
         lien = "https://cultofthepartyparrot.com/" + lien
      }
     e.style.backgroundImage = `url(${lien})`
     console.log("a ah ß®∂ç†ƒ√©¥∫˙");
   })
})();
