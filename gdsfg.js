/**
 * Created by bad4iz on 08.06.2017.
 */
/* Custom filtering function which will search data in column four between two values */
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = $('#min').val();
        var max = $('#max').val();
        var date = parseString( data[1] ) || 0; // use data for the age column

        if ( ( isNaN( min ) && isNaN( max ) ) ||
            ( isNaN( min ) && date <= max ) ||
            ( min <= date   && isNaN( max ) ) ||
            ( min <= date   && date <= max ) )
        {
            return true;
        }
        return false;
    }
);

$(document).ready(function() {
    var table = $('#example').DataTable();

    // Event listener to the two range filtering inputs to redraw on input
    $('#min, #max').keyup( function() {
        table.draw();
    } );
} );