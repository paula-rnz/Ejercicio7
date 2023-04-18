$(document).ready(function () {
    $('#example').DataTable({
        language : {
            url: "https://cdn.datatables.net/plug-ins/1.13.4/i18n/es-CL.json"
        },
        columnDefs: [
            {
                targets: [0],
                orderData: [0, 1],
            },
            {
                targets: [1],
                orderData: [1, 0],
            },
            {
                targets: [4],
                orderData: [4, 0],
            },
        ],
        lengthMenu: [
            [7, 14, 21, -1],
            [7, 14, 21,'Todo'],
        ],
        search: {
            // Buscar solo al presionar Enter
            return: true,
        },
    });

    $("#tituloTabla").click(function(){
        $("#tablaEnPantalla").animate({
            opacity: 'toggle',
            width: 'toggle',
        },
            "slow",
        );
        //$(".container").slideToggle("slow");
    });

    //Boton Oculto
    $("#btnMagico").click(function(){
        console.log("click");
        setTimeout(function() {
            $("#div1").fadeIn(500);
            console.log("atun");
        },1000);

        setTimeout(function() {
            $("#cajaGrande").fadeOut(2000);
            console.log("papa");
        },3000);
    });

    $("footer").mouseenter(function(){
        $(this).animate({
            height: "100px",
            fontSize : "2rem"
        },
            "fast",
        );
    });

    $("footer").mouseleave(function(){
        $(this).animate({
            height: "24px",
            fontSize : "1rem"
        },
            "fast",
        );
    });

});