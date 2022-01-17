let divs = document.getElementsByTagName("div")
let spans = document.getElementsByTagName("span")
let birbs = [
    "hd/parrot.gif",
    "hd/opensourceparrot.gif",
    "hd/middleparrot.gif",
    "hd/reverseparrot.gif",
    "hd/aussieparrot.gif",
    "hd/gothparrot.gif",
    "oldtimeyparrot.gif",
    "hd/boredparrot.gif",
    "hd/shuffleparrot.gif",
    "shufflefurtherparrot.gif",
    "hd/congaparrot.gif",
    "hd/reversecongaparrot.gif",
    "hd/partyparrot.gif",
    "hd/sadparrot.gif",
    "hd/copparrot.gif",
    "hd/fastparrot.gif",
    "hd/ultrafastparrot.gif",
    "hd/slowparrot.gif",
    "slomoparrot.gif",
    "hd/dadparrot.gif",
    "hd/dealwithitparrot.gif",
    "hd/dealwithitnowparrot.gif",
    "fiestaparrot.gif",
    "pizzaparrot.gif",
    "hamburgerparrot.gif",
    "bananaparrot.gif",
    "chillparrot.gif",
    "explodyparrot.gif",
    "shufflepartyparrot.gif",
    "icecreamparrot.gif",
    "hd/sassyparrot.gif",
    "hd/confusedparrot.gif",
    "hd/aussiecongaparrot.gif",
    "hd/aussiereversecongaparrot.gif",
    "wave1parrot.gif",
    "wave2parrot.gif",
    "wave3parrot.gif",
    "wave4parrot.gif",
    "wave5parrot.gif",
    "wave6parrot.gif",
    "wave7parrot.gif",
    "wave8parrot.gif",
    "wave9parrot.gif",
    "hd/congapartyparrot.gif",
    "hd/moonwalkingparrot.gif",
    "hd/thumbsupparrot.gif",
    "coffeeparrot.gif",
    "hd/mustacheparrot.gif",
    "hd/christmasparrot.gif",
    "hd/sleepingparrot.gif",
    "hd/beerparrot.gif",
    "darkbeerparrot.gif",
    "blondesassyparrot.gif",
    "bluescluesparrot.gif",
    "hd/gentlemanparrot.gif",
    "margaritaparrot.gif",
    "dreidelparrot.gif",
    "harrypotterparrot.gif",
    "upvoteparrot.gif",
    "hd/twinsparrot.gif",
    "tripletsparrot.gif",
    "hd/stableparrot.gif",
    "shipitparrot.gif",
    "skiparrot.gif",
    "loveparrot.gif",
    "halalparrot.gif",
    "hd/wendyparrot.gif",
    "hd/popcornparrot.gif",
    "hd/donutparrot.gif",
    "hd/evilparrot.gif",
    "hd/discoparrot.gif",
    "matrixparrot.gif",
    "papalparrot.gif",
    "stalkerparrot.gif",
    "hd/scienceparrot.gif",
    "hd/revolutionparrot.gif",
    "fidgetparrot.gif",
    "hd/beretparrot.gif",
    "tacoparrot.gif",
    "ryangoslingparrot.gif",
    "luckyparrot.gif",
    "hd/birthdaypartyparrot.gif",
    "hd/jediparrot.gif",
    "hd/sithparrot.gif",
    "hd/angryparrot.gif",
    "hd/invisibleparrot.gif",
    "fadingparrot.gif",
    "rotatingparrot.gif",
    "cryptoparrot.gif",
    "hd/sushiparrot.gif",
    "hd/pumpkinparrot.gif",
    "hd/angelparrot.gif",
    "hd/bluntparrot.gif",
    "hd/sintparrot.gif",
    "hd/pirateparrot.gif",
    "hd/ceilingparrot.gif",
    "hd/mardigrasparrot.gif",
    "sovjetparrot.gif",
    "portalparrot.gif",
    "hd/hardhatparrot.gif",
    "hd/flyingmoneyparrot.gif",
    "hd/portalorangeparrot.gif",
    "hd/portalblueparrot.gif",
    "hd/reverseportalorangeparrot.gif",
    "hd/reverseportalblueparrot.gif",
    "hd/bunnyparrot.gif",
    "hd/norwegianblueparrot.gif",
    "hd/transparront.gif",
    "fixparrot.gif",
    "hd/brazilianplayerparrot.gif",
    "hd/brazilianfanparrot.gif",
    "hd/spyparrot.gif",
    "hd/marshmallowparrot.gif",
    "hd/whitewalkerparrot.gif",
    "hd/calvinist_parrot.gif",
    "hd/frenchparrot.gif",
    "hd/githubparrot.gif",
    "hd/bootlegparrot.gif",
    "hd/bikerparrot.gif",
    "hd/inverseparrot.gif",
    "hd/pingpongparrot.gif",
    "hd/laptop_parrot.gif",
    "hd/60fpsparrot.gif",
    "hd/redhatparrot.gif",
    "hd/footballparrot.gif",
    "hd/flowerparrot.gif",
    "hd/parrotnotfound.gif",
    "hd/spinningparrot.gif",
    "hd/redenvelopeparrot.gif",
    "hd/grouchoparrot.gif",
    "hd/chicoparrot.gif",
    "hd/harpoparrot.gif",
    "schnitzelparrot.gif",
    "hd/vikingparrot.gif",
    "hd/darkmodeparrot.gif",
    "hd/tiedyeparrot.gif",
    "hd/horizontalparrot.gif",
    "hd/sherlockholmesparrot.gif",
    "hd/tennisparrot.gif",
    "hd/originalparrot.gif",
    "hd/bobaparrot.gif",
    "hd/backwardsparrot.gif",
    "ripparrot.gif",
    "hd/shortparrot.gif",
    "hd/headsetparrot.gif",
    "hd/bouncingparrot.gif",
    "hd/levitationparrot.gif",
    "hd/verticalparrot.gif",
    "databaseparrot.gif",
    "hd/phparrot.gif",
    "mergedparrot.gif",
    "braveheartparrot.gif",
    "hd/maracasparrot.gif",
    "bobrossparrot.gif",
    "hd/yosemitesamparrot.gif",
    "hd/illuminatiparrot.gif",
    "hd/michaeljacksonparrot.gif",
    "hd/picassoparrot.gif",
    "hd/headingparrot.gif",
    "hd/innersourceparrot.gif",
    "asyncparrot.gif",
    "hd/meldparrot.gif",
    "hd/docparrot.gif",
    "hd/rythmicalparrot.gif",
    "exceptionallyfastparrot.gif",
    "hd/wfhparrot.gif",
    "hd/covid19parrot.gif",
    "metalparrot.gif",
    "hd/wineparrot.gif",
    "hd/hypnoparrot.gif",
    "hd/hypnoparrotdark.gif",
    "hd/hypnoparrotlight.gif",
    "hd/everythingsfineparrot.gif",
    "hd/headbangingparrot.gif",
    "hd/tpparrot.gif",
    "hd/stayhomeparrot.gif",
    "hd/stayhomeparrotcloser.gif",
    "hd/stayhomeparrotwindow.gif",
    "hd/staytfhomeparrot.gif",
    "hd/rubyparrot.gif",
    "hd/moonparrot.gif",
    "hd/hmmparrot.gif",
    "hd/nodeparrot.gif",
    "hd/hanamiparrot.gif",
    "revertitparrot.gif",
    "hd/daftpunkparrot.gif",
    "hd/zoukparrot.gif",
    "hd/glimpseparrot.gif",
    "hd/dailyparrot.gif",
    "hd/quadparrot.gif",
    "dabparrot.gif",
    "hd/jumpingparrot.gif",
    "hd/jumpingparrotjr.gif",
    "hd/pokeparrot.gif",
    "hd/cakeparrot.gif",
    "unicornparrot.gif",
    "hd/thefastestparrot.gif",
    "hd/playcatchleftparrot.gif",
    "hd/playcatchrightparrot.gif",
    "hd/biparrot.gif",
    "hd/imposterparrot.gif",
    "hd/kindasusparrot.gif",
    "chefparrot.gif",
    "hd/turndownforwatchparrot.gif",
    "pear-parrots.gif",
    "hd/tinfoilhatparrot.gif",
    "hd/mateparrot.gif",
    "hd/ethparrot.gif",
    "hd/sneezyparrot.gif",
    "hd/accessibleparrot.gif",
    "pythonparrot.gif",
    "hd/redbullparrot.gif",
    "hd/vueparrot.gif",
    "hd/sidewaysparrot.gif",
    "hd/raceconditionparrot.gif",
    "hd/balconyparrot.gif",
    "hd/zombieparrot.gif",
    "hd/mergeconflictparrot.gif",
    "hd/vaccineparrot.gif",
    "hd/thankyouparrot.gif",
    "hd/astronautparrot.gif",
    "hd/autonomousparrot.gif",
    "hd/boomparrot.gif",
    "hd/maskparrot.gif",
]
let guests = ['hd/nyanparrot.gif', 'oriolesparrot.gif', 'hd/capsparrot.gif', 'hd/partyfieri.gif', 'hd/witnessprotectionparrot.gif', 'hd/party-wizard.gif', 'partyowl.gif', 'hd/parrotpoop.gif', 'catparrot.gif', 'hd/trollparrot.gif', 'hd/dogeparrot.gif', 'congadoge.gif', 'hd/partygopher.gif', 'hd/stubparrot.gif', 'hd/party-k8s.gif', 'hd/partycage.gif', 'hd/batparrot.gif', 'hd/partysloth.gif', 'hd/partyblob.gif', 'hd/partygritty.gif', 'hd/cryingjordanparrot.gif', 'hd/partykeanu.gif', 'hd/partygeeko.gif', 'hd/bugparrot.gif', 'hd/partyblobcat.gif', 'cursedparrot.gif', 'hd/partyannoyedbird.gif', 'hd/preetjusticeparrot.gif', 'hd/partywumpus.gif', 'hd/thisisfineparrot.gif', 'threadparrot.gif', 'thegrokeparrot.gif', 'hd/partygfm.gif', 'hd/partyfsjal.gif', 'hd/vibepartycat.gif', 'hd/partypicard.gif', 'partyrocket.gif', 'hd/discoduck.gif'
] // add lists you copied. parrots in birbs, guests in guests
let hatraffle = () => `https://cultofthepartyparrot.com/${Math.random()<0.5 ?
    "parrots/" + birbs[Math.floor(Math.random()*999)%birbs.length] :
    "guests/" + guests[Math.floor(Math.random()*999)%guests.length]
}`
Array.from(document.getElementsByTagName("img")).forEach( (e)=>{
    e.src = e.alt = hatraffle()
});
Array.from(divs).concat(Array.from(spans)).forEach( (e)=>{
    e.style.backgroundImage = `url(${hatraffle()})`
})
