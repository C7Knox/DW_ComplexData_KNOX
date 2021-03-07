//var qoutes = [
//    '"We don\'t make mistakes, just happy little accidents." - Bob Ross',
//    '"Creativity takes courage" - Henry Matisse'
//]

function Qoute(qouteTxt, author, tags, color) {
    this.qoute = qouteTxt;
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
        qouteString += "<p>" + this.qoute + "</p>";
        qouteString += "<cite>" + this.author + "</cite>";
        container.html(qouteString)
        $(".qoutes").prepend(container)
    }
}

var qoutes = [
    new Qoute('"We don\'t make mistakes, just happy little accidents."', "Bob Ross", ["painting", "mistakes"], "#0a3410"),
    new Qoute('"Creativity takes courage"', "Henry Matisse", ["painting", "creativity"], "lightblue"),
    new Qoute('"We the People"', "Michael Bay Scott", ["riot"], "orange" )
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
//tagList.forEach(function(tag) {
//    $(".buttons").prepend("<button>" + tag + "</button>")
//}) cleaner to put it above with the tagList push






