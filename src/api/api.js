import axios from "axios";

const instance = axios.create({
    headers: {
        "API-KEY": "1aa8adee-73fb-438e-ac1b-309fb909785c"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
});

export const usersAPI = {
    getUsers(pageSize = 1, currentPage = 10)  {
        return instance.get(`/users?count=
    ${pageSize}&page=${currentPage}`,).then(response => response.data);
    },

    deleteFollowing(id) {
        return instance.delete(`/follow/${id}`,
        ).then(response => response.data)
    },

    postFollowing(id) {
        return instance.post(`/follow/${id}`,
            {},).then(response => response.data)
    },
}

export const profileAPI = {
    getProfileUser(userId) {
        return instance.get(`/profile/${userId}`).then(
            response => response.data
        )
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`).then(
            response => response.data
        )
    },
    updateStatus(newStatus) {
        return instance.put(`/profile/status`, {status: newStatus}).then(
            response => response.data
        )
    }
}

export const authAPI = {
    getAuthMe() {
        return instance.get(`/auth/me`,
        ).then(response => response.data)
    },
    login(email, password, rememberMe) {
        return instance.post(`/auth/login`, {email, password, rememberMe}).then(
            response => response.data
        )
    },
    logout() {
        return instance.delete(`/auth/login`).then(
            response => response.data
        )
    }
}
