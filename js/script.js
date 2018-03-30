window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        console.log("Just so you know, jQuery is loaded");
    } else {
        // jQuery is not loaded
        console.log("jQuery is not loaded :(");
    }
}
// $(document).ready(function(){
//     $("#content img").toggle("scale",{
//       percent: "80%"
//     },0);
// $('#content img').hover(function() {
//     $(this).css("cursor", "pointer");
//     $(this).toggle("scale",{
//       percent: "90%"
//     },500);

// }, function() {
//     $(this).toggle("scale",{
//       percent: "80%"
//     },500);

// });
// });
//  $( function() {
//     $( document ).tooltip();
//   } );
//   </script>
//   <style>
//   label {
//     display: inline-block;
//     width: 5em;
//   }
//   </style>



$(".cook").mouseover(function() { $("#cookingcaption").css('visibility','visible'); });
$(".cook").mouseover(function() { $("#cookingcaption").css('visibility','visible'); });
$(".cook").mouseout(function() { $("#cookingcaption").css('visibility','hidden'); });



$(".project").mouseover(function() { $("#projectcaption").css('visibility','hidden'); });
$(".project").mouseover(function() { $("#projectcaption").css('visibility','visible'); });
$(".project").mouseout(function() { $("#projectcaption").css('visibility','hidden'); });


$(".travel").mouseover(function() { $("#travelcaption").css('visibility','visible'); });
$(".travel").mouseover(function() { $("#travelcaption").css('visibility','visible'); });
$(".travel").mouseout(function() { $("#travelcaption").css('visibility','hidden'); });


$(".spanish").mouseover(function() { $("#spanishcaption").css('visibility','visible'); });
$(".spanish").mouseover(function() { $("#spanishcaption").css('visibility','visible'); });
$(".spanish").mouseout(function() { $("#spanishcaption").css('visibility','hidden'); });


$(".job").mouseover(function() { $("#jobcaption").css('visibility','visible'); });
$(".job").mouseover(function() { $("#jobcaption").css('visibility','visible'); });
$(".job").mouseout(function() { $("#jobcaption").css('visibility','hidden'); });


$(".sport").mouseover(function() { $("#sportcaption").css('visibility','visible'); });
$(".sport").mouseover(function() { $("#sportcaption").css('visibility','visible'); });
$(".sport").mouseout(function() { $("#sportcaption").css('visibility','hidden'); });







