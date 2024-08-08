const button=document.getElementById('myButton');
button.addEventListener('click',function()
{
    console.log('Button clicked');
});

const div = document.getElementById('myDiv');
        div.addEventListener('mouseover', function() {
            console.log('Mouseover');
        });

div.addEventListener('mouseout',function()
{
    console.log('Mouseout');
})

//for from
const form=document.getElementById('myForm');
form.addEventListener('submit',function(event) {
    event.preventDefault();

    const inputField=document.getElementById('inputField');
    const inputValue=inputField.value.trim();

    if (inputValue === '') {
        console.error('Input field is empty');
    } else {
        // Log the validated value
        console.log('Input value:', inputValue);
    }
    
})