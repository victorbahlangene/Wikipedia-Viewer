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
        let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let test = JSON.parse(this.responseText);
                console.log(test);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
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


/// FIX THE ERROR BEING DISPLAYED //
// No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://127.0.0.1:5500' is therefore not allowed access. //