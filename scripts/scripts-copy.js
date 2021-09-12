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

function addConeToOrder() {
    if (document.getElementById('addConeToOrder').click) {
        document.createElement('tr')
    }
}