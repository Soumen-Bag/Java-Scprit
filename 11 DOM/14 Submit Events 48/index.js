//find the element
const form=document.querySelector('form');
const name=form.querySelector(" div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");
// console.log(email);//Find Value

form.addEventListener('submit',fromHandaler);

function fromHandaler(e)
{
    e.preventDefault();
    console.log("submit");
    console.log(name.value);
    console.log(email.value);
    console.log(password.value);

    // User BackEnd Save
    const userInfo= {
        name: name.value,
        email: email.value,
        password: password.value
    };

    console.log(userInfo);

    //User From Submit Korrar Por From  Ta All Empty hoye jabe
    name.value="";
    email.value="";
    password.value="";
}