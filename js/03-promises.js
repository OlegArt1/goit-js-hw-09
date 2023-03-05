// Promises

//import { Notifix } from "../node_modules/notiflix-Notiflix-6936fff/src/notiflix.min.js";

//import "../node_modules/notiflix-Notiflix-6936fff/dist/notiflix-block-aio-3.2.6.min.js";

//import "../node_modules/notiflix-Notiflix-6936fff/dist/notiflix-notify-aio-3.2.6.min.js";

//import "../node_modules/notiflix-Notiflix-6936fff/dist/notiflix-report-aio-3.2.6.min.js";

//import "../node_modules/notiflix-Notiflix-6936fff/dist/notiflix-confirm-aio-3.2.6.min.js";

//import "../node_modules/notiflix-Notiflix-6936fff/dist/notiflix-loading-aio-3.2.6.min.js";

//import "../node_modules/notiflix-Notiflix-6936fff/src/notiflix.min.css";

const body = document.querySelector("body");

const formElement = document.querySelector(".form");

const labelElement = document.querySelector("label");

const inputFirstElement = formElement.firstElementChild.firstElementChild;

const inputMiddleElement = formElement.firstElementChild.nextElementSibling.firstElementChild;

const inputLastElement = formElement.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild;

const buttonElement = formElement.lastElementChild;

formElement.style.marginTop = '20px';

formElement.style.marginLeft = '20px';

function createPromise (position, delay)
{
    const shouldResolve = Math.random() > 0.3;

    const promise_result = new Promise ((resolve, reject) =>
    {
        setTimeout(() =>
        {
            if (shouldResolve)
            {
                resolve({ position, delay });
            }
            else
            {
                reject({ position, delay });
            }

        }, delay);
    });
    return promise_result;
}
buttonElement.addEventListener('click', (e) =>
{
    e.preventDefault();

    let first_delay = Number.parseInt(inputFirstElement.value);

    let delay_step = Number.parseInt(inputMiddleElement.value);

    let amount_ = Number.parseInt(inputLastElement.value);

    if (inputFirstElement.value !== '' && inputMiddleElement.value !== '' && inputLastElement.value !== '')
    {
        if (first_delay > 0 && delay_step > 0 && amount_ > 0)
        {
            body.setAttribute("onload", Notiflix.Notify.warning('Start promise!'));
    
            console.log("\nStart promise!");

            let i = 0;
        
            while (i < amount_)
            {   
                createPromise(amount_, delay_step)

                    .then(({ position, delay }) =>
                    {
                        body.setAttribute("onload", Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay} ms;`));

                        console.log(`\nFulfilled promise ${position} in ${delay} ms;`);
                    })
                    .catch(({ position, delay }) =>
                    {
                        body.setAttribute("onload", Notiflix.Notify.failure(`Rejected promise ${position} in ${delay} ms;`));

                        console.log(`\nRejected promise ${position} in ${delay} ms;`);
                    });

                i += 1;
            }
            console.log("\nDelay first = " + first_delay + " ms; " + "Delay step = " +
        
                        delay_step + " ms; " + "Amount = " + amount_ + "; ");
        }
        else
        {
            body.setAttribute("onload", Notiflix.Notify.failure('Error! Please fill in all the fields!'));

            console.log("\nОшибка! Введите правильные значения!");
        }
    }
    else
    {
        body.setAttribute("onload", Notiflix.Notify.failure('Error! Please fill in all the fields!'));

        console.log("\nОшибка! Введите правильные значения!");
    }
    formElement.reset();
});