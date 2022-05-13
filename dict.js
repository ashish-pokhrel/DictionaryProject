$(document).ready(function () {
    const lookupButton = $("#lookup");
    const searchBox = $("#searchBox");
    const listBox = $("#search-list");
    listBox.append(`<p> No Data Available. Please type the term and click lookup button.</p>`);

    lookupButton.click(function () {
        const searchedValue = searchBox.val();
        $.ajax({
            url: `/search-word?searchWord=${searchedValue}`,
            type: "GET",
            dataType: 'json',
            success: function (result) {
                const list = result.data;
                listBox.empty();
                if (list.length > 0) {
                    for (let i = 0; i < list.length; i++) {
                        const listVal = list[i];
                        listBox.append(`<p>
                    ${i + 1}(${listVal.wordtype})
                    :: 
                    ${listVal.definition}</p> <br>`);
                    }
                }
                else{
                    listBox.append(`<p> No Data Found ! </p>`);
                }
            },
        })


        // fetch(`/search-word?searchWord=${searchedValue}`).then((data) => {
        //     console.log(data);
        // })

        // const xhr = new XMLHttpRequest();
        // //open the object
        // xhr.open('get', `/search-word?searchWord=${searchedValue}`, true)

        // //on progress
        // xhr.onprogress = function () {
        //     console.log("on progress.........")
        // }

        // //when  response is ready
        // xhr.getResponseHeader("Content-type", "application/json");
        // xhr.onload = function() {
        //     //console.log(this.responseText)
        //     console.log("on progress..asdasda.......")
        // }
        // xhr.send();

    })
})