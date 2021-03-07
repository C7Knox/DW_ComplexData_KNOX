//var qoutes = [
//    '"We don\'t make mistakes, just happy little accidents." - Bob Ross',
//    '"Creativity takes courage" - Henry Matisse'
//]

var qoute1 = {
    qoute: '"We don\'t make mistakes, just happy little accidents."',
    author: "Bob Ross",
    tags: ["painting", "mistakes"],
    color: "#0a3410",
    display: function() {
        var qouteString = "";
    qouteString += "<div style='background:" + this.color + "'>";
    qouteString += "<p>" + this.qoute + "</p>";
    qouteString += "<cite>" + this.author + "</cite>";
    qouteString += "</div>";
    $("body").prepend(qouteString)
    }
}

qoute1.display();



console.log(qoute1.qoute); 

//var qouteString = "";
//qoutes.forEach(function(qoute){
//    
//    
//    qouteString += "<p>" + qoute + "</p>"
//    
//    console.log(qouteString);
//});
//
//$("body").html(qouteString);