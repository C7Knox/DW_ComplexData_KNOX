//var qoutes = [
//    '"We don\'t make mistakes, just happy little accidents." - Bob Ross',
//    '"Creativity takes courage" - Henry Matisse'
//]

function Qoute(qouteTxt, author, tags, color) {
    this.qoute = qouteTxt;
//    this.title = title;
    this.author = author;
    this.tags = tags;
    this.color = color;
    this.display = function() {
        
        var container = $("<div>")
        this.tags.forEach(function(tag){
            container.addClass(tag);
        })
        container.css("background", this.color)
        container.addClass("qoute")
        
        var qouteString = "";
        qouteString += "<img src=" + this.qoute + ">";
//        qouteString += "<p>" + this.title + "</p>";
        qouteString += "<p>" + this.author + "</p>";
        container.html(qouteString)
        $(".qoutes").prepend(container)
    }
}

var qoutes = [
    new Qoute('imgs/pickled_film.jfif', "Pickled Film", ["All", "MixedMedia", "Tony-Conrad"], "#7D938A" ),
    new Qoute('imgs/Retrospective.jfif', '"Retrospective"', ["Sculpture", "Tony-Conrad", "All"], "#40916C" ),
    new Qoute('imgs/Necronom.jfif', "Necronom IV", ["ConceptArt", "Giger", "All"], "#52B788" ),
    new Qoute('imgs/Necronom_2.jfif', "Necronom Piece", ["ConceptArt", "Giger", "All"], "#74C69D" ),
    new Qoute('imgs/giger.jfif', "Necronom Piece", ["ConceptArt", "Giger", "All"], "#C27085" ),
    new Qoute('imgs/Dude_This_yours.jfif', "Dude is this yours, I think you\'ve dropped it back over there", ["ConceptArt", "Tomislav-Jagnjic", "All"], "#FFADAF" ),
    new Qoute('imgs/hey_Psst.jfif', "Hey psst, wanna buy some cubes", ["ConceptArt", "Tomislav-Jagnjic", "All"], "#EFD2D7" ),
    new Qoute('imgs/omelette.jfif', "Oh man, this is going to be the best omelette ever!", ["ConceptArt", "Tomislav-Jagnjic", "All"], "#16697A" ),
    new Qoute('imgs/YoBro.jfif', "Yo bro is it safe down there in the woods? Yeah man it\s cool", ["ConceptArt", "Tomislav-Jagnjic", "All"], "#489FB5" ),
    new Qoute('imgs/hes_not_here.jfif', "I told you he\'s not here, why would he hide behind our hut", ["ConceptArt", "Tomislav-Jagnjic", "All"], "#82c0cc" ),
]

//global taglist
var tagList = []
qoutes.forEach(function(qoute){
    qoute.display();
    qoute.tags.forEach(function(tag){
        //check if tags been added to taglist
        if(!tagList.includes(tag)) {
            //if not(!) added, add it
            tagList.push(tag);
            //makes a button for it
            $(".buttons").prepend("<button class='filter' id='" + tag +"'>" + tag + "</button>");
        }
    })
})
console.log(tagList);

$(".filter").on("click", function() {
    var tag = $(this).attr("id");
    console.log(tag);
    $("." + tag).fadeIn();
    $(".qoute").not("." + tag).hide();
    
    //removes class active to reset buttons to default
    $(".filter").removeClass("active");
    //adds active class so buttons turn pink when clicked
    $(this).addClass("active");
})

console.log("Credit of art goes to Tony Conrad, H.R.Giger, and Tomislav Jagnjic https://www.artstation.com/tomislav");

//tagList.forEach(function(tag) {
//    $(".buttons").prepend("<button>" + tag + "</button>")
//}) cleaner to put it above with the tagList push






