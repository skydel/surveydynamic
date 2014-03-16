/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getHostName(){
    var siteName= window.location.hostname; 
    if(siteName===""){
        siteName ="dumy.tushar.com";
    }
    //alert(siteName);
    $(".siteName").html(siteName);
}

function randomNumber() {return Math.floor((9-4)*Math.random()) + 2;}
function goOffer(gift) {
	window.open(gift);
}
function getDate() {
    var dayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var monthNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var now = new Date();
    document.write(dayNames[now.getDay()] + ", " + monthNames[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear());
}
function loadQ2() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("q2").style.display = "block";
}
function loadQ3() {
    document.getElementById("q2").style.display = "none";
    document.getElementById("q3").style.display = "block";
}
function loadQ4() {
    document.getElementById("q3").style.display = "none";
    document.getElementById("q4").style.display = "block";
}

function loadOffers() {
    document.getElementById("q4").style.display = "none";
    document.getElementById("searching").style.display = "block";
    document.getElementById("terms").style.display = "block";
}

function loadProgress() {
    loadOffers();
    // form submit by AJAX
    //var alert = $('.alert');
    var form = $('#form');

    $.ajax({
        url: form.attr('action'), // form action url
        type: form.attr('method'), // form submit method get/post
        dataType: 'html', // request type html/json/xml
        data: form.serialize(), // serialize form data 
        beforeSend: function() {
            //alert.fadeOut();
            //submit.html('Sending....'); // change submit button text
        },
        success: function(data) {
            //alert.html(data).fadeIn(); // fade in response data
            form.trigger('reset'); // reset form
            //submit.html('Send Email'); // reset submit button text
        },
        error: function(e) {
            console.log(e);
        }
    });
}
function ColorHoverOn(elementname) {
    document.getElementById(elementname).style.backgroundColor = '#C2C2C2';
}
function ColorHoverOff(elementname) {
    document.getElementById(elementname).style.backgroundColor = 'transparent';
}