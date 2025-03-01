
// Display color change button
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F5A623', '#8E44AD', '#3498DB', '#E74C3C'];
document.getElementById('colorButton').addEventListener('click', function() {
    const section = document.getElementById('allsection');
    
    // Generate a random index to select a color
    const randomIndex = Math.floor(Math.random() * colors.length);
    
    // Change the background color of the section
    section.style.backgroundColor = colors[randomIndex];
});

// Clear-btn
document.getElementById('Clear-btn').addEventListener('click',function(){
    document.getElementById('section').innerHTML = '';
})
