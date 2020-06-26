var width,height,color;

$("#sizePicker").submit(function (e) {
    e.preventDefault();
    height = $("#inputHeight").val();
    width = $("#inputWidth").val();
    makeGrid(height,width);
});


function makeGrid(x,y) {
    $('tr').remove();
    
    for(var i = 1 ; i<= x ; i++) {
        
        //*******************************************//
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
            //var tr = document.createElement('tr');
            //tr.setAttribute('id','table'+i);
            //document.querySelector('#pixelCanvas').append(tr);
        //*******************************************//
        
         for(var j = 1 ; j<= y ; j++) {
                $('#table' + i).append('<td></td>');
         }
    }
    
    $('td').click(function() {
        color = $("#colorPicker").val();
        
        if($(this).attr('style')) {
            $(this).removeAttr('style');
        }else {
                $(this).attr('style','background-color:'+ color);
        }    
    });
};


document.querySelector('#NL').addEventListener('click', function() {
        $('tr').remove();
    document.querySelector('#NL').style.backgroundColor = "blue";
    document.querySelector('#EN').style.backgroundColor = "rgba(0,0,0,0)";
    document.querySelector('#ch').textContent = "Kies rastergrootte";
    document.querySelector('#H').textContent = "Rooster hoogte:";
    document.querySelector('#W').textContent = "Raster breedte:";
    document.querySelector('#pick').textContent = "Kies een kleur";
    document.querySelector('#Design').textContent = "Ontwerp canvas";
    document.querySelector('#submit').value = "voorleggen";
    
});
document.querySelector('#EN').addEventListener('click', function() {
        $('tr').remove();
    document.querySelector('#EN').style.backgroundColor = "blue";
    document.querySelector('#NL').style.backgroundColor = "rgba(0,0,0,0)";
    document.querySelector('h1').textContent = "Pixel Art Maker";
    document.querySelector('#ch').textContent = "Choose Grid Size";
    document.querySelector('#H').textContent = "Grid Height:";
    document.querySelector('#W').textContent = "Grid Width:";
    document.querySelector('#pick').textContent = "Pick A Color";
    document.querySelector('#Design').textContent = "Design Canvas";
    document.querySelector('#submit').value = "submit";
});