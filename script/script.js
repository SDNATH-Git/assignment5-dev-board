document.getElementById('btn-1').addEventListener('click',function(){
    this.disabled = true;
    alert('Board updated successfully');

const assigned = inputValue('assigned');
const navbar = inputValue('navbar');

if(assigned > 0){
    const sum = assigned -1;
    setInnerText('assigned',sum);

    const total = navbar + 1;
    setInnerText('navbar',total);

    // New Section add 
    const addSection = document.getElementById('section');
    const title1 = document.getElementById('title1').innerText;
    const div = document.createElement('div');
    div.classList.add('bg-[#F4F7FF]','p-2', 'rounded-xl','mt-2') 
    div.innerHTML=`
    <h1>You have completed the task ${title1} at <span id="time"> </span> </h1> 
    `
    addSection.appendChild(div); 

}
else{
    alert('Board updated not successfully');
}


})