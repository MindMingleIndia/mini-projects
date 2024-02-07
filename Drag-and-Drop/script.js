let items = document.getElementsByClassName("item");

let rightBox = document.getElementById("rightContainer");
let leftBox = document.getElementById("leftContainer");

for(item of items){
    item.addEventListener("dragstart", function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected= null;
        });
        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected= null;
        });
    })
}