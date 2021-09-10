import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function logInTry (user, treatSuccess, treatError) {
    axios.post(`${BASE_URL}/auth/login`, user)
        .then(treatSuccess)
        .catch(treatError);
}

function sendSignUpToServer (body, treatSuccess, treatError) {
    axios.post(`${BASE_URL}/auth/sign-up`, body)
        .then(treatSuccess)
        .catch(treatError);
}

function getHabits (token, setHabitsList) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    axios.get(`${BASE_URL}/habits`, config)
        //.then((response) => setHabitsList(response.data))
        .then((response) => setHabitsList(response.data))
        .catch(() => alert("Ocorreu algum erro!"));
}

export {
    logInTry,
    sendSignUpToServer,
    getHabits,
}