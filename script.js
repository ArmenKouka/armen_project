//responsive menu
let menu = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navmenu'); 
menu.onclick = () => {

    navbar.classList.toggle('active');
    if(navbar.classList.contains('active')){
        document.getElementById('blur').style.filter='blur(2px)';
        menu.className="gg-close";
        
    }
    else{
        document.getElementById('blur').style.filter='none';
        menu.className="gg-menu";
    
    }
}

let date_form = document.querySelector('#date');
let date_info = document.querySelector('#day');
let text_field1 = document.querySelector('.text_field1');
date_form.onclick = () => {
    date_info.classList.toggle('active')

}

window.onclick=function()
{
    const menu1=document.getElementById('menu-icon')
    let search=document.getElementById("search_text")
    let sBtn=document.getElementById("searchbtn")
    let iconbag=document.getElementById("iconBag")
    let iconprofile=document.getElementById("iconProfile")
    let email_verify=document.getElementById("email_verify")
    const poplog = document.getElementById('login');
    const ldisplay = window.getComputedStyle(poplog).display;
    const popsign= document.getElementById('signup');
    const sdisplay= window.getComputedStyle(popsign).display;
    var login_form = document.getElementById('login_form');
    var signup_form = document.getElementById('signup_form');
    var status = document.getElementById('status_login');
    let bt_log=document.getElementById("submit_login");
    let bt_sign=document.getElementById("submit_signup");
    var bt_hover= document.head.appendChild(document.createElement("style"));


    document.onmousedown=function()
    {
        
        if (navbar.classList.contains('active')){
        
            navbar.classList.toggle('active');
            document.getElementById('blur').style.filter='none';
            menu1.className="gg-menu";
        }
        if(search.classList.contains("search-active")){
            search.classList.remove("search-active")
            iconbag.classList.remove("icons-a")
            iconprofile.classList.remove("icons-a")
            
        }
        if (ldisplay=='block'){
            poplog.style.display='none';
            popsign.style.display='none';
            document.getElementById('filter').style.filter='';
            document.getElementById('filter').style.backdropFilter='';
            document.getElementById('filter2').style.filter='';
            document.getElementById('filter2').style.backdropFilter='';
            document.body.style.overflow='';
            document.getElementById('header').style.filter='';
            document.getElementById('header').style.position='';
            status.innerHTML="";
            bt_log.disabled = true;
            bt_log.style.cursor="default";
            bt_log.style.opacity="0.8";
            bt_hover.innerHTML="#submit_login:hover {border-color: white;}";
            login_form.reset();
           
                }
        if (sdisplay=='block' ){
            popsign.style.display='none';
            poplog.style.display='none';
            document.getElementById('filter').style.filter='';
            document.getElementById('filter').style.backdropFilter='';
            document.getElementById('filter2').style.filter='';
            document.getElementById('filter2').style.backdropFilter='';
            document.body.style.overflow='';
            document.getElementById('header').style.filter='';
            document.getElementById('header').style.position='';
            bt_sign.disabled = true;
            bt_sign.style.cursor="default";
            bt_sign.style.opacity="0.8";
            bt_hover.innerHTML="#submit_signup:hover {border-color: white;}";
            signup_form.reset();
        }

    }

    menu1.addEventListener('mousedown',event => event.stopPropagation())
    search.addEventListener('mousedown',event => event.stopPropagation())
    sBtn.addEventListener('mousedown',event => event.stopPropagation())
    poplog.addEventListener('mousedown',event => event.stopPropagation())
    popsign.addEventListener('mousedown',event => event.stopPropagation())
    email_verify.addEventListener('mousedown',event => event.stopPropagation())
};


//Search

function search(){
let search=document.getElementById("search_text");
let iconbag=document.getElementById("iconBag");
let iconprofile=document.getElementById("iconProfile");

if(search.classList.contains("search-active")){
    search.classList.remove("search-active")
    iconbag.classList.remove("icons-a")
    iconprofile.classList.remove("icons-a")
}
else if(search.classList.contains("search")){
        search.classList.add("search-active")
        iconbag.classList.add("icons-a")
        iconprofile.classList.add("icons-a")
        
    }
}



