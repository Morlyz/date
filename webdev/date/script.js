let toDay = new Date();
let months = ['january', 'february', 'March', 'april', 'May', 'june', 'july', 
               'august', 'september', 'october', 'november', 'december'];
let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

setInterval(() => {
        const day = document.getElementById('day');
        const month = document.getElementById('month');
        const year = document.getElementById('year');


        day.innerHTML = (toDay.getDate()<10?"0":"") + toDay.getDate() + 
                        `<span class="days"> ${days[toDay.getDay()]} </span>` ;
        month.innerHTML = months[toDay.getMonth()];
        year.innerHTML = toDay.getFullYear();  
}, 1000);

