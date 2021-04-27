import { createStore } from "vuex";

export default createStore({
    state(){
        return{
            login: localStorage.getItem("login")
        }
    },
    getters:{
        getLoginFromStore(state){
            return state.login;
        }
    },
    actions:{
        setLogin(context, login){
            context.commit('changeLogin', login);
        }
    },
    mutations:{
        changeLogin(state, login){
            state.login = login;
            localStorage.setItem("login", state.login);
        }
    }
})