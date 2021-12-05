
var products = {
    'white': {
        'plain': {
            'unit_price': 5.12,
            'photo': './img/v-white.jpg' 
        },
        'printed': {
            'unit_price': 8.95,
            'photo': './img/v-white-personalized.jpg' 
        }
    },
    
    'colored': {
        'plain': {
            'unit_price': 6.04,
            'photo': './img/v-color.jpg' 
        },
        'printed': {
            'unit_price': 9.47,
            'photo': './img/v-color-personalized.png' 
        }
    }
}


// Search params

var search_params = {
    "quantity": "",
    "color": "",
    "quality": "",
    "style": "",
}


// Additional pricing rules:

// 1. The prices above are for Basic quality (q150). 
// The high quality shirt (190g/m2) has a 12% increase in the unit price.

// 2. Apply the following discounts for higher quantities: 
    // 1: above 1.000 units - 20% discount
    // 2: above 500 units - 12% discount
    // 3: above 100 units - 5% discount


// Solution:

$(function(){
    updateParameter();
    //color and quality
    $(".option-button").click(function() {
        var artOfButton = $(this).parent().attr("id");
        var selectedButton = "#" + artOfButton + " .option-button";
        $(selectedButton).removeClass("selected");
        $(this).addClass("selected");
        updateParameter();
    });


    //color 
/*     $("#color .option-button").click(function() {
        if (search_params["color"] != this.id) {
            $("#color .option-button").toggleClass("selected");         
        }
        updateParameter();        
    }); */
  
    //style
    $("#style").change(function() {
        updateParameter();
    });

    //quantity
    $("#quantity").change(function() {
        updateParameter();
    });

    //quality
/*     $("#quality .option-button").click(function() {
        if (search_params["quality"] != this.innerText) {
            $("#quality .option-button").toggleClass("selected");         
        } 
        updateParameter();        
    }); */

    function updateParameter() {
        search_params["color"] = $("#color .option-button.selected").attr("id");
        search_params["style"] = $("#style").val();
        search_params["quantity"] = parseInt($("#quantity").val());
        search_params["quality"] = $("#quality .option-button.selected").text();

        console.log(search_params);
        updateWebsite();
    };

    function updateWebsite() {
        //Ausgabe der eingestellten Werte

        var styleSelector = "#style option[value=" + search_params.style + "]";
        $("#result-style").text( $(styleSelector).text() );
        $("#result-quality").text(search_params["quality"]);
        var colorSelector = "#" + search_params["color"]
        $("#result-color").text( $(colorSelector).text() );
        $("#result-quantity").text(search_params["quantity"]);

        // Bild anpassen
        var fotoUrl = products[search_params["color"]][search_params["style"]]["photo"];
        $("#photo-product").attr("src", fotoUrl);

        // Preis berechnen und ausgeben
        var unitPrice = products[search_params["color"]][search_params["style"]]["unit_price"];
        if (search_params["quality"] == "High (190g / m2)") {
            unitPrice = unitPrice *1.12;
        }

        if (search_params["quantity"] >= 1000) {
            unitPrice = unitPrice * 0.80;
        } else if (search_params["quantity"] >= 500) {
            unitPrice = unitPrice * 0.88;
        } else if (search_params["quantity"] >= 100) {
            unitPrice = unitPrice * 0.95;
        }

        var totalPrice = unitPrice * search_params["quantity"];
        totalPrice = totalPrice.toFixed(2);
        $("#total-price").text(totalPrice);
    }
});

