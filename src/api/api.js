import axios from "axios";

const instance = axios.create({
    headers: {
        "API-KEY": "1aa8adee-73fb-438e-ac1b-309fb909785c"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
});

export const usersAPI = {
    async getUsers(pageSize = 1, currentPage = 10) {
        let response = await instance.get(`/users?count=${pageSize}&page=${currentPage}`,);
        return response.data;
    },

    async deleteFollowing(id) {
        let response = await instance.delete(`/follow/${id}`,);
        return response.data;
    },

    async postFollowing(id) {
        let response = await instance.post(`/follow/${id}`,
            {},);
        return response.data;
    },
}

export const profileAPI = {
    async getProfileUser(userId) {
        let response = await instance.get(`/profile/${userId}`);
        return response.data;
    },
    async getStatus(userId) {
        let response = await instance.get(`/profile/status/${userId}`);
        return response.data;
    },
    async updateStatus(newStatus) {
        let response = await instance.put(`/profile/status`, {status: newStatus});
        return response.data;
    }
}

export const authAPI = {
    async getAuthMe() {
        let response = await instance.get(`/auth/me`,);
        return response.data;
    },
    async login(email, password, rememberMe) {
        let response = await instance.post(`/auth/login`, {email, password, rememberMe});
        return response.data;
    },
    async logout() {
        let response = await instance.delete(`/auth/login`);
        return response.data;
    }
}
