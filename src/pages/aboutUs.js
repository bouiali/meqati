import { useEffect } from "react";
import styled from "styled-components";
import observer from "../functions/observer"; 
import Header from "../components/header";
import { SpecialHeading } from "../globalStyles";
import { useSelector } from "react-redux";

const AboutUsContainer = styled.div`
    section{
        height: fit-content;
        p{
            line-height: 2;
        }
        span{
            font-size: 30px;
        }
    }
`;

function AboutUs(){

    let languageIndexState = useSelector((state)=> state.languageIndex.value );

    useEffect(()=>{

        window.scroll(0, 0);

        document.querySelectorAll("section").forEach((e, i)=>{
            observer.observe(e);
        });
        
    },[])

    return(
        <>
            <Header></Header>
            <AboutUsContainer>
                <section>
                    <SpecialHeading>
                        <h2>{["about us","über uns"][languageIndexState]}</h2>
                        <img src="images/line.svg"></img>
                    </SpecialHeading>
                    <p>
                        <span>{["At","In"][languageIndexState]} Meqati,</span> {["we believe that Umrah is more than a journey — it is a deeply spiritual experience. Our mission is to make your pilgrimage smooth, worry-free, and filled with meaning. With a team of dedicated professionals and years of expertise, we handle every detail — from travel arrangements to on-the-ground assistance — so you can focus on what truly matters: your worship and connection to Allah.",
                            "Wir glauben, dass die Umrah mehr als nur eine Reise ist – sie ist ein tief spirituelles Erlebnis. Unsere Mission ist es, Ihre Pilgerreise reibungslos, sorgenfrei und bedeutungsvoll zu gestalten. Mit einem Team engagierter Fachleute und langjähriger Erfahrung kümmern wir uns um jedes Detail – von der Reiseplanung bis zur Unterstützung vor Ort –, damit Sie sich auf das Wesentliche konzentrieren können: Ihre Anbetung und Ihre Verbindung zu Allah."
                        ][languageIndexState]}
                        <br/>
                        <br/>
                        {["We are committed to excellence, honesty, and personalized service, ensuring every pilgrim’s journey is comfortable, safe, and unforgettable.",
                          "Wir verpflichten uns zu Exzellenz, Ehrlichkeit und persönlichem Service und sorgen dafür, dass die Reise jedes Pilgers komfortabel, sicher und unvergesslich ist."
                        ][languageIndexState]}
                    </p>
                </section>
            </AboutUsContainer>
        </>
    );
}

export default AboutUs;