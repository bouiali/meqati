import styled from "styled-components";
import { ParagraphHeading } from "../globalStyles";
import { useEffect, useState } from "react";
import observer from "../functions/observer";
import Header from "../components/header";

const HajjContainer = styled.div`
    p{
        padding: 20px 0;
        line-height: 2;
    }
    span{
        font-size: larger;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: fit-content;
        padding: 20px 0;
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
            &:focus{
                outline: none;
                border: 2px solid green;
            }
        }
    }
`;

function Hajj(){

    let [personNum, setPersonNum] = useState(1);

    useEffect(()=>{

        window.scrollTo(0, 0);

        document.querySelectorAll("section").forEach((e, i)=>{
            observer.observe(e);
        });

    },[])

    return(
        <>
            <Header></Header>
            <HajjContainer>
                <section>
                    <ParagraphHeading>
                        <h3>Description</h3>
                    </ParagraphHeading>
                    <p> 
                        <span>Assalamou aleykoum</span>
                        <br/>
                        <br/>
                        Nous vous remercions d’avoir choisi l’agence Altawbah Voyage pour vous accompagner au Hajj 2026.
                        <br/>
                        <br/>
                        Depuis 2021, les autorités saoudiennes ont mis en place une nouvelle organisation du Grand Pèlerinage via la plateforme Nusuk sur laquelle les futurs pèlerins doivent désormais acheter leur forfait directement auprès d’agences saoudiennes locales. Un partenariat entre ces derniers et les agences françaises a été établi afin qu’elles puissent être aux cotés des futurs pèlerins français depuis le choix du package et l’enregistrement des formalités administratives sur Nusuk jusqu’à l’encadrement tout le long du séjour.
                        <br/>
                        <br/>
                        Forts de notre expérience depuis 15 ans, nous avons sélectionné plusieurs partenaires saoudiens renommés et institués dans l’organisation du Hajj. Leurs atouts : les vols directs avec la Saudi Airlines et la qualité de leurs hôtels.
                        <br/>
                        <br/>
                        Pour consulter nos forfaits Hajj 2026, vous pouvez vous inscrire et remplir le formulaire.
                    </p>
                    <ParagraphHeading>
                        <h3>étapes</h3>
                    </ParagraphHeading>
                    <p>
                        Voici les étapes à suivre pour mener à bien votre projet de voyage :
                        <br/>
                        <br/>
                        <span>étape 1 :</span> Inscription sur la plateforme Nusuk Hajj. Cette formalité est gratuite.
                        <br/>
                        <br/>
                        <span>étape 2 :</span> Remplir le formulaire ci-dessus,
                        <br/>
                        <br/>
                        vous serez ajoutés à un groupe Télégram et Whatsapp qui vous permettront d’être tenus informés
                        <br/>
                        <br/>
                        De l’ouverture des ventes sur le site Nusuk
                        Du choix des packages sélectionnés par notre agence
                        Du déroulement de votre séjour avant et après le départ.
                        L’ Agence Altawbah voyage propose une option payante à toute personne souhaitant mandater ses démarches administratives.
                        <br/>
                        <br/>
                        Pour consulter nos forfaits Hajj 2026, vous pouvez vous inscrire et remplir le formulaire.
                    </p>
                    <ParagraphHeading>
                        <h3>Inscription</h3>
                    </ParagraphHeading>
                    <div>
                        <form onSubmit={
                            async (e)=>{

                                document.querySelector(".loadingBackground").style.display = "flex";

                                e.preventDefault();

                                const formData = new FormData();
                                formData.append("reservation.PackageType", `hajj 2026.`);
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
                                formData.append("reservation.Notes", document.getElementById("notes").value);

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
                                    <label htmlFor="personNum">Nombre de personne : </label>
                                    <select id="personNum" placeholder="" required onChange={()=>{
                                        setPersonNum(+document.getElementById("personNum").value);
                                    }}>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                    </select>
                                </div>
                            </div>
                            {
                                [""].map(()=>{
                                    let forms = [];
                                    for(let i=0; i<personNum; ++i){
                                        forms.push(
                                            <>
                                                <p>Personne {i+1} :</p>
                                                <div>
                                                    <select id="maleFemale" name="maleFemale">
                                                        <option value={"male"}>Mr</option>
                                                        <option value={"female"}>Mrs</option>
                                                    </select>
                                                    <input type="text" id="firstName" name="firstName" placeholder="Nom" required></input>
                                                    <input type="text" id="lastName" name="lastName" placeholder="Prenom" required></input>
                                                </div>
                                                <div>
                                                    <input type="text" id="passNum" name="passNum" placeholder="Numero de passeport" required></input>
                                                    <div>
                                                        <label htmlFor="passExp">Date d'experation du passeport : </label>
                                                        <input type="date" id="passExp" required></input>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <label htmlFor="bornDate">Date de naissence : </label>
                                                        <input type="date" id="bornDate" required></input>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="passeport">Passeport : </label>
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
                                <input type="tel" id="tel" name="tel" placeholder="Telephone" required></input>
                                <input type="email" id="email" name="email" placeholder="Email" required></input>
                            </div>
                            <div>
                                <div style={{flex:"1"}} >
                                    <input type="checkbox" id="wheelchair" name="wheelchair"></input>
                                    <label htmlFor="wheelcheer"> Pousseur</label>
                                </div>
                            </div>
                            <textarea placeholder="Notes" id="notes" name="notes"></textarea>
                            <button type="submit">Envoyer</button>
                        </form>
                    </div>
                </section>
            </HajjContainer>
        </>
    );
}

export default Hajj;