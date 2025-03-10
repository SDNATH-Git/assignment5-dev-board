function inputValue(id){
    const value = document.getElementById(id).innerText ;
    const convertValue = parseFloat(value);
    return convertValue;
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value ; 
}


// weak-month-year
const date = new Date();  
const optionsWeekday = { weekday: 'short' };
const optionsDate = { month: 'long', day: '2-digit', year: 'numeric' };

const weekday = date.toLocaleDateString('en-US', optionsWeekday); 
const fullDate = date.toLocaleDateString('en-US', optionsDate).replace(',', '');

document.getElementById('weekday').innerText = `${weekday} ,`;
document.getElementById('year').innerText = fullDate;

// update time
function updateTime() {
    const date = new Date();
    return date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    });

}







