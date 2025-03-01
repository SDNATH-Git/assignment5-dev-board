function inputValue(id){
    const value = document.getElementById(id).innerText ;
    const convertValue = parseFloat(value);
    return convertValue;
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value ; 
}