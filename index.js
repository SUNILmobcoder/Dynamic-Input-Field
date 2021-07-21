$(document).ready(() => {
    $("#inputError").hide();
    $("#times").val(1);
  });

// err handleing
function errHandle(type, req, time) {
    if(type == null) {
        $("#inputError").text("Please select the input type");
        $("#inputError").show();
        return
    }
    if(time < 1) {
        $("#inputError").text("Please select at least one input creation number");
        $("#inputError").show();
        return
    }
    $("#inputError").hide();
    createInput(type, req, time);
}

// handle event addField
function addField() {
    let inputType = $("#type").val();
    let inputReq = $("#req").val();
    let inputTime = $("#times").val();
    errHandle(inputType,inputReq,inputTime)
    
}

// create input
function createInput(type, req, time) {
    for( let i=0; i< parseInt(time); i++) {
        $('.container').append(`<div class="item-input">
        <input type="${type}" name="${type}" value="" ${req == null ? "" : req}/>
        <button onclick="$(this).closest('.item-input').remove();"> Delete </button>
        </div>`);
    }
}