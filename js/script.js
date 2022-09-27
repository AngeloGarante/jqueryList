
function newItem() {

    //javascript
    //1. Adding a new item to the list of items: 
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);
    let listed = $("#list");


    if (inputValue === '') {
        alert("You must write something!");
    } else {
        listed.append(li);
        $("#input").val("");
    }
    //2. Crossing out an item from the list of items:
    li.on("dblclick", function crossOut() {
        li.addClass("strike");
    });


    //3(i). Adding the delete button "X": 
    let crossOutButton = $("<crossOutButton></crossOutButton>")
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    function deleteListItem() {
        li.addClass("delete");
    }



    // 4. Reordering the items: 
    $('#list').sortable();

}




