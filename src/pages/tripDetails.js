import styled from "styled-components";
import ImageSlider from "../components/imageSlider";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Price from "../components/price";
import observer from "../functions/observer";
import Path from "../components/path";
import starsMaker from "../functions/starsMaker";
import Header from "../components/header";
import { SpecialHeading } from "../globalStyles";
import { useSelector } from "react-redux";

const TripDetailsContainer = styled.div`
    section{
        height: fit-content;
    }
    h3{
        line-height: 2;
        i{
            color: var(--main-color);
            font-size: 35px;
            margin-right: 10px;
        }
    }
    p{
        font-size: medium;
        line-height: 1.5;
    }
    ul{
        padding: 20px;
        li{
            padding: 10px;
        }
    }
    .package-details{
        .summary{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            text-align: center;
            padding: 0 0 50px 0;
            h1{
                font-size: 30px;
                line-height: 1.7;
            }
        }
    }
    .package-features{
        >div:last-child{
            >div{
                padding: 20px 0;
                border-bottom: 2px solid var(--main-color);
            }
        }
    }
    .hotel-details{
        display: flex;
        padding: 20px 0;
        justify-content: space-between;
        gap: 20px;
        >div{
           width: 50%;
        }
    }
    .details{
        padding: 20px 0 20px 20px;
        >div{
            display: flex;
            align-items: baseline;
            padding: 10px 0 10px 10px;
            >i{
                color: var(--main-color);
                font-size: 25px;
                margin-right: 20px;
                width: 30px;
            }
        }
    }
    .services{
        padding: 20px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        >div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center; 
            text-align: center;
            gap: 20px;
            width: 280px;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid var(--main-color);
            border-radius: 10px;
            >i{
                color: var(--main-color);
                font-size: 40px;
            }
        }
    }
    .trip-details{
        >div{
            padding: 20px 0;
            border-bottom: 1px solid var(--main-color);
        }
        #trip-program{
            >div:last-child{
                padding: 40px 0 0 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 30px;
                >div{
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                    width: 750px;
                    h4, p{
                        text-align: center;
                    }
                    >div{
                        width: 50%;
                        img{
                            width: 100%;
                            border-radius: 10px;
                        }
                    }
                }
                >div:last-child{
                    flex-direction: row-reverse;
                }
            }
        }
    }
    .tickets{
        display: flex;
        justify-content: space-around;
        gap: 20px;
        flex-wrap: wrap;
        padding: 20px 0;
        .ticket{
            text-align: center;
            border: 1px solid var(--main-color);
            padding: 20px 10px;
            border-radius: 10px;
            h4{
                color: var(--main-color);
                font-size: 25px;
                border-bottom: 1px solid;
                padding-bottom: 20px;
            }
            .path{
                display: flex;
                justify-content: space-around;
                gap: 20px;
                flex-wrap: wrap;
                padding-top: 20px;
                border-bottom: 1px solid var(--main-color);
                p, i{
                    line-height: 2;
                    color: var(--main-color);
                }
                hr{
                    border: 1px dashed var(--main-color);
                }
                .depart, .baggage{
                    text-align: start;
                }
                .arrival{
                    text-align: end;
                }
                >div >div{
                    gap: 20px;
                }
            }
        }
    }
    #pricing{
        >div:last-child{
            display: flex;
            justify-content: space-around; 
            flex-wrap: wrap;
            gap: 35px;
            margin: 40px 0;
        }
    }
    @media(max-width: 950px){
        .hotel-details{
            flex-direction: column;
            >div{
                width: 100%;
            }
        }
        .hotel-details: nth-child(1){
            flex-direction: column-reverse;
        }
    }
    @media (max-width: 430px){
        .tickets{
            .ticket{
                padding: 20px 5px;
                P{
                    font-size: small;
                }
                .path{
                    gap: 5px;
                    >div >div{
                        gap: 10px;
                    }
                }
            }
        }
    }
    @media(max-width: 815px){
        .trip-details{
            #trip-program{
                >div:last-child{
                    >div{
                        flex-direction: column;
                        width: 100%;
                        >div{
                            width: 100%;
                        }
                    }
                    >div:last-child{
                        flex-direction: column;
                    }
                }
            }
        }
    }
`;

