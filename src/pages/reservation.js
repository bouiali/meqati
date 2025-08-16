import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import observer from "../functions/observer";
import Header from "../components/header";
import { useSelector } from "react-redux";

const ReservationContainer = styled.div`
    section{
        height: fit-content;
        display: flex;
        justify-content: space-around;
    }
    h2{
        font-size: 7vw;
        font-weight: normal;
        text-align: center;
        margin-bottom: 20px;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: fit-content;
        margin: auto;
        >div, >input , textarea{
            display: flex;
            justify-content: space-between;
            gap: 10px;
            flex-wrap: wrap;
            width: 100%;
            input{
                flex: 1;
            }
        }
        input, textarea, select{
            padding: 10px 5px;
            resize: none;
            border: none;
            border-radius: 10px;
            background-color: var(--input-background-color);
            &:focus{
                outline: none;
            }
        }
    }
`;

function Reservation(){

    const {type, bed, price} = useLocation().state;

    let [personNum, setPersonNum] = useState(1);

    let languageIndexState = useSelector((state)=> state.languageIndex.value );

    useEffect(()=>{

        window.scrollTo(0, 0);

        let chamberType = document.getElementById("chamberType");
        switch(bed){
            case "4":
                chamberType.value = "Q";
                break;
            case "3":
                chamberType.value = "T";
                break;
            case "2":
                chamberType.value = "D";
                break;
        }

        document.querySelectorAll("section").forEach((e, i)=>{
            observer.observe(e);
        });

    },[])

    return(
        <>
            <Header></Header>
            <ReservationContainer>
                <section>
                    <div>
                        <h2>{["START YOUR JOURNEY","BEGINNEN SIE IHRE REISE"][languageIndexState]}</h2>
                        <form onSubmit={
                            async (e)=>{

                                document.querySelector(".loadingBackground").style.display = "flex";

                                e.preventDefault();

                                const formData = new FormData();
                                formData.append("reservation.PackageType", `${type}, ${document.getElementById("chamberType").value} .`);
                                for(let i=0;i<personNum;++i){
                                    formData.append(`reservation.Persons[${i}].Gender`, document.querySelectorAll("#maleFemale")[i].value);
                                    formData.append(`reservation.Persons[${i}].FirstName`, document.querySelectorAll("#firstName")[i].value);
                                    formData.append(`reservation.Persons[${i}].LastName`, document.querySelectorAll("#lastName")[i].value);
                                    formData.append(`reservation.Persons[${i}].BornDate`, document.querySelectorAll("#bornDate")[i].value);
                                    formData.append(`reservation.Persons[${i}].PasseportNumber`, document.querySelectorAll("#passNum")[i].value);
                                    formData.append(`reservation.Persons[${i}].PasseportExperationDate`, document.querySelectorAll("#passExp")[i].value);
                                    formData.append(`reservation.Persons[${i}].Passeport`, document.querySelectorAll("#passeport")[i].files[0]);
                                }
                                formData.append("reservation.PhoneNumber", document.getElementById("tel").value);
                                formData.append("reservation.Email", document.getElementById("email").value);
                                formData.append("reservation.WheelChairPusher", document.getElementById("wheelchair").checked.toString());
                                formData.append("reservation.TrainBooking", false);
                                formData.append("reservation.Notes", document.getElementById("notes").value || "no notes");

                                await fetch("https://altawbahapi.onrender.com/reserve", {
                                    method: "POST", 
                                    body: formData
                                }).then(response => response.text())
                                .then(text =>{
                                    alert("reservation recu, nous allons vous repondre tres prochainement");
                                    window.open("/","_self");
                                })
                                .catch(error => alert(error));
                                
                                document.querySelector(".loadingBackground").style.display = "none";
                                
                            }
                        }>
                            <div>
                                <div>
                                    <label htmlFor="personNum">{["Number of persones","Anzahl der Personen"][languageIndexState]} : </label>
                                    <select id="personNum" placeholder="" required onChange={()=>{
                                        setPersonNum(+document.getElementById("personNum").value);
                                    }}>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="chamberType">{["Type of room","Zimmertyp"][languageIndexState]} : </label>
                                    <select id="chamberType" required>
                                        <option value={"D"}>{["Quadruple room","Vierbettzimmer"][languageIndexState]}</option>
                                        <option value={"T"}>{["Triple room","Dreibettzimmer"][languageIndexState]}</option>
                                        <option value={"Q"}>{["Quadruple room","Vierbettzimmer"][languageIndexState]}</option>
                                    </select>
                                </div>
                            </div>
                            {
                                [""].map(()=>{
                                    let forms = [];
                                    for(let i=0; i<personNum; ++i){
                                        forms.push(
                                            <>
                                                <p>Person {i+1} :</p>
                                                <div>
                                                    <select id="maleFemale" name="maleFemale">
                                                        <option value={"male"}>{["Mr","Herr"][languageIndexState]}</option>
                                                        <option value={"female"}>{["Mrs","Frau"][languageIndexState]}</option>
                                                    </select>
                                                    <input type="text" id="firstName" name="firstName" placeholder={["First name","Vorname"][languageIndexState]} required></input>
                                                    <input type="text" id="lastName" name="lastName" placeholder={["Last name","Nachname"][languageIndexState]} required></input>
                                                </div>
                                                <div>
                                                    <input type="text" id="passNum" name="passNum" placeholder={["Number of passeport","Reisepassnummer"][languageIndexState]} required></input>
                                                    <div>
                                                        <label htmlFor="passExp">{["Passport expiration date","Ablaufdatum des Reisepasses"][languageIndexState]} : </label>
                                                        <input type="date" id="passExp" required></input>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <label htmlFor="bornDate">{["Date of birth","Geburtsdatum"][languageIndexState]} : </label>
                                                        <input type="date" id="bornDate" required></input>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="passeport">{["Passeport","Reisepass"][languageIndexState]} : </label>
                                                        <input type="file" id="passeport" name="passeport" accept=".pdf, image/*" required></input>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    }
                                    return forms;
                                })
                            }
                            <div>
                                <input type="tel" id="tel" name="tel" placeholder={["Phone number","Telefonnummer"][languageIndexState]} required></input>
                                <input type="email" id="email" name="email" placeholder="Email" required></input>
                            </div>
                            <div>
                                <div style={{flex:"1"}} >
                                    <input type="checkbox" id="wheelchair" name="wheelchair"></input>
                                    <label htmlFor="wheelcheer"> {["Wheelchair pusher","Rollstuhlschieber"][languageIndexState]} </label>
                                </div>
                            </div>
                            <textarea placeholder={["Notes","Anmerkungen"][languageIndexState]} id="notes" name="notes"></textarea>
                            <button type="submit">{["Send","Schicken"][languageIndexState]}</button>
                        </form>
                    </div>
                </section>
            </ReservationContainer>
        </>
    );
}

export default Reservation;