
const body = document.querySelector("body");
const startButton = document.querySelector("button[data-start]");
const stopButton = document.querySelector("button[data-stop]");
startButton.style.marginTop = '20px';
startButton.style.marginLeft = '20px';
let timer = null;

stopButton.setAttribute('disabled', false);
startButton.addEventListener('click', () =>
{
    startButton.setAttribute('disabled', false);
    stopButton.removeAttribute('disabled');
    timer = setInterval(() =>
    {
        body.style.backgroundColor = getRandomHexColor();

    }, 1000);

    body.setAttribute("onload", Notiflix.Notify.success('Старт генератор фона!'));
    console.log("\nСтарт генератор фона!");
});
stopButton.addEventListener('click', () =>
{
    const fon_element = body.style.backgroundColor;
    startButton.removeAttribute('disabled');
    stopButton.setAttribute('disabled', false);
    clearInterval(timer);
    console.log("\nСтоп генератор фона!\n\nФон сайта - ", fon_element + ";");
});
function getRandomHexColor()
{
    return `#${ Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0) }`;
}