function TripDetails(){
    const location = useLocation();
    const {trip} = location.state;
    const ticketDetails = trip.ticket_details;

    let languageIndexState = useSelector((state)=> state.languageIndex.value );

    useEffect(()=>{

        window.scrollTo(0, 0);

        document.querySelectorAll("section").forEach((e, i)=>{
            observer.observe(e);
        });


    },[])

    let date = new Date;

    return(
        <>
            <Header></Header>
            <TripDetailsContainer>
                <section className="package-details">
                    <div className="summary">
                        <h1>
                            {["From","Aus"][languageIndexState]} {trip.from} <br/> 
                            Omra {trip.month} {date.getFullYear()} <br/>
                            {
                                starsMaker(trip.package_type)
                            }
                        </h1>
                        <button onClick={()=>document.getElementById("pricing").scrollIntoView()}>{["Book now","Jetzt buchen"][languageIndexState]}</button>
                    </div>
                </section>
                <section className="package-features">
                    <div>
                        <div className="hotel-details">
                            <div>
                                <SpecialHeading>
                                    <h2>Madinah</h2>
                                    <img src="images/line.svg"></img>
                                </SpecialHeading>
                                <div className="details">
                                    <div>
                                        <i class="fa-solid fa-hotel"></i>
                                        <p>Hotel : {trip.madinah_hotel.name}.</p>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-star"></i>
                                        <p>
                                            {["Rating","Bewertung"][languageIndexState]}  : 
                                            {
                                                starsMaker(trip.madinah_hotel.stars)
                                            }
                                        </p>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-person-walking" />
                                        <p>{["Distance","Distanz"][languageIndexState]} : {trip.madinah_hotel.distance} {["to","zum"][languageIndexState]} haram.</p>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-utensils" />
                                        <p>{["Meals","Mahlzeiten"][languageIndexState]} : {trip.madinah_hotel.meals}.</p>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-bed" />
                                        <p>{["Nights","Nächte"][languageIndexState]} : {trip.madinah_hotel.nights}.</p>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-map-location-dot"></i>
                                        <p>{["Location","Standort"][languageIndexState]} : <a href={trip.madinah_hotel.location} target="_blank">{["Click here","klicken Sie hier"][languageIndexState]}</a>.</p>
                                    </div>
                                </div>
                            </div>
                            <ImageSlider links={trip.madinah_hotel.images_paths}></ImageSlider>
                        </div>
                        <div className="hotel-details">
                            <ImageSlider links={trip.makkah_hotel.images_paths}></ImageSlider>
                            <div>
                                <SpecialHeading>
                                    <h2>Makkah</h2>
                                    <img src="images/line.svg"></img>
                                </SpecialHeading>
                                <div className="details">
                                    <div>
                                        <i class="fa-solid fa-hotel"></i>
                                        <p>Hotel : {trip.makkah_hotel.name}.</p>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-star"></i>
                                        <p>
                                            {["Rating","Bewertung"][languageIndexState]} : 
                                            {
                                                starsMaker(trip.makkah_hotel.stars)
                                            }
                                        </p>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-person-walking" />
                                        <p>{["Distance","Distanz"][languageIndexState]} : {trip.makkah_hotel.distance} {["to","zum"][languageIndexState]} haram.</p>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-utensils" />
                                        <p>{["Meals","Mahlzeiten"][languageIndexState]} : {trip.makkah_hotel.meals}.</p>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-bed" />
                                        <p>{["Nights","Nächte"][languageIndexState]} : {trip.makkah_hotel.nights}.</p>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-map-location-dot"></i>
                                        <p>{["Location","Standort"][languageIndexState]} : <a href={trip.makkah_hotel.location} target="_blank">{["Click here","klicken Sie hier"][languageIndexState]}</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="included-services">
                            <SpecialHeading>
                                <h2>{["included","inklusive"][languageIndexState]}</h2>
                                <img src="images/line.svg"></img>
                            </SpecialHeading>
                            <div className="services">
                                <div>
                                    <i class="fa-solid fa-file-lines"></i>
                                    <p>{["Visa","Visum"][languageIndexState]}</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-ticket"></i>
                                    <p>{["Flight tickets","Flugtickets"][languageIndexState]}</p>                              
                                </div>
                                <div>
                                    <i class="fa-solid fa-hotel"></i>
                                    <p>Hotels</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-bus"></i>
                                    <p>{["Modern buses for transport","Moderne Busse für den Transport"][languageIndexState]}</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-flag"></i>
                                    <p>{["Guiding in all of the voyage","Führung während der gesamten Reise"][languageIndexState]}</p>
                                    
                                </div>
                                <div>
                                    <i class="fa-solid fa-kaaba"></i>
                                    <p>{["Makkah visites","Besuche in makkah"][languageIndexState]}</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-mosque"></i>
                                    <p>{["Madinah visites","Besuche in madinah"][languageIndexState]}</p>
                                </div>
                            </div>
                            <span style={{color: "red", fontSize: "smaller"}}>
                                {["Notes","Notiz"][languageIndexState]}: 
                                <br/>
                                - {["An additional fee of €100 is applied to people holding non-European passports.",
                                    "Für Personen mit nichteuropäischen Pässen wird eine zusätzliche Gebühr von 100 € erhoben."
                                ][languageIndexState]}
                                <br/>
                                - {["Passport: valid for at least 6 months from the date of return.",
                                    "Reisepass: gültig für mindestens 6 Monate ab dem Rückreisedatum."
                                ][languageIndexState]}
                            </span>
                        </div>
                        <div id="optional-services">
                            <SpecialHeading>
                                <h2>optional</h2>
                                <img src="images/line.svg"></img>
                            </SpecialHeading>
                            <div className="services">
                                <div>
                                    <i class="fa-solid fa-wheelchair"></i>
                                    <p>{["Pusher: Possibility of reserving a pusher for people who need it to perform Umrah for €100.",
                                        "Pusher: Möglichkeit, für 100 € einen Pusher für Personen zu reservieren, die ihn für die Durchführung der Umrah benötigen."
                                    ][languageIndexState]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="trip-details" id="trip-details">
                    <div id="flight-information">
                        <SpecialHeading>
                            <h2>tickets</h2>
                            <img src="images/line.svg"></img>
                        </SpecialHeading>
                        <div className="tickets">
                            <div className="ticket">
                                <h4>Go ticket</h4>
                                {
                                    ticketDetails.go_ticket.map((path)=>Path(path))
                                }
                            </div>
                            <div className="ticket">
                                <h4>{["Return ticket","Rückfahrkarte"][languageIndexState]}</h4>
                                {
                                    ticketDetails.return_ticket.map((path)=>Path(path))
                                }
                            </div>
                        </div>
                    </div>
                    <div id="trip-program">
                        <SpecialHeading>
                            <h2>{["program","programm"][languageIndexState]}</h2>
                            <img src="images/line.svg"></img>
                        </SpecialHeading>
                        <div>
                        {
                            trip.program.map((e)=>{
                                return(
                                    <div>
                                        <div>
                                            <h4>{e.city}</h4>
                                            <br/>
                                            <br/>
                                            <p>{e.description[languageIndexState]}</p>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <h5>{["Program","Programm"][languageIndexState]} :</h5>
                                            <br/>
                                            <br/>
                                            <ul>
                                                {
                                                    e.list[languageIndexState].map((e)=>{
                                                        return(
                                                            <li>{e}</li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div>
                                            <img src={e.image}></img>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        </div>
                    </div>
                </section>
                <section id="pricing">
                    <SpecialHeading>
                        <h2>{["pricing","Preise"][languageIndexState]}</h2>
                        <img src="images/line.svg"></img>
                    </SpecialHeading>
                    <div>
                        <Price type={`${trip.from}, ${trip.date}`} chamber={["Quadruple room","Vierbettzimmer"]} bed="4" price={trip.price.quade}></Price>
                        <Price type={`${trip.from}, ${trip.date}`} chamber={["Triple room","Dreibettzimmer"]} bed="3" price={trip.price.triple}></Price>
                        <Price type={`${trip.from}, ${trip.date}`} chamber={["Double room","Doppelzimmer"]} bed="2" price={trip.price.double}></Price>
                    </div>
                </section>
            </TripDetailsContainer>
        </>
    );
}

export default TripDetails;