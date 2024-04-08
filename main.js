feather.replace()

// ----------------Sidebar scroll--------------------------



// HOME PAGE


// ------------------------------------------




 const homeLink = document.getElementById('homeLink');

 homeLink.addEventListener('click', function(event) {
     event.preventDefault();
     document.querySelectorAll('.content > div').forEach(function(div) {
         if (div.id === 'home') {
             div.style.display = 'block';
         } else {
             div.style.display = 'none';
         }
     });
 });



 const messageLink = document.getElementById('messageLink');
 

 messageLink.addEventListener('click', function(event) {
     event.preventDefault();
     document.querySelectorAll('.content > div').forEach(function(div) {
         if (div.id === 'message') {
             div.style.display = 'block';
         } else {
             div.style.display = 'none';
         }
     });
 });


 const customerLink = document.getElementById('customerLink');

 customerLink.addEventListener('click', function(event) {
     event.preventDefault();
     document.querySelectorAll('.content > div').forEach(function(div) {
         if (div.id === 'customer') {
             div.style.display = 'block';
         } else {
             div.style.display = 'none';
         }
     });
 });


// ---------------------------project------------------------------

const projectLink = document.getElementById('projectLink');

projectLink.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelectorAll('.content > div').forEach(function(div) {
        if (div.id === 'project') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
});


// ---------------------------project------------------------------

const resourceLink = document.getElementById('resourcesLink');

resourceLink.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelectorAll('.content > div').forEach(function(div) {
        if (div.id === 'resource') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
});

// ---------------------------help------------------------------

const helpLink = document.getElementById('helpLink');

helpLink.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelectorAll('.content > div').forEach(function(div) {
        if (div.id === 'help') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
});


// ----------------------setting----------------------------------
const settingLink = document.getElementById('settingLink');

settingLink.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelectorAll('.content > div').forEach(function(div) {
        if (div.id === 'setting') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
});