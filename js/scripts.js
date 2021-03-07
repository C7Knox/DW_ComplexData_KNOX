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
            $(".buttons").prepend("<button>" + tag + "</button>")
        })
        container.css("background", this.color)
        
        var qouteString = "";
        qouteString += "<p>" + this.qoute + "</p>";
        qouteString += "<cite>" + this.author + "</cite>";
        container.html(qouteString)
        $(".qoutes").prepend(container)
    }
}

var qoutes = [
    new Qoute('"We don\'t make mistakes, just happy little accidents."', "Bob Ross", ["painting", "mistakes"], "#0a3410"),
    new Qoute('"Creativity takes courage"', "Henry Matisse", ["painting", "creativity"], "lightblue")
    ]

qoutes.forEach(function(qoute){
    qoute.display();
})
//qoute1.display();
//qoute2.display();
