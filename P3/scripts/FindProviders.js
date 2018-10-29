document.getElementById("providers").addEventListener("submit",  (e) => {e.preventDefault(); provideprovider()}, false)

let providers = [
    {   
        provider: "hafslund",
        min: 1,
        max: 1800,
        extension: ".gif"},
    { 
        provider: "gudbrandsdal", /* Gudbrandsdal Energi */
        min: 1801,
        max: 3200,
        extension: ".png"},
    { 
        provider: "hurum",
        min: 3201,
        max: 4000,
        extension: ".png"},
    { 
        provider: "dalane",
        min:4001,
        max:5000,
        extension: ".png"},
    {   
        provider: "sognekraft",
        min:5001,
        max:6000,
        extension: ".gif"}, 
    {
        provider: "nordmore",
        min:6001,
        max: 6500,
        extension: ".png"},
    { 
        provider: "ardal",
        min:6501,
        max: 7000,
        extension: ".gif"},
    { 
        provider: "trondelag",
        min: 7001,
        max: 8000,
        extension: ".jpg"},
    { 
        provider: "bodo",
        min: 8001,
        max: 8900,
        extension: ".jpg"},
    { 
        provider: "troms",
        min: 8901,
        max: 9999,
        extension: ".png"},
]

let provideprovider = () => {
    for (i in providers){
        if (document.getElementById("postnummer").value >= providers[i].min && document.getElementById("postnummer").value <= providers[i].max){
            document.getElementById("testimage").setAttribute("src", "img/providers/" + providers[i].provider + providers[i].extension) 
            document.getElementById("testimage").style.display = "inline"
        }

    }
}