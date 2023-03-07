// Promises

const body = document.querySelector("body");

const labelElement = document.querySelector("label");

const formElement = document.querySelector("form.form");

const labelFirstElement = formElement.firstElementChild;

const labelMiddleElement = formElement.firstElementChild.nextElementSibling;

const labelLastElement = formElement.lastElementChild.previousElementSibling;

const inputFirstElement = formElement.firstElementChild.firstElementChild;

const inputMiddleElement = formElement.firstElementChild.nextElementSibling.firstElementChild;

const inputLastElement = formElement.lastElementChild.previousElementSibling.firstElementChild;

const buttonElement = formElement.lastElementChild;

formElement.style.marginTop = '40px';

formElement.style.marginLeft = '40px';

labelFirstElement.style.marginLeft = '8px';

labelMiddleElement.style.marginLeft = '8px';

labelLastElement.style.marginLeft = '8px';

buttonElement.style.marginLeft = '10px';

buttonElement.style.width = '150px';

buttonElement.style.height = '30px';

function createPromise (position, delay)
{
    const shouldResolve = Math.random() > 0.3;

    const promise = new Promise ((resolve, reject) =>
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
    return promise;
}
buttonElement.addEventListener('click', (e) =>
{
    e.preventDefault();

    let first_delay = Number.parseInt(inputFirstElement.value);

    let delay_step = Number.parseInt(inputMiddleElement.value);

    let amount = Number.parseInt(inputLastElement.value);

    if (inputFirstElement.value !== '' && inputMiddleElement.value !== '' && inputLastElement.value !== '')
    {
        if (first_delay > 0 && delay_step > 0 && amount > 0)
        {
            body.setAttribute("onload", Notiflix.Notify.warning('Start promise!'));
    
            console.log("\nStart promise!");
            
            for (let i = 1; i <= amount; i += 1)
            {
                setTimeout(() =>
                {
                    createPromise(i, first_delay += delay_step)

                        .then(({ position, delay }) =>
                        {
                            body.setAttribute("onload", Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay} ms;`));

                            console.log(`\nFulfilled promise ${position} in ${delay} ms;`);
                            
                            console.log("\nDelay first = " + first_delay + " ms; " +
                            
                                        "Delay step = " + delay_step + " ms; " + "Amount = " + amount + "; ");
                        })
                        .catch(({ position, delay }) =>
                        {
                            body.setAttribute("onload", Notiflix.Notify.failure(`Rejected promise ${position} in ${delay} ms;`));

                            console.log(`\nRejected promise ${position} in ${delay} ms;`);
                            
                            console.log("\nDelay first = " + first_delay + " ms; " +
                            
                                        "Delay step = " + delay_step + " ms; " + "Amount = " + amount + "; ");
                        });
                },
                delay_step);
            }
        }
        else
        {
            body.setAttribute("onload", Notiflix.Notify.failure('Ошибка! Введите правильные значения!'));

            console.log("\nОшибка! Введите правильные значения!");
        }
    }
    else
    {
        body.setAttribute("onload", Notiflix.Notify.failure('Ошибка! Введите правильные значения!'));

        console.log("\nОшибка! Введите правильные значения!");
    }
    formElement.reset();
});