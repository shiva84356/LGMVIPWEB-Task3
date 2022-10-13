*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
body{
    background-color: #efefef;
}
h1{
    text-align: center;
    margin-bottom: 1em;
}
.container{
    /* max-width: 100%; */
    display:grid;
    grid-template-columns: 1fr;
    gap:2em;
}

.registrationcontainer{
    font-weight: 700;
    justify-self: center;
    width:auto;
    height:auto;
    padding:1em;
    display:grid;
    grid-template-columns: 1fr;
    gap:1em;
   
    font-size: 20px;
    background-color: #DCD9D4;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(0,0,0,0.50) 100%), radial-gradient(at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 50%);
    background-blend-mode: soft-light,screen;
    box-shadow: rgba(116, 56, 56, 0.4) 0px 2px 4px, rgba(120, 55, 55, 0.3) 0px 7px 13px -3px, rgba(75, 42, 42, 0.2) 0px -3px 0px inset;
}
.registrationcontainer input{
    padding:0.5em;
    outline:none;
    font-weight: 700;
}
.submit{
    width:50%;
    padding:0.5em;
    color: black;
    font-weight: 800;
}
.output{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:0.5em;
    justify-items: center;
}
.addData{
    text-align: center;
    width:70%;
    height:auto;
    padding:1em;
    background-color: #e8dcc8;
    background-image: linear-gradient(to bottom, rgba(233, 216, 216, 0.5) 0%, rgba(0,0,0,0.50) 100%), radial-gradient(at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 50%);
    background-blend-mode: soft-light,screen;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
.output .addData img{
    width:150px;
    height:150px;
    
}
/Responsiveness/
@media all and (max-width:900px){
    .output{
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:0.5em;
        justify-items: center;
        
    }

}
@media all and (max-width:400px){
    .container{
        padding:0.4em;
    }
    .registrationcontainer{
        padding:0.5em;
    }
    .output{
        display:grid;
        grid-template-columns: 1fr;
        gap:0.5em;
        justify-items: center;
    }
}