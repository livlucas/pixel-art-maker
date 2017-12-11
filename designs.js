"use strict";
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

    function colorCanvas() {
         $('table').on('click', function ( evt ) {
            let $par = $(evt.target).parent(),
                color = $('#colorPicker').val();

            $par.css("background-color", color);
        });
    }

    function makeGrid() {
        let height = $('#input_height').val(),
            width = $('#input_width').val();
    
        $('#sizePicker').on('submit', function( evt ) {
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


