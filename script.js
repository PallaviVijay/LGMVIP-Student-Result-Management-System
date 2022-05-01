const data = [
    {
        name: "PALLAVI PATIL",
        regno: "72165653",
        NUMBER_THEORY:"65",
        ELECTRONIC_CIRCUIT:"55",
        DIGITAL_CIRCUIT: "75",
        DATA_STRUCTURES: "65"
    },
    {
        name: "SHREYA PAWAR",
        regno: "72165654",
        NUMBER_THEORY:"75",
        ELECTRONIC_CIRCUIT:"75",
        DIGITAL_CIRCUIT: "65",
        DATA_STRUCTURES: "85"
    },
    {
        name: "AYUSH MAHAJAN",
        regno: "721656535",
        NUMBER_THEORY:"71.66",
        ELECTRONIC_CIRCUIT:"55",
        DIGITAL_CIRCUIT: "85",
        DATA_STRUCTURES: "75"


    }
]

const results = document.getElementById('res')
const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML ="<h3>" + "NUMBER_THEORY : " + data[i].NUMBER_THEORY +"</h3>" + "<h3>" + "ELECTRONIC_CIRCUIT : " 
            + data[i].ELECTRONIC_CIRCUIT +"</h3>" +"<h3>" + "DIGITAL_CIRCUIT : " + data[i].DIGITAL_CIRCUIT +"</h3>"+
            "DATA_STRUCTURES : " +data[i].DATA_STRUCTURES + "</h3>"
            return;
        }
    }
    results.innerHTML = "<h1>" + "Not available" + "</h1>" 




})