function poplogin(){
    let bt=document.getElementById("submit_signup");
    var bt_hover= document.head.appendChild(document.createElement("style"));

    if (localStorage.getItem("text")!="login"){
        document.getElementById('signup').style.display='none';
        document.getElementById('login').style.display='block';
        document.getElementById('filter').style.filter='brightness(40%)';
        document.getElementById('filter').style.backdropFilter='brightness(80%)';
        document.getElementById('filter2').style.filter='brightness(40%)';
        document.getElementById('filter2').style.backdropFilter='brightness(80%)';
        document.getElementById('header').style.filter='brightness(40%)';
        document.getElementById('header').style.position='static';
        document.getElementById("signup_password").type="password";
        document.getElementById("signup_pass").className = "fa-solid fa-eye";
        document.getElementById("login_password").type="password";
        document.getElementById("login_pass").className = "fa-solid fa-eye";
        document.getElementById('signup_form').reset();
        document.body.style.overflow='hidden';
        window.scrollTo(0,0);
        bt.disabled = true;
        bt.style.cursor="default";
        bt.style.opacity="0.8";
        bt_hover.innerHTML="#submit_signup:hover {border-color: white;}";
    }
    else if(localStorage.getItem("text")=="login"){
        window.location.replace('http://localhost/website_project1/profile.php')
    }

    
}


function popsign(){
    let bt=document.getElementById("submit_login");
    var bt_hover= document.head.appendChild(document.createElement("style"));
    var status = document.getElementById('status_login');
    document.getElementById('login').style.display='none';
    document.getElementById('signup').style.display='block';
    document.getElementById('filter').style.filter='brightness(40%)';
    document.getElementById('filter').style.backdropFilter='brightness(80%)';
    document.getElementById('filter2').style.filter='brightness(40%)';
    document.getElementById('filter2').style.backdropFilter='brightness(80%)';
    document.getElementById('header').style.filter='brightness(40%)';
    document.getElementById('header').style.position='static';
    document.getElementById('login_form').reset();
    document.body.style.overflow='hidden';
    window.scrollTo(0,0);
    bt.disabled = true;
    bt.style.cursor="default";
    bt.style.opacity="0.8";
    bt_hover.innerHTML="#submit_login:hover {border-color: white;}";
    status.innerHTML="";
}





/*scroll up */
function scrollUp(){
    window.scrollTo({top: 0,behavior:"smooth" })
    

}

const scroll_up = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100){
        scroll_up.classList.add("active");
    }
    else{
        scroll_up.classList.remove("active");
    }

})

//Products
var path=window.location.pathname;
var page=path.split("/").pop();

if(page=="sproduct.html"){
var Mainimg = document.getElementById("main-img");
var Smallimg = document.getElementsByClassName("small-img");

Smallimg[0].onclick = function (){
    Mainimg.src = Smallimg[0].src;
}
Smallimg[1].onclick = function (){
    Mainimg.src = Smallimg[1].src;
}
Smallimg[2].onclick = function (){
    Mainimg.src = Smallimg[2].src;
}
Smallimg[3].onclick = function (){
    Mainimg.src = Smallimg[3].src;
}
Smallimg[4].onclick = function (){
    Mainimg.src = Smallimg[4].src;
}
}

