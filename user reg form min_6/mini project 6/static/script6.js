class Guvi {
    constructor(name, email, aadhar, type) {
        this.name = name
        this.email = email
        this.aadhar = aadhar
        this.type = type
    }
}


class Display {
    add(guvi) {
        let tableBody = document.getElementById("tableBody");
        let uilist = `<tr>
    <td>${guvi.name}</td>
    <td>${guvi.email}</td>
    <td>${guvi.aadhar}</td>
    <td>${guvi.type}</td>
    </tr>`
        tableBody.innerHTML += uilist
    }

    clear() {
        let guviForm = document.getElementById('registerform');
        guviForm.reset();
    }
    validate(guvi) {
        if (guvi.name.length < 2 || guvi.email.length < 5 || guvi.aadhar.length !== 12 || isNaN(guvi.aadhar)) {
            return false;
        }
        else {
            return true
        }
    }
    show(type, displaymessage) {
        let message = document.getElementById("alertmessage");
        message.innerHTML = `<div class="alert alert-${type}" role="alert">${displaymessage}</div>`;
setTimeout(function() {
  message.innerHTML = '';
}, 3000);

    }
}


//main
let guviForm = document.getElementById('registerform')
guviForm.addEventListener('submit', guviFormSubmit)

function guviFormSubmit(e) {
    console.log("form is getting submitted")
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let aadhar = document.getElementById('aadhar').value
    let male = document.getElementById('male')
    let female = document.getElementById('female')

    let type;
    if (male.checked) {
        type = male.value
    }
    else if (female.checked) {
        type = female.value
    }

    console.log(name, email, aadhar, male, female)
    e.preventDefault()//will not refersh the page automatically

    let data = new Guvi(name, email, aadhar, type);
    console.log(data)
    let display = new Display()
    if (display.validate(data)) {
        display.add(data);
        display.clear();
        display.show('success', "Registration is succesfull")
    }
    else {
        display.show('danger', "Registration is failed fill the form properly")
    }
}
//search function
let searchForm = document.querySelector('form[role="search"]');
if (searchForm) {
searchForm.addEventListener('submit',function(e){
    e.preventDefault();
    let searchInput=searchForm.querySelector('input[type="search"]').value.toLowerCase()
    let tableRows=document.querySelectorAll("#tableBody tr");
    tableRows.forEach(row=>{
        let rowtext=row.innerText.toLowerCase();
        if (rowtext.includes(searchInput)) {
        row.style.display='';    
        }
        else{
            row.style.display='none'
        }
    })
})
}