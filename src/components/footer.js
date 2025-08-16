import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from "react-redux";

const FooterSection = styled.footer`
    width: calc(100% - 40px);
    overflow: hidden;
    margin: 20px 20px 0 20px;
    >div:first-child{
        display: flex;
        flex-wrap: wrap-reverse;
        justify-content: space-between;
        align-items: start;
        >div:first-child{
            >*{
                margin: 20px 0;
            }
            >p:first-child{
                color: var(--main-color);
                font-size: 34px;
            }
            >p:last-child{
                color: var(--main-color);
                span{
                    font-size: larger;
                    font-weight: bold;
                    cursor: pointer;
                }
            }
            
        }
        >div:last-child{
            width: fit-content;
            h3{
                color: var(--main-color);
                font-size: 14px;
                font-weight: normal;
            }
            p, h3{
                font-family: Cabinetgrotesk Variable, Georgia, sans-serif;
            }
            >div{
                margin: 30px 0;
                p{
                    padding: 10px 0;
                    font-size: 20px;
                    i{
                        margin-right: 10px;
                    }
                }
            }
            .social{
                display: flex;
                justify-content: space-between;
                gap: 20px;
                padding: 10px 0;
                width: fit-content;
                i{
                    font-size: 30px;
                    cursor: pointer;
                    transition: 300ms;
                }
                .fa-square-facebook:hover{
                    color: blue;
                }
                .fa-snapchat:hover{
                    color: yellow;
                }
                .fa-instagram:hover{
                    color: violet;
                }
                .fa-whatsapp:hover{
                    color: green;
                }
                
            }
        }
    }
    >div:last-child{
        font-size: 17vw;
        margin-top: 50px;
        text-align: center;
        i{
            margin-left: 10px;
        }
    }
`;

function Footer(){
      
    const navigate = useNavigate();

    let languageIndexState = useSelector((state)=> state.languageIndex.value );

    return (
        <FooterSection>
            <div>
                <div>
                    <p>
                        {["Experience Peace of Mind with Meqati.","Erleben Sie Seelenfrieden mit Meqati."][languageIndexState]}
                        <br/>
                        <br/>
                        {["We are committed to guiding you","Wir sind bestrebt, Sie zu begleiten"][languageIndexState]} 
                        <br/>
                        {["through every step of your Umrah with care,","durch jeden Schritt Ihrer Umrah mit Sorgfalt,"][languageIndexState]}
                        <br/>
                        {["sincerity, and excellence.","Aufrichtigkeit und Exzellenz."][languageIndexState]}
                    </p>
                    <button onClick={()=>{
                        navigate("/#trips");
                    }}>
                        {["our packages","Unsere Pakete"][languageIndexState]}
                        <i class="fa-solid fa-location-dot" style={{marginLeft : "10px"}}></i>
                    </button>
                    <p>@2025 <span onClick={()=>{ navigate("/"); }}>Meqati</span> {["All right reserved | Developed by","Alle Rechte vorbehalten | Entwickelt von"][languageIndexState]} <span onClick={()=>{ window.open("https://github.com/bouiali","_blank"); }}>Bouiali</span></p>
                </div>
                <div>
                    <div>
                        <h3>{["PHONE","TELEFON"][languageIndexState]}</h3>
                        <p>
                            <i class="fa-solid fa-phone" />
                            +49 17 647 002 304
                        </p>
                    </div>
                    <div>
                        <h3>{["WORK HOURS","ARBEITSZEITEN"][languageIndexState]}</h3>
                        <p>
                            <i class="fa-regular fa-clock" />
                            24/7
                        </p>
                    </div>
                    <div>
                        <h3>{["OUR SOCIAL","UNSERE SOZIALEN"][languageIndexState]}</h3>
                        <div className='social'>
                            <i class='fa-brands fa-square-facebook' onClick={()=> window.open("https://www.facebook.com/profile.php?id=61578053849145","_blank")}></i>
                            <i class='fa-brands fa-snapchat' onClick={()=> window.open("https://www.snapchat.com/add/altawbahvoyages?share_id=whY_CWdrYYY&locale=ar-EG","_blank")}/>
                            <i class='fa-brands fa-instagram' onClick={()=> window.open("https://www.instagram.com/altawbah.voyages","_blank")}/>
                            <i class='fa-brands fa-whatsapp' onClick={()=> window.open("https://wa.me/+33774822082","_blank")}/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                MEQATI
                <i class="fa-solid fa-location-dot"></i>
            </div>
        </FooterSection>
    );
}
export default Footer;