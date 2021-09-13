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
    };

    axios.get(`${BASE_URL}/habits`, config)
        .then((response) => setHabitsList(response.data))
        .catch(() => alert("Ocorreu algum erro!"));
}

function sendHabitToServer (token, newHabit, treatSuccess, treatError) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    axios.post(`${BASE_URL}/habits`, newHabit, config)
        .then(treatSuccess)
        .catch(treatError);
}

function deleteHabit (id, token, treatSuccess) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    axios.delete(`${BASE_URL}/habits/${id}`, config)
        .then(treatSuccess)
        .catch(() => alert("Ocorreu algum erro! Tente novamente."));
}

function getTodayHabits (token, setTodayHabitsList) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    axios.get(`${BASE_URL}/habits/today`, config)
        .then((response) => setTodayHabitsList(response.data))
        .catch(() => alert("Ocorreu algum erro! Tente novamente."));
}

function checkTodayHabit (id, token, treatSuccess) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    const obj = "";

    axios.post(`${BASE_URL}/habits/${id}/check`, obj, config)
        .then(treatSuccess)
        .catch(() => alert("Ocorreu algum erro! Tente novamente."));
}

export {
    logInTry,
    sendSignUpToServer,
    getHabits,
    sendHabitToServer,
    deleteHabit,
    getTodayHabits,
    checkTodayHabit
}