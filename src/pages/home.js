import styled from 'styled-components';
import { useEffect } from 'react';
import trips from '../data/trips.json';
import Trip from '../components/trip';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import observer from "../functions/observer";
import HomeHeader from '../components/homeHeader';
import Footer from '../components/footer';
import { useSelector } from "react-redux";


const Landing = styled.section`
    position: relative;
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: 0;
    padding: 0;
    &::before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0 0 0 / 50%);
        z-index: 2;
    }
    .home_background{
        height: 100%;
        min-width: 100%;
    }
    .text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 100%;
        z-index: 2;
        animation: landing-text-animation 1 3s linear;
        h1{
            font-size: 90px;
            font-weight: normal;
        }
        p{
            font-size: 25px;
            font-weight: 500;
            line-height: 2;
        }
        i{
            font-size: 35px;
            animation: icon-grow 1 3.5s linear;
        }
        *{
            color: var(--background-color);
        }
    }
    a{
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
        z-index: 2;
        color: var(--background-color);
        animation: up-button 1 5s linear;
    }
    @media(max-width: 450px){
        .text{
            h1{
                font-size: 70px;
            }
            p{
                font-size: 20px;
            }
        }
    }
    @media(max-width: 365px){
        .text{
            h1{
                font-size: 50px;
            }
            p{
                font-size: small;
            }
        }
    }
    @keyframes landing-text-animation {
        0% {
            opacity: 0;
            i{
                font-size: 10px;
            }
        }
        66% {
            opacity: 0;
            i{
                font-size: 10px;
            }
        }
        100% { 
            opacity: 1;
            i{
                font-size: 35px;
            }
        }
    }
    @keyframes icon-grow {
        0% {
            font-size: 10px;
        }
        70% {
            font-size: 10px;
        }
        100% { 
            font-size: 35px;
        }
    }
    @keyframes up-button {
        0% {
            bottom: -20px;
        }
        80% {
            bottom: -20px;
        }
        100%{
            bottom: 20px;
        }
    }
`;

const Trips = styled.section`
    height: fit-content;
    text-align: center;
    font-family: Cabinetgrotesk Variable, Georgia, sans-serif;
    padding: 50px 20px;
    >h2{
        font-size: 16px;
        font-weight: normal;
        margin: 20px 0;
    }
    >p{
        margin: 20px 0;
        line-height: 1.5;
        font-size: 30px;
    }
    .trips_container{
        display: flex;
        justify-content: space-around;
        gap: 20px;
        flex-wrap: wrap;
    }
    >button{
        margin: 30px 0;
    }
    @media(max-width: 500px){
        >p{
            font-size: 18px;
        }
    }
`;

const Subscribe = styled.section`
    position: relative;
    color: var(--background-color);
    overflow: hidden;
    z-index: 0;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgb(0 0 0 / 50%);
        border-radius: 10px;
        z-index: 2;
    }
    img{  
        height: 100%;
        min-width: 100%;
    }
    .container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: max-content;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        text-align: center;
        z-index: 2;
        *{
            color:  var(--background-color);
        }
        h2{
            font-size: 53px;
            font-weight: normal;
        }
        p{
            line-height: 2;
            font-size: 20px;
        }
        form {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            align-items: center;
            border: 1px solid white;
            background-color: rgb(215 215 215 /40%);
            input:first-of-type{
                background-color: transparent; 
                border: none;
                width: fit-content;
                outline: none;
                font-size: large;
                &::placeholder{
                    color: var(--background-color);
                }
            }
            input:last-of-type{
                background-color: var(--main-color);
                color: var(--background-color);
                border: none;
                padding: 20px;
                cursor: pointer;
            }
            i{
                font-size: 20px;
                padding: 0 0 0 20px;
            } 
        }
    }
    @media (max-width:992px){
        .container{
            form{
                gap: 5px;
                input:first-of-type{
                    width: 150px;
                    font-size: small;
                }
                input:last-of-type{
                    padding: 20px 10px;
                }
                i{
                    padding: 0 0 0 10px;
                }
            }
        }
    }
    @media(max-width: 450px){
        .container{
            h2{
                font-size: 40px;
            }
            p{
                font-size: 20px;
            }
        }
    }
    @media(max-width: 365px){
        .container{
            h2{
                font-size: 37px;
            }
            p{
                font-size: small;
            }
        }
    }
`;

const ContactUs = styled.section`
    position: relative;    
    text-align: center;
    .contact{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: max-content;
        max-width: 100%;
        h2{
            font-size: 7vw;
            font-weight: normal;
        }
        form{
            input,textarea{
                width: 100%;
                border: none;
                height: 50px;
                margin: 20px 0;
                padding: 0 20px;
                font-size: medium;
                background-color: var(--input-background-color);
                forced-color-adjust: none;
                border-radius: 10px;
            }
            textarea{
                padding: 10px 20px;
                height: 150px;
                resize: none;
                font-size: 20px;
            }
            button{
                border: none;
                font-size: larger;
                font-weight: bold;
                width: 150px;
                height: 60px
            }
            input:focus, textarea:focus{
                outline: none;
            }
        }
    }
    @media(max-width: 719px ){
        .contact_container{
            text-align: center;
        }
    }
`;

