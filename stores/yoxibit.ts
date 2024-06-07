import { defineStore } from 'pinia'

export const useYoxibitStore = defineStore('yoxibit', {
  state: () => ({
    login: false
  }),
  actions: {
    userLogin() {
      this.login = true
    },
    userLogout() {
      this.login = false
    }
  },
  getters: {
    getloginStatus: (state) => state.login
  },
  persist: {
    key: 'yoxibit',
    storage: persistedState.localStorage
  }
})
