import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/"

function sendSignUpToServer (body, treatSuccess, treatError) {
    axios.post(`${BASE_URL}/auth/sign-up`, body)
        .then(treatSuccess)
        .catch(treatError);
}

export {
    sendSignUpToServer,
}