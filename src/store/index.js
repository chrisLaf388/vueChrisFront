import { createStore } from "vuex";

export default createStore({
    state(){
        return{
            login: ""
        }
    },
    getters:{
        getLoginFromStore(state){
            return state.login
        }
    },
    actions:{
        setLogin(context, login){
            context.commit('changeLogin', login)
        }
    },
    mutations:{
        changeLogin(state, login){
            state.login = login;
        }
    }
})