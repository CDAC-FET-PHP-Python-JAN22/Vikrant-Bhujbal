const search = document.querySelector('#searchy');
const vegetable = document.querySelector('#inputVeggi');

search.addEventListener('click',function() {
    console.log("Searching");
    console.log(vegetable.value);
    console.log(vegetable.value.toLowerCase());

    if(vegetable.value.toLowerCase() === 'celery root' || vegetable.value.toLowerCase() === 'spaghetti squash' || vegetable.value.toLowerCase() === 'killer mushrooms') {
       console.log('You entered correct data');
    } else{
       
        alert('You entered a wrong Vegetable');
    }

})

