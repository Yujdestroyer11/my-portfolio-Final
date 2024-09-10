
export default function Headline1(props) {
    return (
        <div class="container my-5">
            <div class="row featurette">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading fw-normal lh-1 kanit">{props.name}</h2>
                    <h3>Description:</h3>
                    <p class="lead rubik text-white">{props.description}</p>
                    <h3>Tools used:</h3>
                    <p class="lead rubik text-white">{props.tools}</p>
                    <h3>Link:</h3>
                 <a href="https://red-tiger.vercel.app/"><p class="lead rubik text-white">{props.href}</p></a> 
                </div>
                <div class="col-md-5 order-md-1">
                  <a href={props.href}><img class="hover-work bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={props.img} alt="" srcset="" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/></a> 
                </div>
            </div>
        </div>    
    );
}