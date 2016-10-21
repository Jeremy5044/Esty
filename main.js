
console.log(data);

var results = data.results

console.log(results)

results.forEach(renderInput);

function renderInput (object) {
	console.log(object)

  var img_url = object.Images[0].url_170x135
  var title= object.title;
  var price= object.price;
  var url=object.url;
  var shopName=object.Shop.shop_name;

	var html = `
    <div class="box1">

    <div>
    <div class="hambox">
    <a href="${url}"> <div class= "pic"><img class="ham" src ="./images/hamburger.png"></a> </div>
    <div class="pic2"><img class="ham2"src="./images/heart.png"></div>
    </div>
    <a href="${url}"><img src= "${img_url}"></a>

    <div class="box2">
      <a href="${url}"><div class="title"> ${title}</div></a>
       
    <div class="float">
    <div class="shop">${shopName}
    <div class= "move">
    <span class="money"> $${price}</span>
     
    </div>
    </div>
    	
     </div>`;

	$(".box").append(html);
}

// renderInput()
// function title(top){
// console.log(top)

// var html = `
// <h3 class="top">Top categories for “whiskey”
//                     </h3>`;
// $(".tit")

// }