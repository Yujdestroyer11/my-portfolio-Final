import newprofile from "../../public/images/Newprofile.jpg"

export default function Hero() {
    return (       
        <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-sm-11 col-lg-6">
                <img src={newprofile} class="d-block mx-lg-auto img-fluid img-thumbnail" alt="People at the construction site" width="700" height="500" loading="lazy" />            
            </div>
            <div class="col-lg-6">
                <h1 class="display-2 fw-bold text-body-emphasis lh-1 mb-3">Hi, I'm <span class="text-primary-emphasis">Yuj!</span></h1>
                <p class="text-white lead fs-4 fw-bold">
                Front-end Developer | Web Designer               
                </p>
                <p class="text-white lead fs-4">
                 Coffee Lover | Gamer               
                </p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <a href="#contact"><button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Get in touch</button></a> 
                </div>
            </div>
            </div>
        </div>    
    )
};