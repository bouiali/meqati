import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PriceContainer = styled.div`
    text-align: center;
    h4{
        font-size: 25px;
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 20px;
        padding: 10px 0;
        p{
            font-size: 30px;
            color: var(--main-color);
        }
        p:last-child{
            color: var(--main-color);
            line-height: 0.5;
            text-align: end;
            span{
                font-size: 10px;
            }
        }
    }
    button{
        width: 100%;
    }
`;

function Price({type, chamber, bed, price}){

    let languageIndexState = useSelector((state)=> state.languageIndex.value );

    return(
        <PriceContainer>
            <h4>{chamber[languageIndexState]}</h4>
            <div>
                <p>
                    <i class="fa-solid fa-bed" />X{bed}    
                </p>
                <p>
                    {price} 
                    <br/>
                    <span>{["PER PERSON","FÜR PERSON"][languageIndexState]}</span>
                </p>
            </div>
            <Link to="/Reservation" state={{type: type, bed: bed, price: price}} style={{border: "none"}}>
                <button>{["Book now","Jetzt buchen"][languageIndexState]}</button>
            </Link>
        </PriceContainer>
    );
}

export default Price;