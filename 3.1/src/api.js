const baseUrl = 'http://localhost:8888/tutsplusWP/wp-json/wp/v2/';

export default class Api {

    posts(id) {
        let url = `${baseUrl}posts`;

        if (id !== undefined) {
            url += `/${id}`;
        }

        url += '?_embed';
        
        return fetch(url).then(res => res.json());
    }
}