         var register = document.querySelector("#register");
         var wrapper = document.querySelector(".wrapper_1");
         
         register.addEventListener("click",(e)=>{
            wrapper.classList.toggle('active');
            fullName.value = "";
            email.value = "";
            telephone.value = "";

         })
         var male = document.getElementById("radiobox1");
         var female = document.getElementById("radiobox2");
         var myLab = document.getElementById("mylabel8")
         const myLabel = document.getElementById("mylabel7");
         const nextBtn = document.getElementById("next");
         const prevBtn = document.getElementById("prev");
         var form_1 = document.querySelector(".wrapper_1");
         var form_2 = document.querySelector(".wrapper_2");
        nextBtn.addEventListener("click", ()=>{
        if(fullName.value != ""  && email.value != "" && telephone.value != ""){
            form_2.style.display = "block";
            form_1.style.display = "none";
            myLabel.innerHTML = "";
            !male.checked;
            !female.checked;
            
        }
        else{
            form_1.style.display = "block";
            form_2.style.display = "none";
            myLabel.innerHTML =   "** pls reconfirm your entries before submission **";
            myLabel.style.color = "red";           
        }
        })
        prevBtn.addEventListener("click", ()=>{
            if(form_2.style.display === "block"){
                form_1.style.display = "block";
                form_2.style.display = "none";
                myLab.innerHTML = "";
                !male.checked;
                !female.checked;
            }
            else{
                form_2.style.display = "block";
                form_1.style.display = "none";
            }
    })
         
         
            var fullName, male, female, age, feedMe,
                myForm, email, Submit, telephone, myLab;
                
                myLab = document.getElementById("mylabel8")
                fullName = document.getElementById("texbox1");
                email = document.getElementById("email");
                telephone = document.getElementById("phone");
                male = document.getElementById("radiobox1");
                female = document.getElementById("radiobox2");
                age = document.getElementById("myage");
                feedMe = document.getElementById("mytextmgs");
                myForm = document.getElementById("contactme");
                const message = document.getElementById("message");
                const myFors = document.getElementById("forms");
                Submit = document.getElementById("mybtns");
           function myForms() {
            myFors.style.display = "none";
           } 

        Submit.addEventListener("click",(e)=>{  
            e.preventDefault(); 
                if(message.value != "" && (male.checked && !female.checked  || female.checked && !male.checked)) {
                feedMe.style.display = "block";
                myForm.style.display = "none";
                
            }
            
                else{
                    feedMe.style.display = "none";
                    myForm.style.display = "block";
                    myLab.innerHTML =   "** pls reconfirm your entries before submission **";
                    myLab.style.color = "red";
                    
                }
                    
            });
        
        
        // function EmailSent() {
        //     Email.send({
        //         Securedtoken: "79deb844-1ad9-415e-88e0-173cdccfa539",
        //         To : "raymond.ogaraga@gmail.com",
        //         From : document.getElementById("email").value,
        //         Subject : " Visitor's contact Message",
        //         Body : "Name:" + document.getElementById("texbox1").value
        //             + "<br> email:" + document.getElementById("email").value
        //             + "<br> Phone:" + document.getElementById("phone").value
        //             + "<br> Gender:" + document.getElementById("radiobox1").value
        //             + "<br> Gender:" + document.getElementById("radiobox2").value
        //             + "<br> Message:"+ document.getElementById("message").value
        //             + "<br> Country/Continent:" + document.getElementById("selectme").value
                 
            
        //         }).then(
                
        //            message => alert("Form successfully sent as shown by the feedback message on the page!")                           
            
        // )};
        