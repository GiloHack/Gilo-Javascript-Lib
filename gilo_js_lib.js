class GiloJSLib{
    login(frm, btn, ajxlnk){
            frm.addEventListener("submit", (e)=>{
                e.preventDefault()
                btn.innerHTML="Processing..."
                var form_data = new FormData(frm)
                fetch(ajxlnk, {method:"POST", body:form_data})
                .then(res=>res.text())
                .then((res)=>{
                    if(res==1){
                            window.location.href="./index.php"
                    }else if(res==2){
                            alert("Email or Password incorrect")
                            btn.innerHTML="SIGN IN"
                    }else{
                        alert("Technical Error..")
                        btn.innerHTML="SIGN IN"
                    }
                })
            })   
    }

    logout(btn, ajxlnk){
            btn.addEventListener("click", ()=>{
                btn.innerHTML="Logging off..."
                fetch(ajxlnk)
                .then(res=>res.text())
                .then((res)=>{
                    if(res==1){
                            window.location.href="./sign-in.php"
                    }else{
                        alert("Technical Error..")
                        btn.innerHTML="Logout"
                    }
                })
            })
        
    }

    add_data(frm, btn, ajxlnk,rdrct){
        frm.addEventListener("submit", (e)=>{
            e.preventDefault();
            btn.innerHTML="Adding Data..."
            var form_data = new FormData(frm)
            fetch(ajxlnk,{method:"POST", body:form_data})
            .then(res=>res.text())
            .then((res)=>{
                if(res==1){
                        alert("Data Added Successfully")
                        window.location.href=rdrct
                }else{
                        alert("Technical Error"+res) 
                        window.location.reload()   
                }
            })
        })
    }

    update_data(frm, btn, ajxlnk, rdrct){
        frm.addEventListener("submit", (e)=>{
            e.preventDefault();
            btn.innerHTML="Updating Data..."
            var form_data = new FormData(frm)
            fetch(ajxlnk,{method:"POST", body:form_data})
            .then(res=>res.text())
            .then((res)=>{
                if(res==1){
                        alert("Data Updated Successfully")
                        window.location.href=rdrct
                }else{
                        alert("Technical Error"+res) 
                        window.location.reload()   
                }
            })
        })
    }

    delete_data(frm, btn, ajxlnk,rdrct){
        frm.addEventListener("submit", (e)=>{
            e.preventDefault();
            btn.innerHTML="Deleting..."
            var form_data = new FormData(frm)
            fetch(ajxlnk,{method:"POST", body:form_data})
            .then(res=>res.text())
            .then((res)=>{
                if(res==1){
                        alert("Deleted Successfully")
                        window.location.href=rdrct
                }else{
                        alert("Technical Error"+res) 
                        window.location.reload()   
                }
            })
        })
    }
}

const gilojslib = new GiloJSLib()
gilojslib.logout(document.querySelector(".logout-btn"), "./ajax/account/logout_ajax.php");