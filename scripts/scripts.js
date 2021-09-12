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

function updateTotal() {
    //Cone variables
    let smConeQty = document.getElementById('smConeQty').value;
    let mdConeQty = document.getElementById('mdConeQty').value;
    let lgConeQty = document.getElementById('lgConeQty').value;
    let rgWafConeQty = document.getElementById('rgWafConeQty').value;
    let lgWafConeQty = document.getElementById('lgWafConeQty').value;

    let smConeSubtotal = 2 * smConeQty;
    let mdConeSubtotal = 2.5 * mdConeQty;
    let lgConeSubtotal = 3 * lgConeQty;
    let rgWafConeSubtotal = 3.2 * rgWafConeQty;
    let lgWafConeSubtotal = 3.8 * lgWafConeQty;

    let iceCreamTotal = smConeSubtotal + mdConeSubtotal + lgConeSubtotal + rgWafConeSubtotal + lgWafConeSubtotal;

    //Shake, malt, and float variables

    let smShakeQty = document.getElementById('smShakeQty').value;
    let mdShakeQty = document.getElementById('mdShakeQty').value;
    let lgShakeQty = document.getElementById('lgShakeQty').value;
    let smMaltQty = document.getElementById('smMaltQty').value;
    let mdMaltQty = document.getElementById('mdMaltQty').value;
    let lgMaltQty = document.getElementById('lgMaltQty').value;
    let smFloatQty = document.getElementById('smFloatQty').value;
    let mdFloatQty = document.getElementById('mdFloatQty').value;
    let lgFloatQty = document.getElementById('lgFloatQty').value;

    let shakeAddOnsSm = (document.getElementById('shakeAddOnsSm').value) * 0.1;
    let shakeAddOnsMd = (document.getElementById('shakeAddOnsMd').value) * 0.1;
    let shakeAddOnsLg = (document.getElementById('shakeAddOnsLg').value) * 0.1;
    let maltAddOnsSm = (document.getElementById('maltAddOnsSm').value) * 0.1;
    let maltAddOnsMd = (document.getElementById('maltAddOnsMd').value) * 0.1;
    let maltAddOnsLg = (document.getElementById('maltAddOnsLg').value) * 0.1;
    let floatAddOnsSm = (document.getElementById('floatAddOnsSm').value) * 0.1;
    let floatAddOnsMd = (document.getElementById('floatAddOnsMd').value) * 0.1;
    let floatAddOnsLg = (document.getElementById('floatAddOnsLg').value) * 0.1;

    let smShakeSubtotal = (3 + (shakeAddOnsSm * 10)) * smShakeQty;
    let mdShakeSubtotal = (3.5 + (shakeAddOnsMd * 10)) * mdShakeQty;
    let lgShakeSubtotal = (5 + (shakeAddOnsLg * 10)) * lgShakeQty;
    let smMaltSubtotal = (3 + (maltAddOnsSm * 10)) * smMaltQty;
    let mdMaltSubtotal = (3.5 + (maltAddOnsMd * 10)) * mdMaltQty;
    let lgMaltSubtotal = (5 + (maltAddOnsLg * 10)) * lgMaltQty;
    let smFloatSubtotal = (3 + (floatAddOnsSm * 10)) * smFloatQty;
    let mdFloatSubtotal = (3.5 + (floatAddOnsMd * 10)) * mdFloatQty;
    let lgFloatSubtotal = (5 + (floatAddOnsLg * 10)) * lgFloatQty;

    let maltsShakesTotal = smShakeSubtotal + mdShakeSubtotal + lgShakeSubtotal + smMaltSubtotal + mdMaltSubtotal + lgMaltSubtotal + smFloatSubtotal + mdFloatSubtotal + lgFloatSubtotal;

    //Sundae variables

    let smSundaeQty = document.getElementById('smSundaeQty').value;
    let mdSundaeQty = document.getElementById('mdSundaeQty').value;
    let lgSundaeQty = document.getElementById('lgSundaeQty').value;

    let sundaeAddOnsSm = (document.getElementById('sundaeAddOnsSm').value) * 0.1;
    let sundaeAddOnsMd = (document.getElementById('sundaeAddOnsMd').value) * 0.1;
    let sundaeAddOnsLg = (document.getElementById('sundaeAddOnsLg').value) * 0.1;

    let smSundaeSubtotal = (2.6 + (sundaeAddOnsSm * 10)) * smSundaeQty;
    let mdSundaeSubtotal = (3 + (sundaeAddOnsMd * 10)) * mdSundaeQty;
    let lgSundaeSubtotal = (3.5 + (sundaeAddOnsLg * 10)) * lgSundaeQty;

    let sundaesTotal = smSundaeSubtotal + mdSundaeSubtotal + lgSundaeSubtotal;

    //Foot Items Variables
    let footLongQty = document.getElementById('footLongQty').value;
    let coneyQty = document.getElementById('coneyQty').value;
    let hotDogQty = document.getElementById('hotDogQty').value;
    let smallConeyQty = document.getElementById('smallConeyQty').value;
    let mettHotQty = document.getElementById('mettHotQty').value;
    let mettMildQty = document.getElementById('mettMildQty').value;
    let mettConeyQty = document.getElementById('mettConeyQty').value;
    let wkgTacoQty = document.getElementById('wkgTacoQty').value;
    let hamburgerQty = document.getElementById('hamburgerQty').value;

    let footLongAddOns = (document.getElementById('footLongAddOns').value) * 0.1;
    let coneyAddOns = (document.getElementById('coneyAddOns').value) * 0.1;
    let hotDogAddOns = (document.getElementById('hotDogAddOns').value) * 0.1;
    let smallConeyAddOns = (document.getElementById('smallConeyAddOns').value) * 0.1;
    let mettHotAddOns = (document.getElementById('mettHotAddOns').value) * 0.1;
    let mettMildAddOns = (document.getElementById('mettMildAddOns').value) * 0.1;

    let footLongSubtotal = (2.6 + (footLongAddOns * 10)) * footLongQty;
    let coneySubtotal = (3.4 + (coneyAddOns * 10)) * coneyQty;
    let hotDogSubtotal = (2.1 + (hotDogAddOns * 10)) * hotDogQty;
    let smallConeySubtotal = (2.5 + (smallConeyAddOns * 10)) * smallConeyQty;
    let mettHotSubtotal = (2.5 + (mettHotAddOns * 10)) * mettHotQty;
    let mettMildSubtotal = (2.5 + (mettMildAddOns * 10)) * mettMildQty;
    let mettConeySubtotal = 3.3 * mettConeyQty;
    let wkgTacoSubtotal = 2.9 * wkgTacoQty;
    let hamburgerSubtotal = 2.9 * hamburgerQty;

    let foodItemsTotal = footLongSubtotal + coneySubtotal + hotDogSubtotal + smallConeySubtotal + mettHotSubtotal + mettMildSubtotal + mettConeySubtotal + wkgTacoSubtotal + hamburgerSubtotal;

    let grandTotal = iceCreamTotal + maltsShakesTotal + sundaesTotal + foodItemsTotal;

    //Cones
    if (smConeQty) {
        document.getElementById('smConeSubtotal').innerHTML = "$" + smConeSubtotal.toFixed(2);
        document.getElementById('iceCreamTotal').innerHTML = "$" + iceCreamTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (mdConeQty) {
        document.getElementById('mdConeSubtotal').innerHTML = "$" + mdConeSubtotal.toFixed(2);
        document.getElementById('iceCreamTotal').innerHTML = "$" + iceCreamTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (lgConeQty) {
        document.getElementById('lgConeSubtotal').innerHTML = "$" + lgConeSubtotal.toFixed(2);
        document.getElementById('iceCreamTotal').innerHTML = "$" + iceCreamTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (rgWafConeQty) {
        document.getElementById('rgWafConeSubtotal').innerHTML = "$" + rgWafConeSubtotal.toFixed(2);
        document.getElementById('iceCreamTotal').innerHTML = "$" + iceCreamTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (lgWafConeQty) {
        document.getElementById('lgWafConeSubtotal').innerHTML = "$" + lgWafConeSubtotal.toFixed(2);
        document.getElementById('iceCreamTotal').innerHTML = "$" + iceCreamTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    //Shakes
    if (smShakeQty) {
        document.getElementById('smShakeSubtotal').innerHTML = "$" + smShakeSubtotal.toFixed(2);
        document.getElementById('maltsShakesTotal').innerHTML = "$" + maltsShakesTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (mdShakeQty) {
        document.getElementById('mdShakeSubtotal').innerHTML = "$" + mdShakeSubtotal.toFixed(2);
        document.getElementById('maltsShakesTotal').innerHTML = "$" + maltsShakesTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (lgShakeQty) {
        document.getElementById('lgShakeSubtotal').innerHTML = "$" + lgShakeSubtotal.toFixed(2);
        document.getElementById('maltsShakesTotal').innerHTML = "$" + maltsShakesTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    //Malt
    if (smMaltQty) {
        document.getElementById('smMaltSubtotal').innerHTML = "$" + smMaltSubtotal.toFixed(2);
        document.getElementById('maltsShakesTotal').innerHTML = "$" + maltsShakesTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (mdMaltQty) {
        document.getElementById('mdMaltSubtotal').innerHTML = "$" + mdMaltSubtotal.toFixed(2);
        document.getElementById('maltsShakesTotal').innerHTML = "$" + maltsShakesTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (lgMaltQty) {
        document.getElementById('lgMaltSubtotal').innerHTML = "$" + lgMaltSubtotal.toFixed(2);
        document.getElementById('maltsShakesTotal').innerHTML = "$" + maltsShakesTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    //Float
    if (smFloatQty) {
        document.getElementById('smFloatSubtotal').innerHTML = "$" + smFloatSubtotal.toFixed(2);
        document.getElementById('maltsShakesTotal').innerHTML = "$" + maltsShakesTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (mdFloatQty) {
        document.getElementById('mdFloatSubtotal').innerHTML = "$" + mdFloatSubtotal.toFixed(2);
        document.getElementById('maltsShakesTotal').innerHTML = "$" + maltsShakesTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (lgFloatQty) {
        document.getElementById('lgFloatSubtotal').innerHTML = "$" + lgFloatSubtotal.toFixed(2);
        document.getElementById('maltsShakesTotal').innerHTML = "$" + maltsShakesTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    //Sundaes
    if (smSundaeQty) {
        document.getElementById('smSundaeSubtotal').innerHTML = "$" + smSundaeSubtotal.toFixed(2);
        document.getElementById('sundaesTotal').innerHTML = "$" + sundaesTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (mdSundaeQty) {
        document.getElementById('mdSundaeSubtotal').innerHTML = "$" + mdSundaeSubtotal.toFixed(2);
        document.getElementById('sundaesTotal').innerHTML = "$" + sundaesTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (lgSundaeQty) {
        document.getElementById('lgSundaeSubtotal').innerHTML = "$" + lgSundaeSubtotal.toFixed(2);
        document.getElementById('sundaesTotal').innerHTML = "$" + sundaesTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    //Food Items
    if (footLongQty) {
        document.getElementById('footLongSubtotal').innerHTML = "$" + footLongSubtotal.toFixed(2);
        document.getElementById('foodItemsTotal').innerHTML = "$" + foodItemsTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (coneyQty) {
        document.getElementById('coneySubtotal').innerHTML = "$" + coneySubtotal.toFixed(2);
        document.getElementById('foodItemsTotal').innerHTML = "$" + foodItemsTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (hotDogQty) {
        document.getElementById('hotDogSubtotal').innerHTML = "$" + hotDogSubtotal.toFixed(2);
        document.getElementById('foodItemsTotal').innerHTML = "$" + foodItemsTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (smallConeyQty) {
        document.getElementById('smallConeySubtotal').innerHTML = "$" + smallConeySubtotal.toFixed(2);
        document.getElementById('foodItemsTotal').innerHTML = "$" + foodItemsTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (mettHotQty) {
        document.getElementById('mettHotSubtotal').innerHTML = "$" + mettHotSubtotal.toFixed(2);
        document.getElementById('foodItemsTotal').innerHTML = "$" + foodItemsTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (mettMildQty) {
        document.getElementById('mettMildSubtotal').innerHTML = "$" + mettMildSubtotal.toFixed(2);
        document.getElementById('foodItemsTotal').innerHTML = "$" + foodItemsTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (mettConeyQty) {
        document.getElementById('mettConeySubtotal').innerHTML = "$" + mettConeySubtotal.toFixed(2);
        document.getElementById('foodItemsTotal').innerHTML = "$" + foodItemsTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (wkgTacoQty) {
        document.getElementById('wkgTacoSubtotal').innerHTML = "$" + wkgTacoSubtotal.toFixed(2);
        document.getElementById('foodItemsTotal').innerHTML = "$" + foodItemsTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
    if (hamburgerQty) {
        document.getElementById('hamburgerSubtotal').innerHTML = "$" + hamburgerSubtotal.toFixed(2);
        document.getElementById('foodItemsTotal').innerHTML = "$" + foodItemsTotal.toFixed(2);
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal.toFixed(2);
    }
}

document.getElementById('submitButtonClick').addEventListener('click', function() {
    alert("Thank you for your order!");
});