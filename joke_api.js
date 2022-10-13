class JokeApi{
    constructor(){
        this.baseURL='https://api.chucknorris.io';
        this.axiosNesne=axios.create({
            baseURL:this.baseURL,
        });
    }

    async getRandomJoke(){
       try {
            const jokeResponse=await this.axiosNesne.get('/jokes/random');
            console.log(jokeResponse.data.value);
            return jokeResponse.data.value;
       } catch (error) {
            console.log("Joke Api Error: ",error);
       }
    }
}

export default function randomJoke(){
    const joke =  new JokeApi().getRandomJoke();
    return joke;
}