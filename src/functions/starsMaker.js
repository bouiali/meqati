function starsMaker(stars){
    let array = [];
    for(let i=0;i<5;++i){
        if(i<stars)
            array.push(<i class="fa-solid fa-star" style={{color:"rgb(255, 212, 59)", fontSize:"20px"}}></i>);
        else
            array.push(<i class="fa-regular fa-star" style={{color:"rgb(255, 212, 59)", fontSize:"20px"}}></i>);
    }
    return array;
}

export default starsMaker;