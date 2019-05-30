export default class Spotaroom {

    // Singleton Pattern, once it's only needed 1 instance
    static instance = null;

    static getInstance() {
        if(this.instance === null)
            this.instance = new Spotaroom();
        return this.instance;          
    }

    //method to make the request to the SpotaRoom API
    getHomeCards(){
        return (
            fetch('https://cors-anywhere.herokuapp.com/https://frontend-interview.spotahome.com/api/homecards')
                    .then(data => data.json())
                    .catch(err => "error")
        );
    }
}