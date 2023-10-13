const loading=document.querySelector('.loading');

var palate=document.getElementById('color-palate');

function vscolor(){
    palate.classList.toggle('visible-palate');
}
//
//

var colors=[{"name":"default-color","hex":"#8b755a"},{"name":"green","hex":"#2ECC40"},{"name":"blue","hex":"#0074D9"},{"name":"orange","hex":"#ff7e00"},{"name":"purple","hex":"#bb54e1"},
{"name":"teal","hex":"#14c599"},{"name":"brown","hex":"#ab8b40"},{"name":"red","hex":"#FF4136"},{"name":"olive","hex":"#3D9970"}
,{"name":"yellow","hex":"#fab82c"},{"name":"pink","hex":"#ff017e"},{"name":"hotpink","hex":"#96053e"},];

//console.log(`${colors[0].name}-color`);


var data=``;
var spec='';
for(var i=0;i<colors.length;i++){
    data+=`<span class="palate ${colors[i].name}-color"></span>`;
}
document.getElementById("colors-list").innerHTML=data;

var root=document.querySelector(':root');

for(var j=0;j<colors.length;j++){
    var myelement=document.querySelector(`.${colors[j].name}-color`);
    
    myelement.style.backgroundColor= colors[j].hex;
    
    
}

for(var i=0;i<colors.length;i++){
    var myelements=document.querySelector(`.${colors[i].name}-color`);
    
    var colorhex=colors[i].hex;
    
}

var colelements=document.querySelectorAll('.palate');

// Add "active" class to the first color element
colelements[0].classList.add('active');




function createClickHandler(hexxcolor) {
    return function () {
        // Remove "active" class from all .palate elements
        colelements.forEach(function (element) {
            element.classList.remove('active');
        });

        // Add "active" class to the clicked element
        this.classList.add('active');

        changepagecolor(hexxcolor);
    };
}

for (var i = 0; i < colelements.length; i++) {
    var dds = colors[i].hex;
    colelements[i].addEventListener("click", createClickHandler(dds));
}

function changepagecolor(hexxcolor) {

    //Update --main-color
    document.documentElement.style.setProperty('--main-color', hexxcolor);

    // Extract RGB values from hex color

    // Remove the '#' character
    var hex = hexxcolor.slice(1); 

    var red = parseInt(hex.slice(0, 2), 16);
    var green = parseInt(hex.slice(2, 4), 16);
    var blue = parseInt(hex.slice(4, 6), 16);

    // Update --main-color-red, --main-color-green, and --main-color-blue
    root.style.setProperty('--main-color-red', red);
    root.style.setProperty('--main-color-green', green);
    root.style.setProperty('--main-color-blue', blue);
}






//var rootstyles=getComputedStyle(root);
//var maincolor=rootstyles.getPropertyValue('--main-color');
//console.log('main ',maincolor);
//root.style.setProperty('--main-color','#0074D9');

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Select all the li elements within the dropdown menu
var liElements = document.querySelectorAll('.dropdown-item');

// Loop through each li element and add a click event listener
liElements.forEach(function (liElement) {
    liElement.addEventListener('click', function () {
        // Get the text content of the clicked li element
        var newText = liElement.textContent;

        // Find the parent container that holds both li and ui-selectmenu-text elements
        var parentContainer = liElement.closest('.nav-item');

        // Find the ui-selectmenu-text element within the parent container
        var selectMenuText = parentContainer.querySelector('.ui-selectmenu-text');

        // Update the text of the ui-selectmenu-text element
        if (selectMenuText) {
            selectMenuText.textContent = newText;
        }
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////

//fix nav visibility

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.fix-nav');
    

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100 ) {
            navbar.style.visibility = 'visible'; // Make the navbar visible
            navbar.style.opacity = '1';
            
            
        } else if (window.scrollY <= 100 ) {
            navbar.style.opacity = '0'; // Fade out the navbar
            navbar.style.visibility = 'hidden';
            
            
        }
    });
});

//////////////////////////////////////////////////////////////////////////////////////////

// Fancybox Config

$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
    ],
    loop: false,
    protect: true
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

//form-back-drop and consulting-form
var barButton = document.querySelector('.bar-box-button');
var cancelicon = document.querySelector('.cross-icon');
var formbackdrop = document.querySelector('.form-back-drop');
var consultingform = document.querySelector('.consulting-form');

barButton.addEventListener('click',function(){
    formbackdrop.classList.add('form-back-drop-visible');
    consultingform.classList.add('cosult-form-visible');
});

cancelicon.addEventListener('click',function(){
    formbackdrop.classList.remove('form-back-drop-visible');
    consultingform.classList.remove('cosult-form-visible');
});

formbackdrop.addEventListener('click',function(){
    formbackdrop.classList.remove('form-back-drop-visible');
    consultingform.classList.remove('cosult-form-visible');
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

//search box button

var searchboxbutton = document.querySelector('.search-box-button');

// Add a click event listener to the button
searchboxbutton.addEventListener('click', function(event) {
searchboxbutton.classList.add('searchboxbuttonclicked');
});

// Add a click event listener to the document to handle clicks outside the button
document.addEventListener('click', function(event) {
// Check if the clicked element is not the button
if (event.target !== searchboxbutton) {
searchboxbutton.classList.remove('searchboxbuttonclicked');
}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener('load',function(){
    setTimeout(function(){
        loading.classList.add('opacity-0','invisible')
        document.body.style.overflowY ='auto';
    },3000)
})