username = addEventListener('input', check_signup);
password = addEventListener('input', check_signup);
email = addEventListener('input' ,check_signup);
function check_signup(){
    var check="true";
    //username checker:
    let username = document.getElementById("username");
    var name1= document.head.appendChild(document.createElement("style"));
    var name2= document.head.appendChild(document.createElement("style"));

    if (username.value.length < 4){
        name1.innerHTML="#name span::before {background: brown;}";
        name2.innerHTML="#name input:valid ~ label, #name input:focus ~ label  {color: brown;}";
        check="false";
    }else{
        
        name1.innerHTML="#name span::before {background: green;}";
        name2.innerHTML="#name input:valid ~ label, #name input:focus ~ label  {color: green;}";
    }



    //password checker:
    let password = document.getElementById("signup_password");
    var pass1= document.head.appendChild(document.createElement("style"));
    var pass2= document.head.appendChild(document.createElement("style"));    

    if (password.value.length < 8){
        pass1.innerHTML="#pass span::before {background: brown;}";
        pass2.innerHTML="#pass input:valid ~ label, #pass input:focus ~ label  {color: brown;}";
        check="false";
    }else{
        
        pass1.innerHTML="#pass span::before {background: green;}";
        pass2.innerHTML="#pass input:valid ~ label, #pass input:focus ~ label  {color: green;}";
    }


    //email checker:
    let email = document.getElementById("email");
    var email_error= document.getElementById("email_error");
    var mail1= document.head.appendChild(document.createElement("style"));
    var mail2= document.head.appendChild(document.createElement("style"));
    var email_text = email_error.innerText || email_error.textContent;
    email_error.innerHTML = email_text;  
    var regExp_email= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


    if (!(email.value.match(regExp_email))&&(email.value.length>0)){
        email_error.innerHTML="Please enter a valid email address";
        mail1.innerHTML="#mail span::before {background: brown;}";
        mail2.innerHTML="#mail input:valid ~ label, #mail input:focus ~ label  {color: brown;}";
        email_error.style.display="block";
        check="false";
    }else if(email.value.length==0){
        mail1.innerHTML="#mail span::before {background: brown;}";
        mail2.innerHTML="#mail input:valid ~ label, #mail input:focus ~ label  {color: brown;}";
        email_error.style.display="none";
        check="false";

    }else{
        mail1.innerHTML="#mail span::before {background: green;}";
        mail2.innerHTML="#mail input:valid ~ label, #mail input:focus ~ label  {color: green;}";
        email_error.style.display="none";
    }

    //phone checker:
    let phone_number = document.getElementById("phone_number");
    var phone_error= document.getElementById("phone_error");
    var phone1= document.head.appendChild(document.createElement("style"));
    var phone2= document.head.appendChild(document.createElement("style"));
    var phone_text = phone_error.innerText || phone_error.textContent;
    phone_error.innerHTML = phone_text;  
    var regExp_phone= /^\d{10}$/;


    if (!(phone_number.value.match(regExp_phone))&&(phone_number.value.length>0)){
        phone_error.innerHTML = "Please enter a valid phone number";
        phone1.innerHTML="#phone span::before {background: brown;}";
        phone2.innerHTML="#phone input:valid ~ label, #phone input:focus ~ label  {color: brown;}";
        phone_error.style.display="block";
        check="false";
    }else if(phone_number.value.length==0){
        phone1.innerHTML="#phone span::before {background: brown;}";
        phone2.innerHTML="#phone input:valid ~ label, #phone input:focus ~ label  {color: brown;}";
        phone_error.style.display="none";
        check="false";
    }else{
        phone1.innerHTML="#phone span::before {background: green;}";
        phone2.innerHTML="#phone input:valid ~ label, #phone input:focus ~ label  {color: green;}";
        phone_error.style.display="none";
    }
    //date checker:
    let day = document.getElementById("day");
    var date1= document.head.appendChild(document.createElement("style"));
    var date2= document.head.appendChild(document.createElement("style"));  
    var today = new Date();
    var today_dd = today.getDate();
    var today_mm = today.getMonth() ; 
    var today_yyyy = today.getFullYear();
    today =  today_mm  + today_dd + today_yyyy ;
    var user_date=new Date(day.value);
    var user_dd = user_date.getDate();
    var user_mm = user_date.getMonth(); 
    var user_yyyy = user_date.getFullYear();
    user_date =  user_mm + user_dd + user_yyyy;
    

    year=today_yyyy-user_yyyy;

    if((year>16)&&(year<110)){
        date1.innerHTML="#date span::before {background: green;}";
        date2.innerHTML="#date input:valid ~ label, #date input:focus ~ label  {color: green;}";
        date_error.style.display="none";


    }
    else if((year==16)&&user_mm>=today_mm){
        if(user_dd>=today_dd){
            date1.innerHTML="#date span::before {background: green;}";
            date2.innerHTML="#date input:valid ~ label, #date input:focus ~ label  {color: green;}";
            date_error.style.display="none";
            
        }
    }

    else if (day.value.length<=0){
        date1.innerHTML="#date span::before {background: brown;}";
        date2.innerHTML="#date input:valid ~ label, #date input:focus ~ label  {color: brown;}";
        date_error.style.display="none";
        check="false";

    }
    else {
        date1.innerHTML="#date span::before {background: brown;}";
        date2.innerHTML="#date input:valid ~ label, #date input:focus ~ label  {color: brown;}";
        date_error.style.display="block";
        check="false";

    }
   

/*check for valid input*/
let bt=document.getElementById("submit_signup");
var bt_hover= document.head.appendChild(document.createElement("style"));
if (check=="true"){
    bt.disabled = false;
    bt.style.cursor="pointer";
    bt.style.opacity="1";
    bt_hover.innerHTML="#submit_signup:hover {border-color: brown;}";

}
else if(check=="false"){
    bt.disabled = true;
    bt.style.cursor="default";
    bt.style.opacity="0.8";
    bt_hover.innerHTML="#submit_signup:hover {border-color: white;}";
}

}

