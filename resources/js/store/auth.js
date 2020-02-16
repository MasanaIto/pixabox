import Axios from "axios"

/**
 * ログイン済みユーザーを保持する
 */
const state = {
    user: null
}

const getters = {}

/**
 * userステートの値を更新する
 */
const mutations = {
    setUser(state, user) {
        state.user = user
    }
}

/**
 * 会員登録APIを呼び出す
 */
const actions = {
    async register(context, data) {
        const response = await axios.post('/api/register', data)
        context.commit('setUser', response.data)
    },
    async login(context, data) {
        const response = await axios.post('/api/login', data)
        context.commit('setUser', response.data)
    },
    async logout(context) {
        const response = await axios.post('/api/logout')
        context.commit('setUser', null)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
