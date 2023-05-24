import Default from "../assets/default-avatar.jpg";

function  Suggestions (){
    const suggestion_box=<div className="data_box">
        <img src={Default} className="default_logo"/>
       <section className="data">
        <span >Anshu Meena</span>
        <span>@aianshu</span> 
        </section>
           <button className="plus">+</button>         
           <button  className="cross" >X</button>   

        </div>
 return(
    <div className="suggest_box">
        <span   className="suggest-heading">Suggestion for you</span>
        {suggestion_box}
        {suggestion_box}


    </div>
 );

}


export default Suggestions;