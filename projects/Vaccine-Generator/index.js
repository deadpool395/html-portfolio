
function myFunction() {
    
    var x = document.getElementById("myText").value;
    var d = new Date(x);
    document.getElementById("hatchDay").innerHTML =("Entered Hatch Day 🐥 is "+x+"--->"+d.toDateString());
    days = 7;

    
    //lasota
    vaccineDate = addDays(d,days);
    document.getElementById("first").innerHTML =("Lasota Vaccine 🐤 for കോഴിവസന്ത  : --->"+vaccineDate.toDateString());

    //IBD
    vaccineDate2 = addDays(vaccineDate,days);
    document.getElementById("second").innerHTML =("IBD Vaccine 🐤 for ഗംബോറോ : --->"+vaccineDate2.toDateString());


     //Second Lasota
     vaccineDate3 = addDays(vaccineDate2,days);
     document.getElementById("third").innerHTML =("Second Lasota  Vaccine 🐥 for കോഴിവസന്ത : --->"+vaccineDate3.toDateString());

     //Second IBD
     vaccineDate4 = addDays(vaccineDate3,days);
     document.getElementById("fourth").innerHTML =("Second IBD Vaccine 🐥 for ഗംബോറോ  : --->"+vaccineDate4.toDateString());


    //Fowl-pox
    
    vaccineDate5 = addDays(vaccineDate4,days=(days + 7));
    document.getElementById("fifth").innerHTML =("Fowl Pox Vaccine 💉 for ചിക്കൻ പോക്സ്: --->"+vaccineDate5.toDateString());

    //Peparassin
    vaccineDate6 = addDays(vaccineDate5,days=7);
    document.getElementById("sixth").innerHTML =("Pepparasin Vaccine for worms : --->"+vaccineDate6.toDateString());

    //R2b
    vaccineDate7 = addDays(vaccineDate6,days=7);
    document.getElementById("seventh").innerHTML =("R2B Vaccine 💉 for കോഴിവസന്ത : --->"+vaccineDate7.toDateString());

    //pepparasin
    vaccineDate8 = addDays(vaccineDate7,days=7*3);
    document.getElementById("eightth").innerHTML =("Pepparasin Vaccine for worms: --->"+vaccineDate8.toDateString());

    //second R2b
    vaccineDate9 = addDays(vaccineDate8,days=7);
    document.getElementById("nineth").innerHTML =("Second R2B Vaccine 💉 for കോഴിവസന്ത : --->"+vaccineDate9.toDateString());
    



    


    function addDays(d,days){
        
        var result = d.setDate(d.getDate() + days);
        
        return ( new Date (result) );
        
        
        
    }

    
    

  }