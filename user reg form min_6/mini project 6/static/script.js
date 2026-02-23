function Guvi(name,email,aadhar,type){
    this.name=name
    this.email=email
    this.aadhar=aadhar
    this.type=type
}

//add the method to validate the prototype
function Display() {}

Display.prototype.validate=function(guvi){
    
    if (guvi.name.length < 2 || guvi.email.length < 5 || guvi.aadhar.length !== 12 || isNaN(guvi.aadhar)) {
    return false;
    }
    else{
        return true
    }
}

Display.prototype.clear=function(){
    let guviForm=document.getElementById('registerform');
    guviForm.reset();
}

Display.prototype.add=function(covid){
    tableBody=document.getElementById("tableBody");
    let uilist=`<tr>
    <td>${covid.name}</td>
    <td>${covid.email}</td>
    <td>${covid.aadhar}</td>
    <td>${covid.type}</td>
    </tr>`
    tableBody.innerHTML += uilist
}

Display.prototype.show=function(type,displaymessage){
    let message=document.getElementById("alertmessage");
    message.innerHTML = `<div class="alert alert-${type}" role="alert">
  ${displaymessage}
</div>`;


setTimeout(function(){
    message.innerHTML='';
},3000)
}
//mainfunction
let guviForm=document.getElementById('registerform');
guviForm.addEventListener('submit',guviFormSubmit)

function guviFormSubmit(e){
    console.log("form is getting submitted")
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let aadhar=document.getElementById('aadhar').value
    let male=document.getElementById('male')
    let female=document.getElementById('female')

    let type;
    if(male.checked){
        type=male.value
    }
    else if (female.checked){
        type=female.value
    }

    console.log(name,email,aadhar,male,female)
    e.preventDefault()//will not refersh the page automatically

    let data=new Guvi(name,email,aadhar,type);
    console.log(data)
    let display=new Display()
    if(display.validate(data)){
        display.add(data);
        display.clear();
        display.show('success',"Registration is succesfull")
    }
    else{
        display.show('danger',"Registration is failed fill the form properly")
    }
}
