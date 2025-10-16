function totup(myForm){
    let total = 0;
    for(let i = 0; i < myForm.elements.entry.length; i ++){
        console.log("total",total)
        total += parseFloat(myForm.elements.entry[i].value)}
    total = total * (1 - myFormElements.d1.value/100)
    
    document.getElementById("totalled").innerHTML = total.toFixed(2);
}