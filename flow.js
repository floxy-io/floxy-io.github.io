const Http = new XMLHttpRequest();

$( document ).ready(function() {
});

window.onpopstate = function(event) {
};


function copyText(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}
