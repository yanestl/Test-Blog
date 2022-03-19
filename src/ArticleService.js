export default class ArticleService {
    /** @var {ArticleEntity[]} */
    #articles
    get articles(){
        
    }
    constructor() {
        this.href = "https://jsonplaceholder.typicode.com/posts"

    }
    isLoaded(){
        return !!this.#articles
    }
    getById(id){
        return this.#articles?.find(item => item.id === id)
    }
    getAll(){
        return this.#articles
    }

    async load() {
        if(!this.#articles){
            const response = await fetch(this.href)
            const data = await response.json()
            this.#articles = data
        }
        return await this.#articles
    }

    async search(title){
        const data = await this.getAll()
        if(!title) return data
        return await data.filter(user => {
            if(user.name.toLowerCase().match(title)) return true
            return null
        })[0]

    }


}