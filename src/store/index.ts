import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    web: 'http://127.0.0.1:8000/',
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    homePage : {
      data:[],
      searchKey:localStorage.getItem('lastSearch'),
      isLoading : false,
    }
  },
  getters: {

  },
  mutations: {

  },
  actions: {
    searchUserData: ({ state }, value) => {
      state.homePage.data = [];
      state.homePage.isLoading = true ;
      localStorage.setItem('lastSearch', value);
      state.homePage.searchKey = localStorage.getItem('lastSearch')
      if (value.length > 0) {
        axios.get(state.web + 'api/lie_user/user/search?key=' + value)
                    .then(response => {
                      state.homePage.data =  response.data;
                      state.homePage.isLoading = false;
                    })
            }else{
              state.homePage.isLoading = false;
              state.homePage.data =  [];
            }
            
      }
    },
  modules: {
  }
})
