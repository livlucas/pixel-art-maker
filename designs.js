"use strict";

//function to generate the table template according to the user inputs
function generateTableTemplate(height, width) {
    let html = '<tr class="table-row"><<td><div class="content"></div></td>/tr>';

    for (let i = 0; i < height; i += 1) {
        $('table').append($(html));
    }

    for (let j = 1; j < width; j += 1) {
        $('.table-row').each(function () {
            $(this).append('<td><div class="content"></div></td>');
        });
    }   
}

//function to set the background color to the chosen color
function colorCanvas() {
    $('table').on('click', function (evt) {
        let $par = $(evt.target).parent();
        let color = $('#colorPicker').val();

        $par.css("background-color", color);
    });
}

//function to make the grid after receiving user input.
function makeGrid() {
    let height = $('#input_height').val();
    let width = $('#input_width').val();

    $('#sizePicker').on('submit', function (evt) {
        evt.preventDefault();

        $('table tr').remove();

        if (height > 80 || width > 80) {
            window.alert("you can't have the width or height bigger than 80");
            return;
        }

        generateTableTemplate(height, width);
    });
}

makeGrid();
colorCanvas();


