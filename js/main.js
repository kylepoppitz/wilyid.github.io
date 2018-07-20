// Define Variables
var moviesbutton = "<button id='moviesbutton' type='button' class='btn btn-outline-light'>Take Me There</button>";
var comicsbutton = "<button id='comicsbutton' type='button' class='btn btn-outline-light'>Take Me There</button>";
var articlesbutton = "<button id='articlesbutton' type='button' class='btn btn-outline-light'>Take Me There</button>";
var wbtbutton = "<button id='wbtbutton' type='button' class='btn btn-outline-light'>Take Me There</button>";
var aboutbutton = "<button id='aboutbutton' type='button' class='btn btn-outline-light'>Take Me There</button>";

// Define Functions
function addmoviesbutton(){
    $("#moviesbutton").show();
    $("#moviesnav").slideDown("slow");
}

function addcomicsbutton(){
    $("#comicsnav").slideDown("slow");
    $("comicsbutton").show();
}

function addarticlesbutton(){
    $("#articlesnav").slideDown("slow");
    $("#articlesbutton").show();
}

function addwbtbutton(){
    $("#wbtbutton").show();
    $("#wbtnav").slideDown("slow");
}

function addaboutbutton(){
    $("#aboutbutton").show();
    $("#aboutnav").slideDown("slow");
}

function removemoviesbutton(){
    $("#moviesnav").slideUp("slow");
    $("#moviesbutton").hide();
}

function removecomicsbutton(){
    $("#comicsnav").slideUp("slow");
    $("#comicsnav").empty();
}

function removearticlesbutton(){
    $("#articlesnav").slideUp("slow");
    $("#articlesbutton").hide();
}

function removewbtbutton(){
    $("#wbtnav").slideUp("slow");
    $("#wbtbutton").hide();
}

function removeaboutbutton(){
    $("#aboutnav").slideUp("slow");
    $("#aboutbutton").hide();
}

// Define Event Handlers
$(document).ready(function(){
    console.log("main.js ready...");
    $("#moviescard").mouseenter(function(){
       addmoviesbutton();
    });
    
    $("#comicscard").mouseenter(function(){
       addcomicsbutton();
    });
    
    $("#articlescard").mouseenter(function(){
       addarticlesbutton();
    });
    
    $("#wbtcard").mouseenter(function(){
       addwbtbutton();
    });
    
    $("#aboutcard").mouseenter(function(){
       addaboutbutton();
    });
    
    $("#moviescard").mouseleave(function(){
       removemoviesbutton();
    });
    
    $("#comicscard").mouseleave(function(){
       removecomicsbutton();
    });
    
    $("#articlescard").mouseleave(function(){
       removearticlesbutton();
    });
    
    $("#wbtcard").mouseleave(function(){
       removewbtbutton();
    });
        
    $("#aboutcard").mouseleave(function(){
       removeaboutbutton();
    });
});