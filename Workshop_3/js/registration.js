 function selection() {
            var d = document.getElementById("cities");
            var displaytext = d.options[d.selectedIndex].value;
            document.getElementById("selectBox").value=displaytext;
        }