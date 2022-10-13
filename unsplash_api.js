class UnsplashApi{
    constructor(){
        this.baseURL='https://api.unsplash.com';
        this.clientID='Client-ID PASTE_YOUR_KEY_HERE'; // example:  'Client-ID xc9923mfdZj45ls1mn3uz4E60FGr'
        this.axiosNesne=axios.create({
            baseURL:this.baseURL,
            headers:{
                Authorization:this.clientID
            },
            params:{
                query:'animal',
                count:1
            }
        });
    }

    async getRandomPhoto(){
       try {
            const photoResponse=await this.axiosNesne.get('/photos/random');
            console.log(photoResponse.data[0].urls.regular);
            return photoResponse.data[0].urls.regular;
       } catch (error) {
            console.log(error);
            return 'https://www.linkpicture.com/q/getkey.png';
       }
    }
} 
export default function randomPhoto(){
    const photo = new UnsplashApi().getRandomPhoto();
    return photo;
}