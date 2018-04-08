

document.getElementById("inner").addEventListener("change", (e) => {
    let searchTerm = e.target.value;

    document.getElementById("form").addEventListener("submit", (e) => {
        e.preventDefault();

    });

    document.getElementById("form").addEventListener("submit", () => {
      
        let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm ;
        
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.onload = function () {
            if (this.status == 200) {
                let myArr = JSON.parse(this.responseText);
                myFunction(myArr);
                
            }
        };
        
        xhttp.send();
        function myFunction(arr) {
            var out = "";
            var i;
            var aTag = document.createElement("a");

            for (i = 2; i < 3; i++) {
                
                out += "<h5>" + arr[i][0] + "</h5><br>"
                for(j = 1; j <10; j++) {

                    out += aTag + arr[i][j] + '<hr>';
                    
                }
                
            }

            document.getElementById("searchResults").innerHTML = out;
        }
   
    });

    

});



