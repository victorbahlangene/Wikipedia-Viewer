//onkeypress = "displayInput()";

document.getElementById("inner").addEventListener("change", (e) => {
    let searchTerm = e.target.value;
    //console.log(e.target.value);

    document.getElementById("form").addEventListener("submit", (e) => {
        e.preventDefault();
        //console.log(searchTerm);
    });

    document.getElementById("form").addEventListener("submit", () => {
        //let searchTerm = "plato";
        let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm ;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //because its not JSON,its just an array
                
                let myArr = JSON.parse(this.responseText);
                
                //let myArr = this.responseText;
                
                //let myArr1 = myArr.split(' ');
                console.log(myArr);
                
                myFunction(myArr);
                
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();

        //myFunction
        function myFunction(arr) {
            var out = "";
            var i;


            for (i = 1; i < 3; i++) {
                
                out += "<h5>" + arr[i][0] + "</h5><br>"
                for(j = 1; j <10; j++) {
                    let muslim = "Muslim";
                    out += '<a href="https://en.wikipedia.org/wiki/+`muslim`" target="blank">' + arr[i][j] + '</a><br><hr>';
                    //document.getElementById("myAnchor").href = "arr[i][j]";
                }
                
            }
/*
            for (i = arr.length; i > arr.length-10; i--) {
                out += '<a href="arr[i]" >' + arr[i] + '</a><br>';
            }
*/
            document.getElementById("searchResults").innerHTML = out;
        }
   
    });

});



/*
document.getElementById("submit").addEventListener("click",requestSearch());

function requestSearch () {
    let searchTerm = "plato";
    let url ="https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let test = JSON.parse(this.responseText);
        
            console.log(test);
        
        
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
*/



// NB: remember to always read the 
//api documentation no matter how long it may be

/// Fix it so that href="arr[3][0 to 3]"
//figure out how to add a variable to the end of the link
//fix line 45