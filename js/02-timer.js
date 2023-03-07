// Timer

const body = document.querySelector("body");

const dataTimePicker = document.querySelector("#datatime-picker");

const dataStart = document.querySelector("button[data-start]");

const dataStop = document.querySelector("button[data-stop]");

const dataDays = document.querySelector("span[data-days]");

const dataHours = document.querySelector("span[data-hours]");

const dataMinutes = document.querySelector("span[data-minutes]");

const dataSeconds = document.querySelector("span[data-seconds]");

const timerElement = document.querySelector(".timer");

const fieldElement = document.querySelector(".field");

const labelElement = document.querySelector(".label");

dataStop.setAttribute('disabled', false);

dataTimePicker.setAttribute('type', 'datetime-local');

dataTimePicker.style.width = '160px';

dataTimePicker.style.height = '25px';

dataTimePicker.style.marginTop = '20px';

dataTimePicker.style.marginLeft = '40px';

dataStart.style.width = '120px';

dataStart.style.height = '30px';

dataStart.style.marginLeft = '10px';

dataStart.style.marginRight = '10px';

dataStop.style.width = '120px';

dataStop.style.height = '30px';

timerElement.style.display = 'flex';

timerElement.style.alignItems = 'center';

timerElement.style.justifyContent = 'left';

timerElement.style.paddingTop = '30px';

timerElement.style.marginLeft = '80px';

let timer = null;

dataStart.addEventListener('click', () =>
{
    body.setAttribute("onload", Notiflix.Notify.warning('Старт таймер!'));

    console.log("\nСтарт таймер!");

    timer = setInterval(()=>
    {
        const data_picker = dataTimePicker.value;
        
        const time_reset = new Date(data_picker) - new Date();

        const time_convert = convertMs(time_reset.toString());
        
        const days_text = addLeadingZero(time_convert.days);

        const hours_text = addLeadingZero(time_convert.hours);
        
        const minutes_text = addLeadingZero(time_convert.minutes);
        
        const seconds_text = addLeadingZero(time_convert.seconds);
        
        if (days_text !== 'NaN' || hours_text !== 'NaN' || minutes_text !== 'NaN' || seconds_text !== 'NaN')
        {
            if (days_text[0] !== '-' || hours_text[0] !== '-' || minutes_text[0] !== '-' || seconds_text[0] !== '-')
            {
                dataStart.setAttribute('disabled', false);
    
                dataStop.removeAttribute('disabled');

                dataDays.textContent = days_text;

                dataHours.textContent = hours_text;

                dataMinutes.textContent = minutes_text;

                dataSeconds.textContent = seconds_text;
            
                console.log("\nDays - " + days_text + "; " + "Hours - " + hours_text + "; " +

                            "Minutes - " + minutes_text + "; " + "Seconds -  " + seconds_text + "; ");
            }
            else
            {
                body.setAttribute("onload", Notiflix.Notify.failure('Ошибка! Выберите дату в календаре на следующие дни!'));

                console.log("\nОшибка! Выберите дату в календаре на следующие дни!");

                clearInterval(timer);
            }
        }
        else
        {
            body.setAttribute("onload", Notiflix.Notify.failure('Ошибка! Выберите дату в календаре!'));

            console.log("\nОшибка! Выберите дату в календаре!");

            clearInterval(timer);
        }

    }, 1000);
});
dataStop.addEventListener('click', () =>
{
    dataStart.removeAttribute('disabled');
    
    dataStop.setAttribute('disabled', false);

    body.setAttribute("onload", Notiflix.Notify.warning('Стоп таймер!'));

    console.log("\nСтоп таймер!");

    clearInterval(timer);
});
/*
const optionData =
{
    enableTime: true,

    dateFormat: "Y-m-d H:i",
}
*/
const options =
{
    enableTime: true,
    
    time_24hr: true,
    
    defaultDate: new Date(),
    
    minuteIncrement: 1,
    
    onClose(selectedDates)
    {
        console.log(selectedDates[0]);
    }
}
function convertMs (ms)
{
    const second = 1000;
    
    const minute = second * 60;
    
    const hour = minute * 60;
    
    const day = hour * 24;

    const days = Math.floor(ms / day);
    
    const hours = Math.floor((ms % day) / hour);

    const minutes = Math.floor(((ms % day) % hour) / minute);
    
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
function addLeadingZero (value)
{
    return value.toString().padStart(2, '0');
}