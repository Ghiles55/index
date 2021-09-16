var main = document.getElementsByClassName("main");
var cart = document.querySelector("#cart");
var delete_card = document.querySelectorAll(".delete_card");
document.addEventListener("click", (e) => {
  if (e.target.matches(".delete_card")) {
    e.target.parentNode.parentNode.parentNode.remove();
  }
});

var cards = cart.querySelectorAll(".item_cards");
cards.forEach(cardselect);

function cardselect(element) {
  var card = element;
  var cardprice = card.querySelector(".card_price");
  var pricevalue = card.querySelector(".price_value").innerHTML;
  var select = card.querySelector(".item_select").innerHTML;
  card.addEventListener("click", (e) => {
    if (e.target.matches(".Plus_btn")) {
      select = parseInt(select, 10);
      select = select + 1;
      var newSelect = card.querySelector(".item_select");
      newSelect.innerHTML = select;
      pricevalue = parseInt(pricevalue, 10);
      var totalprice = select * pricevalue;
      cardprice.innerHTML = totalprice;
    } else if (e.target.matches(".Minus_btn") && select > 0) {
      select = parseInt(select, 10);
      select = select - 1;
      var newSelect = card.querySelector(".item_select");
      newSelect.innerHTML = select;
      pricevalue = parseInt(pricevalue, 10);
      var totalprice = select * pricevalue;
      cardprice.innerHTML = totalprice;
    }
  });
}
document.addEventListener("click", (e) => {
  var cardprices = document.querySelectorAll(".card_price");
  var cardarray = [];
  var totalcount = document.querySelector("#total_count");
  for (var i = 0; i < cardprices.length; i++) {
    var cardtotal = cardprices[i].innerHTML;
    cardtotal = parseInt(cardtotal, 10);
    cardarray.push(cardtotal);
  }
  var sum = cardarray.reduce((a, b) => a + b, 0);
  totalcount.innerHTML = "  " + sum + "$";
  if (
    cardarray.length == 0 &&
    document.querySelectorAll(".emptydiv").length == 0
  ) {
    var emptydiv = document.createElement("div");
    emptydiv.setAttribute("class", "emptydiv");
    cart.insertBefore(emptydiv, cart.childNodes[2]);
    var emptymessage = document.createElement("span");
    emptymessage.innerText = "Your Cart Is Empty";
    emptymessage.setAttribute("id", "emptymessage");
    emptydiv.append(emptymessage);
  }
});
const hearts = document.querySelectorAll(".heart");
console.log(hearts);
hearts.forEach(setHeartColor);

function setHeartColor(element) {
  element.addEventListener("click", () => {
    if (element.getAttribute("src") == "heart (1).svg") {
      element.removeAttribute("src");
      element.setAttribute("src", "heart.svg");
    } else {
      element.removeAttribute("src");
      element.setAttribute("src", "heart (1).svg");
    }
  });
}
