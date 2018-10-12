filterSelection("all")
function filterSelection(filter) {
  var x, i;
  x = document.getElementsByClassName("card");
  if (filter == "all") filter = "";
  for (i = 0; i < x.length; i++) {
    removeProduct(x[i], "show");
    if (x[i].className.indexOf(filter) > -1) addProduct(x[i], "show");
  }
}

function addProduct(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeProduct(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


var itemCount = 0;
var priceTotal = 0;

$('.add').click(function (){
  itemCount ++;

  $('#itemCount').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem">Remove Item</button>');

  var price = parseInt($(this).siblings().find('.price').text()); 
  priceTotal += price;
  $('#cartTotal').text("Total Price: LE " + priceTotal);
}); 

$('.openCloseCart').click(function(){
  $('#shoppingCart').toggle();
});

$('#emptyCart').click(function() {
  itemCount = 0;
  priceTotal = 0;

  $('#itemCount').css('display', 'none');
  $('#cartItems').text('');
  $('#cartTotal').text("Total: LE " + priceTotal);
}); 

$('#shoppingCart').on('click', '.removeItem', function(){
  $(this).parent().remove();  
  itemCount --;
  $('#itemCount').text(itemCount);

  var price = parseInt($(this).siblings().find('.price').text());
  priceTotal -= price;
  $('#cartTotal').text("Total: LE " + priceTotal);

  if (itemCount == 0) {
    $('#itemCount').css('display', 'none');
  }
});


var username = document.forms['myForm']['Name'];
var pw = document.forms['myForm']['PW'];
var name_error = document.getElementById('name_error');
var pw_error = document.getElementById('pw_error');

username.addEventListener('blur', nameVerify, true);
pw.addEventListener('blur', pwVerify, true);

function validate()
      {


         if( document.myForm.Name.value == "" )
         {
            username.style.border = "2px solid red";
            document.getElementById('username_div').style.color = "red";
            name_error.textContent = 'username is required';
            document.myForm.Name.focus() ;
            return false;
         }

         
         if( document.myForm.PW.value == "" )
         {
            pw.style.border = "2px solid red";
            document.getElementById('pw_div').style.color = "red";
            pw_error.textContent = "password is required";
            pw_error.style.color = "red";
            document.myForm.PW.focus() ;
            return false;
         }
         
         if( document.myForm.PW.value.length < 8 )
         {
            pw.style.border = "2px solid red";
            document.getElementById('pw_div').style.color = "red";
            pw_error.textContent = "password must be between 8 and 24 characters";
            document.myForm.PW.focus() ;
            return false;
         }
         
         return( true );
      }

      function nameVerify() {
        if (username.value != "") {
         username.style.border = "white";
         document.getElementById('username_div').style.color = "white";
         name_error.innerHTML = "";
         return true;
        }
      }



