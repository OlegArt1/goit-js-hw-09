// Color-Switcher

const body = document.querySelector("body");

const buttonStart = document.querySelector("button[data-start]");

const buttonStop = document.querySelector("button[data-stop]");

const widthContainer = (window.innerWidth - (150 * 2) - 20) / 2;

const heightContainer = (window.innerHeight - 40) / 2;

buttonStart.style.width = '150px';

buttonStart.style.height = '40px';

buttonStart.style.marginTop = (heightContainer - 50) + 'px';

buttonStart.style.marginButton = heightContainer + 'px';

buttonStart.style.marginLeft = widthContainer + 'px';

buttonStart.style.marginRight = '20px';

buttonStop.style.width = '150px';

buttonStop.style.height = '40px';

let timer = null;

buttonStop.setAttribute('disabled', false);

buttonStart.addEventListener('click', () =>
{
    buttonStart.setAttribute('disabled', false);
    
    buttonStop.removeAttribute('disabled');
    
    timer = setInterval(() =>
    {
        body.style.backgroundColor = getRandomHexColor();

    }, 1000);

    console.log("\nСтарт генератор фона!");
});
buttonStop.addEventListener('click', () =>
{
    const fon_element = body.style.backgroundColor;
    
    buttonStart.removeAttribute('disabled');
    
    buttonStop.setAttribute('disabled', false);
    
    clearInterval(timer);

    console.log("\nСтоп генератор фона!\n\nФон сайта - ", fon_element + ";");
});
function getRandomHexColor()
{
    return `#${ Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0) }`;
}