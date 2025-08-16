import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import trips from '../data/trips.json';
import { useDispatch, useSelector } from "react-redux";
import { setLanguageIndex } from "../state manegement/languageIndexSlice";


const HeaderContainer = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 144px;
    padding: 40px 20px;
    animation: nav-down 1 4s linear;
    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    img{
        height: 60px;
        cursor: pointer;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    li, .select, select{
        color: var(--main-color);
        font-weight: 500;
        cursor: pointer;
    }
    .sections{
        justify-content: space-between;
        gap: 20px;
        border-left: 2px solid var(--main-color);
        padding: 10px 20px;
        margin-left: 20px;
        li{
            position: relative;
            padding: 0;
        }
    }
    .select{
        position: relative;
        >div{
            display: none;
            flex-direction: column;
            gap: 20px;
            position: absolute;
            width: max-content;
            top: 100%;
            left: 0;
            padding: 20px 10px;
            z-index: 3;
            background-color: var(--main-color);
            border-radius: 10px;
            a{
                color: var(--background-color);
                font-weight: 500;
                font-size: large;
                cursor: pointer;
            }
        }
        &:hover{
            >div{
                display: flex;
            }
        }
    }
    select{
        background-color: transparent;
        border: none;
        font-size: 17px;
        option{
            color: var(--main-color);
        }
    }
    .stack{
        display: none;
        span{
            display: block;
            height: 2px;
            width: 30px;
            background-color: var(--main-color);
        }
    }
    @media (max-width: 1075px){
        >div{
            width: 100%;
        }
        .sections{
            display: none;
            flex-direction: column;
            gap: 20px;
            position: absolute;
            width: 90%;
            top: 100%;
            left: 0;
            padding: 20px 0;
            z-index: 3;
            background-color: var(--main-color);
            margin-left: 5%;
            border-radius: 10px;
            li, .select, select{
                color: var(--background-color);
                padding-left: 20px;
                width: fit-content;
                &::before{
                    width: 0;
                }
            }
        }
        .select{
            position: relative;
            >div{ 
                background-color: var(--background-color);
                a{
                    color: var(--main-color);
                   
                }
            }
        }
        .stack{
            display: flex;
            flex-direction: column;
            gap: 7px;
            &:hover{
                .section{
                    display: flex;
                }
            }
        }
    }
    @media (min-width: 1076px){
        .sections{
            display: flex !important;
        }
    }
    @keyframes nav-down{
        0%{
            padding-top: 0;
            opacity: 0;
        }
        75%{
            padding-top: 0;
            opacity: 0;
        }
        100%{
            padding-top: 40px;
            opacity: 1;
        }
    }
`;

function Header(){

    let tripsData = trips.trips;

    let languageIndexState = useSelector((state)=> state.languageIndex.value );
    
    let dispatch = useDispatch();

    return(
        <HeaderContainer>
             <div>
                <Link to={"/"}>
                    <img src="images/logo.png" alt="logo"></img>
                </Link>
                <nav>
                    <ul className="sections">
                        <NavLink  to={"/"}>
                            <li>{["Home", "Startseite"][languageIndexState]}</li>
                        </NavLink>
                        <div className="select">
                            Omra
                            <i class="fa-solid fa-chevron-down" style={{marginLeft: "5px", fontSize: "10px"}}></i>
                            <div>
                                {
                                    tripsData != null ? (
                                        tripsData.map((el, index)=>{
                                            if(el.start_from_price != "BIENTÔT"){
                                                return(
                                                    <Link to={"/tripDetails"} state={{trip : el, tripIndex : index}}>
                                                        {["From","aus"][languageIndexState]} {el.from}, {el.month}
                                                    </Link>
                                                );
                                            }
                                        })
                                    ):null
                                }
                            </div>
                        </div>
                        <NavLink  to={"/Hajj2026"}>                        
                            <li>Hajj 2026</li>
                        </NavLink>
                        <Link to={"/#contact"}>
                            <li>{["Contact us","Kontakt"][languageIndexState]}</li>
                        </Link>
                        <NavLink to={"/AboutUs"}>
                            <li>{["About us", "über uns"][languageIndexState]}</li>
                        </NavLink>
                        <select value={languageIndexState} onChange={(e)=> dispatch(setLanguageIndex(+e.target.value)) }>
                            <option value={0}>English</option>
                            <option value={1}>Deutsch</option>
                        </select>
                    </ul>
                    <ul className='stack' onClick={()=>{
                        const sections = document.querySelector(".sections")
                        if(sections.style.display === "flex"){
                            sections.style.display = "none";
                        }else{
                            sections.style.display = "flex";
                        }
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </ul>
                </nav>
            </div>
        </HeaderContainer>
    );
}

export default Header;
