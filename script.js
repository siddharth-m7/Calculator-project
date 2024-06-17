let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach(function (button) {
    button.addEventListener("click", function (e) {
        if(e.target.innerHTML == "="){
            try{
                string = eval(string);
            }catch{
                string = "Error";
            }
            document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML == "C"){
            string = "";
            document.querySelector("input").value = string;
        }
        else{
       console.log(e.target);
       string += e.target.innerHTML;
         document.querySelector("input").value = string;
        }
    });
    });


    document.getElementById('change-style-button').addEventListener('click', function() {
        // Get the current stylesheet link element
        var stylesheet = document.getElementById('theme-stylesheet');
        
        // Determine the new stylesheet URL based on the current one
        if (stylesheet.getAttribute('href') === 'style1.css') {
            stylesheet.setAttribute('href', 'style2.css');
        } else {
            stylesheet.setAttribute('href', 'style1.css');
        }
    });
    