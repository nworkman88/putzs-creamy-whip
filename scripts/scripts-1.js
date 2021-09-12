$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $(".orderCollapseBtn").on("click", function(){
        let icon = $(this).children("i");
         if (icon.hasClass("fa-angle-down")) {
             $(icon).replaceWith('<i class="fa fa-angle-up"></i>');
         } else {
             $(icon).replaceWith('<i class="fa fa-angle-down"></i>');
         }
     });
})
​
$( "form" ).on('submit', (function( event ) {
    // console.log( $( this ).serializeArray() );
    event.preventDefault();
​
    let productDataRaw  = $(this).serializeArray();
    // let productDataObject = {};
    // productDataRaw.forEach(entry => {
    //     console.log(entry);
    // })
    updateTotal(productDataRaw);
}));
​
  $('input[name="coneSizeRadios"]').change(function(event){
      let price = $(this).data('price');
      console.log(price);
      //this updates the hidden price element
      $(this).parent().parent().find('[name="price"]').val(price);
​
  })
function updateTotal(data){
    let sizeObj = data.find(function(entry){
        return entry.name == 'coneSizeRadios'
    });
    let priceObj = data.find(function(entry){
        return entry.name == 'price'
    });
    let flavorObj = data.find(function(entry){
        return entry.name == 'coneFlavorRadios'
    });
    let quantityObj = data.find(function(entry){
        return entry.name == 'coneQty'
    });
    let quantity = quantityObj.value;
    let priceTotal = priceObj.value * quantity;
​
    let orderRowHTML = `<tr>
    <td>${sizeObj.value}</td>
    <td>${flavorObj.value}</td>
    <td>${quantityObj.value}</td>
    <td>${priceTotal.toFixed(2)}</td>
    <td><a class="remove-btn">Remove</a></td>
    </tr>`;
    console.log(orderRowHTML);
    $('#orderFormContainer table tbody').append(orderRowHTML);
}
// function showValues() {
//     var fields = $( ":input" ).serializeArray();
//     $( "#cone-sm-cell" ).empty();
//     jQuery.each( fields, function( i, field ) {
//         console.log(fields);
//       $( "#cone-sm-cell" ).append( field.value + " " );
//     });
//   }
​
//   $( ":checkbox, :radio" ).click( showValues );
//   showValues();
​
$('.remove-btn').click(function(event){
    //$(this).parent().remove();
})