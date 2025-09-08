class Post {

    #id = null;
    #title = null;
    #content = null;

    constructor(id = null, title = null, content = null) {
        this.#id = id;  
        this.#title = title;
        this.#content = content;
    }

    getID() {
        return this.#id;
    }

    getTitle() {
        return this.#title;
    }

    getContent() {
        return this.#content;
    }   

    setID(id) {
        this.#id = id;
    }

    setTitle(title) {
        this.#title = title;
    }

    setContent(content) {
        this.#content = content;
    }

    getValues() {
        return {
            id: this.#id,
            title: this.#title,
            content: this.#content
        }
    }
}

module.exports = Post;

