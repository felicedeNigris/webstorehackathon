$( document ).ready(function(){
  var products = [
  {
    name: "The Great Gatsby",
    category: "books",
    selling_points: ["Classic American Literature"],
    price: 15,
    picture_url: "https://images-na.ssl-images-amazon.com/images/I/51khWutZqCL._SX325_BO1,204,203,200_.jpg"
  },
  {
    name: "For Whom the Bell Tolls",
    category: "books",
    selling_points: ["Classic American Literature"],
    price: 18,
    picture_url: "http://routeduvin.typepad.com/photos/bookcovers/forwhomthebelltolls.jpg"
  },
  {
    name: "Backstreet Boys",
    category: "music",
    selling_points: ["Collector's Edition", "90's Pop"],
    price: 20,
    picture_url: "http://groundctrl.s3.amazonaws.com/clients/groundctrl/media/03/01/large.2st3t71n944c.jpg"
  },
  {
    name: "Fireworks, Katy Perry",
    category: "music",
    selling_points: ["Modern Pop", "Jim Jong Un"],
    price: 2,
    picture_url: "http://poponandon.com/wp-content/uploads/2010/10/Katy-Perry-Firework-Video.jpg"
  },
]
/*
function index(){
    for(var x in products){
      $('div.index').append("<div class=''>" + products[x].name + "<br><br>" + "<div class=''>" + products[x].price + "</div><br><hr><br>");
    };
  };
*/

function addToPage (obj) {
$('#book1 .name').text(obj.name);
$('#')
};

addToPage(products[0]);

})
