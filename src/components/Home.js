import React from 'react'

function Home() {
  return (
    <div>
     <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
  <div class="carousel-inner">
    <div class="carousel-item active" style={{height:'350px'}}>
      <img class="d-block w-100" src="images/slide1.jpg" style={{objectFit:"fill",height:'95%'}} alt="First slide"/>
    </div>
    <div class="carousel-item" style={{height:'350px'}}>
      <img class="d-block w-100" src="images/slide2.jpg" style={{objectFit:"fill",height:'95%'}} alt="Second slide"/>
    </div>
    <div class="carousel-item" style={{height:'350px'}}>
      <img class="d-block w-100" src="images/slide3.jpg" style={{objectFit:"fill",height:'95%'}} alt="Third slide"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
</div>
{/* <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner" >
      <div class="carousel-item active" style={{height:'300px'}}>
        <img src="images/slide1.jpg" style={{objectFit:"fill",height:'95%'}} alt="..."/>
      </div>
      <div class="carousel-item" style={{height:'300px'}}>
        <img src="cartempty.webp" style={{objectFit:"fill",height:'95%'}} alt="..."/>
      </div>
      <div class="carousel-item" style={{height:'300px'}}>
        <img src="images/slide1.jpg" style={{objectFit:"fill",height:'95%'}} alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div> */}
    </div> 
  )
}

export default Home
