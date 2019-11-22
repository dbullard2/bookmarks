var colours = ['#ff5c5c', '#ffa95c', '#fff85c', '#5cff63', '#5cfff5', '#5c75ff', '#925cff', '#ff5cee'];
document.body.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];

var items;

var newFolder = "<p class='sidebar-item' contenteditable='true'>untitled</p>";

function addFolder(){
  document.getElementById('one').insertAdjacentHTML('afterend', newFolder);
  localStorage.headerHTML = header.innerHTML;
}

document.onclick= function(event) {
    // Compensate for IE<9's non-standard event model
    //
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;
    /*var content = document.getElementById('one');
    localStorage.setItem("content", content.innerHTML);*/
    var content = document.getElementById('stuff');
    localStorage.setItem("stuff", stuff.innerHTML);
};

window.onload = function(){
  document.getElementById('plus').style.backgroundColor = document.body.style.backgroundColor;
  if(localStorage.getItem('stuff')){
    document.getElementById('stuff').innerHTML = localStorage.getItem('stuff');
  }
}
