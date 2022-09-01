class User {
    constructor(subscriptions){
        this.subscriptions = subscriptions;
    }
    subscribe(streamingService){
        substriptions.streamingServiceName = streamingService;
       return substriptions;
    }
}

class Substription {
    constructor (streamingService){
        this.streamingService = streamingService;
    }

    watch(showName){
        console.log(`You are watching ${showName}`)
    }
    getRecommendationTrending(){
        let mostViewedShowsOfYear = getMostViewedShowsOfYear();
        return mostViewedShowsOfYear[0];
    }
    getRecommendationByGenre(){
        let mostViewedShowsGenre = getMostViewedShowsGenre();
        return mostViewedShowsGenre[0];
    }
}

class StreamingService {
    constructor(name, shows = [], viewsByShowNames = new Map()){
        this.name = name;
        this.shows = shows;
        this.viewsByShowNames = viewsByShowNames;
    }
    addShow(newShow) {
        this.shows.push(newShow);
        return this.shows;
    }
    getMostViewedShowsOfYear(year) {
        let mapSort1 = getFilmDate();
        let resultMap = new Map();
        let i = 0;
        mapSort1.forEach((key, value) => {
            if (i < 10 && value.year === year){
                resultMap.set(key, value); 
                i++;
            }
        });
        return resultMap;
    }
    getMostViewedShowsGenre(genre) {
        let mapSort1 = getFilmGenre();
        let resultMap = new Map();
        let i = 0;
        mapSort1.forEach((key, value) => {
            if (i < 10 && value === genre){
                resultMap.set(key, value); 
                i++;
            }
        });
        return resultMap;
    }
}

class Show {
    constructor(name = [], genre = [], releaseDate = [], getGenre = new Map(), getDate = new Map(), duration = [], getDuration = new Map()) {
        this.name = name;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.getGenre = getGenre;
        this.getDate = getDate;
        this.duration = duration;
        this.getDuration = getDuration;
    }

    getFilmDuration() {
        let key = this.duration;
        let value = this.name;
        for ([key, value] of getDuration){
            this.getDuration.set(key, value);
        }
        return this.getDuration;
    }

    getFilmDate() {
        let key = this.releaseDate;
        let value = this.name;
        for ([key, value] of getDate){
            this.getDate.set(key, value);
        }
        return this.getDate;
    }

    getFilmGenre(){
        let key = this.genre;
        let value = this.name;
        for ([key, value] of getGenre){
            this.getGenre.set(key, value);
        }
        return this.getGenre;
    }
}

class Movie extends Show {

}

class Episode extends Show {
    constructor(episodes) {
        this.episodes = episodes;
    }
}

class Series extends Show {
  
}

