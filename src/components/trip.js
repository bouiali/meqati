import styled from "styled-components";
import { Link } from "react-router-dom";
import starsMaker from "../functions/starsMaker";
import { useDispatch, useSelector } from "react-redux";

const TripContainer = styled.div`
    position: relative;
    box-shadow: 0 2px 10px var(--main-color);
    border-radius: 5px;
    margin: 20px 0;
    padding: 10px;
    transition: 500ms;
    max-width: 380px;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--main-color);
        transition: 500ms;
    }
    &:hover{
        margin-top: 0;
        margin-bottom: 40px;
    }
    &:hover::before{
        width: 100%;
    }
    >h3{
        text-align: center;
        color: var(--main-color);
        font-size: 30px;
        font-weight: 900;
        margin: 20px 0;
    }
    img{
        width: 100%;
        border-radius: 10px;
        transition: 500ms;
    }
    .more{
        display: flex;
        justify-content: center;
        padding: 20px;
        button{
            transition: 500ms;
            z-index: 0;
            &:hover{
               
            }
        }
    }
`;

function Trip({el, index}){

    let languageIndexState = useSelector((state)=> state.languageIndex.value );

    return(
        <TripContainer>
            <h3>Omra {el.month}</h3>
            <h3 style={{fontSize : "25px", fontWeight: "normal"}}>{["From","aus"][languageIndexState]} : {el.from}</h3>
            <div style={{textAlign :"center", padding : "20px 0"}}>
                {
                    starsMaker(el.package_type)
                }
            </div>
            <img alt="trip-image" src={el.image}/>
            <h3 style={{fontSize : "35px", fontWeight: "normal"}}>{el.start_from_price}</h3>
            {
                el.start_from_price != "BIENTÔT" ?(
                    <div className='more'>
                        <Link to="/TripDetails" state={{ trip: el, tripIndex: index}}>
                            <button>Details</button>
                        </Link>
                    </div>
                ) : null
            }
        </TripContainer>
    );
}

export default Trip;