function Home(){
    //trips
    let tripsData = trips.trips;

    //contact us
     let navigate = useNavigate();

    //hashing
    const location = useLocation();

    let languageIndexState = useSelector((state)=> state.languageIndex.value );

    useEffect(()=>{
        if(location.hash){
            const el = document.getElementById(location.hash.replace('#',''));
            if(el)
                el.scrollIntoView({behavior:"smooth"});
        }else{
            window.scrollTo(0, 0);
        }
    },[location]);

    useEffect(()=>{
        document.querySelectorAll("section").forEach((e, i)=>{
            observer.observe(e);
        });
    },[])

    return(
        <>

            <HomeHeader/>

            {/* landing */}

            <Landing>
                <img alt="landing-background" className='home_background' src="images/footer2.webp"/>
                <div className='text'>
                    <i class="fa-solid fa-location-dot"></i>
                    <h1>MEQATI</h1>
                    <p>{["Your path to the sacred house","Dein Weg zum heiligen Haus"][languageIndexState]}</p>
                </div>
                <Link to={"/#trips"}>{["our packages","Unsere Pakete"][languageIndexState]}</Link>
            </Landing>
            
            {/* trip */}

            <Trips id='trips'>
                <h2>{["PACKAGES","PAKETE"][languageIndexState]}</h2>
                <p>
                    {["Meqati — Your Trusted Partner for a Seamless and Spiritual Umrah Journey.","Meqati – Ihr zuverlässiger Partner für eine reibungslose und spirituelle Umrah-Reise."][languageIndexState]}
                    <br/>
                    {["With years of experience and dedication,","Mit jahrelanger Erfahrung und Hingabe"][languageIndexState]}
                    <br/>
                    {["we make your pilgrimage worry-free, meaningful, and memorable","machen wir Ihre Pilgerreise sorgenfrei, bedeutungsvoll und unvergesslich."][languageIndexState]}
                </p>
                <div className='trips_container'>
                    {
                        tripsData != null ? (
                            tripsData.map((el)=>{
                                return(
                                    <Trip el = {el}/>
                                );
                            })
                        ):null
                    }
                </div>
                <button onClick={()=>{navigate("/#contact")}}>{["Contact us","Kontakt"][languageIndexState]}</button>
            </Trips>

            {/* subscribe */}

            <Subscribe>
                <img src='images/footer2.webp'></img>
                <div class="container">
                    <h2>{["Stay up to date","Bleiben Sie auf dem Laufenden"][languageIndexState]}</h2>
                    <p>{["Get regular updates about upcoming events, trip planning advice and compelling stories.",
                         "Erhalten Sie regelmäßig Updates zu bevorstehenden Veranstaltungen, Tipps zur Reiseplanung und spannende Geschichten."][languageIndexState]}</p>
                    <form onSubmit={
                        async (e)=>{
                            
                            document.querySelector(".loadingBackground").style.display = "flex";

                            e.preventDefault();

                            const formData = new FormData();
                            formData.append("Email", document.getElementById("email").value);

                            await fetch("https://altawbahapi.onrender.com/subscribe",{
                                method:"POST",
                                body: formData
                            }).then(response => response.text())
                              .then(text =>{
                                alert("merci de vous etre abonne");
                                window.open("/","_self");
                            })
                            .catch(error => alert(error)); 

                            document.querySelector(".loadingBackground").style.display = "none";

                        }
                    }>
                        <i class="far fa-envelope fa-lg"></i>
                        <input type="email" id="email" placeholder={["Email","E-Mail"][languageIndexState]} required/>
                        <input type="submit" value={["Subscribe","Abonnieren"][languageIndexState]}/>
                    </form>
                </div>
            </Subscribe>        

            {/* contact us*/}

            <ContactUs id='contact'>
                <div className='contact'>
                    <h2>{["GET IN TOUCH","KONTAKT AUFNEHMEN"][languageIndexState]}</h2>
                    <form onSubmit={
                        async (e)=>{

                            document.querySelector(".loadingBackground").style.display = "flex";

                            e.preventDefault();

                            const formData = new FormData();
                            formData.append("Message.Name", document.getElementById("Name").value);
                            formData.append("Message.Email", document.getElementById("Email").value);
                            formData.append("Message.Message", document.getElementById("Message").value);
                
                            await fetch("https://altawbahapi.onrender.com/contact", {
                                method: "POST",
                                body: formData
                            }).then(response => response.text())
                                .then(text =>{
                                    alert("nous avons bien recu votre demande");
                                    window.open("/","_self");
                                })
                                .catch(error => alert(error));     

                                document.querySelector(".loadingBackground").style.display = "none";

                        }
                    }>
                        <input type='text' id="Name" name="Message.Name" placeholder='Name' required></input> 
                        <input type='email' id='Email' name="Message.Email" placeholder={['Email','E-Mail'][languageIndexState]} required></input>
                        <textarea id='Message' name="Message.Message" placeholder={['Message','Nachricht'][languageIndexState]} required></textarea>
                        <button type='submit'>{['Send','schicken'][languageIndexState]}</button>
                    </form>
                </div>
            </ContactUs>

            <Footer></Footer>
        </>
    )
}

export default Home;