password_login = addEventListener('input', check_login);
email_login = addEventListener('input' ,check_login);

function check_login(){
    check_l="true";
//password checker:
    let password = document.getElementById("login_password");
  
    if (password.value.length == 0 ){
        check_l="false";    
    }

//email checker:
    let email = document.getElementById("login_email");


    if (email.value.length == 0){
        check_l="false";
    

    }

/*check for valid input*/
    let bt=document.getElementById("submit_login");
    var bt_hover= document.head.appendChild(document.createElement("style"));
    if (check_l=="true"){
        bt.disabled = false;
        bt.style.cursor="pointer";
        bt.style.opacity="1";
        bt_hover.innerHTML="#submit_login:hover {border-color: brown;}";

    }
    else if(check_l=="false"){
        bt.disabled = true;
        bt.style.cursor="default";
        bt.style.opacity="0.8";
        bt_hover.innerHTML="#submit_login:hover {border-color: white;}";
    }
}
code_verify = addEventListener('input', check_verify);
function check_verify(){
    let code = document.getElementById("code");    
    let bt=document.getElementById("submit_email");
    var bt_hover= document.head.appendChild(document.createElement("style"));

    if (code.value.length>0){
        bt.disabled = false;
        bt.style.cursor="pointer";
        bt.style.opacity="1";
        bt_hover.innerHTML="#submit_email:hover {border-color: brown;}";
        

    }
    else{
        bt.disabled = true;
        bt.style.cursor="default";
        bt.style.opacity="0.8";
        bt_hover.innerHTML="#submit_email:hover {border-color: white;}";
    }

}

function signup_pass(){
    var pass = document.getElementById("signup_password");
    var icon = document.getElementById("signup_pass")
    if (pass.type=="password"){
        pass.type="text";
        icon.className = "fa-solid fa-eye-slash";
    }else{
        pass.type="password";
        icon.className = "fa-solid fa-eye";
    }

}

function login_pass(){
    var pass = document.getElementById("login_password");
    var icon = document.getElementById("login_pass")
    if (pass.type=="password"){
        pass.type="text";
        icon.className = "fa-solid fa-eye-slash";
    }else{
        pass.type="password";
        icon.className = "fa-solid fa-eye";
    }

}


function signout(){
    localStorage.removeItem("text");
    $.ajax({
        type: "GET",
        url: "logout.php",
        data: {h:"kot"},
        succes : function(){
            location.reload();
        }
    });
    window.location.replace('http://localhost/website_project1/index.html');

}

const search_products = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = storeitems.getElementsByTagName("h2");

    for (var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];
        if(match){
            let textvalue = match.textContent || match.innerHTML;

            if (textvalue.toLocaleUpperCase().indexOf(searchbox)> -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";

            }
        }

    }

}

function  loading_login(){
    let submit_login=document.getElementById("submit_login");
    submit_login.innerHTML ='<i  class="fa fa-spinner fa-spin"></i>';
    
}

function  loading_signup(){
    let submit_signup=document.getElementById("submit_signup");
    submit_signup.innerHTML ='<i  class="fa fa-spinner fa-spin"></i>';
}

function  loading_verify(){
    let submit_email=document.getElementById("submit_email");
    submit_email.innerHTML ='<i  class="fa fa-spinner fa-spin"></i>';
}


