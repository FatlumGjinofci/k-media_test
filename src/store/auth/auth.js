import axios from 'axios'

const state = {
    token: localStorage.getItem("token") || null,
    // user: null
};

const getters = {
    // user(state) {
    //     return state.user
    // },
    loggedIn(state) {
        return state.token != null;
    }
};

const actions = {
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .post(`api/register`, {
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: data.password,
            password_confirmation: data.password_confirmation
          })
          .then(response => {
            resolve(response);
              // console.log(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
  
    destroyToken(context) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + context.state.token;
  
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios
            .post(`api/logout`)
            .then(response => {
              localStorage.removeItem("access_token");
              context.commit("destroyToken");
              resolve(response);
              //   console.log(response);
            })
            .catch(error => {
              localStorage.removeItem("access_token");
              context.commit("destroyToken");
              console.log(error);
              reject(error);
            });
        });
      }
    },
  
    login(context, credentials) {
        // console.log(credentials);
      return new Promise((resolve, reject) => {
        axios
          .post(`http://luzerner.k-medialabs.com/api/public/api/v1/login`, {
            email: credentials.user.email,
            password: credentials.user.password
          })
          .then(response => {
            const token = response.data.user.uid;
            console.log(response.data.user.uid);
  
            localStorage.setItem("token", token);
            context.commit("retreiveToken", token);
            resolve(response);
            //   console.log(response);
          })
          .catch(error => {
            reject(error);
            console.log(error);
          });
      });
    }
  };
  
  const mutations = {
    retreiveToken(state, token) {
      state.token = token;
    },
  
    destroyToken(state) {
      state.token = null;
    }
  };
  
  export default {
    state,
    getters,
    actions,
    mutations
  };
  