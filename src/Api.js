import request from './utils/request';

class Api {
    static urlAPI() {
        return "https://api-test.pebe.my.id/"
    }

    static login(email, password) {
        let path = 'login';
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            data: {
                email,
                password
            }
        })
    }
}

export default Api