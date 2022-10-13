import randomJoke from "./joke_api.js";
import randomPhoto from "./unsplash_api.js";

class Screen{
    constructor(){
        this.randomJokeBtn=document.querySelector('.getAJoke');
        this.randomJokeBtn.addEventListener('click',()=>this.getJoke());
    }

    async getJoke(){
        const randomImg=await randomPhoto();
        const randomJok= await randomJoke();
        
        const allResults={
            randomImg,
            randomJok
        }
        this.displayOnPage(allResults);    
    }

    displayOnPage(result){
        document.querySelector('.sonuc').innerHTML=`
        <div class="card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img src="${result.randomImg}" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 has-text-danger pb-1">${result.randomJok}</p>
            </div>
          </div>

        </div>
      </div>`
    }
}

export default function startApp(){
  new Screen();
}