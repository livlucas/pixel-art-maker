// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
"use strict";
    function generateTableTemplate(height, width) {
        let i,
            j,
            html;

        html = '<tr class="table-row"><<td><div class="content"></div></td>/tr>';


        for (i = 0; i < height; i += 1) {
            $('table').append($(html));
        }

        for (j = 1; j < width; j += 1) {
             $('.table-row').each(function () {
                $(this).append('<td><div class="content"></div></td>');
            });
        }   
    }

    function colorCanvas() {
         $('table').on('click', function ( evt ) {
            let $par,
                color;

            color = $('#colorPicker').val();

            $par = $(evt.target).parent();

            $par.css("background-color", color);
        });
    }

    function makeGrid() {
        let height,
        width,
        color;
    
        $('#sizePicker').on('submit', function( evt ) {
            evt.preventDefault();

            $('table tr').remove();

            height = $('#input_height').val();
            width = $('#input_width').val();

        generateTableTemplate(height, width);

        });
    }

(function () { 
    makeGrid();
    colorCanvas();
}());


