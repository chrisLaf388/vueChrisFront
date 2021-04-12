<template>
  <main class="mx-auto d-flex align-items-center">
        <div class="container login-container ">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8 login-form-1 center px-0 py-4">
                    <h3 class="text-center text-white mb-5">Rapports</h3>
                    <div id="content">
                        <div id="labels" class="d-flex justify-content-between px-1">
                            <p class="text-white">Date</p>
                            <p class="text-white">Motif</p>
                            <p class="text-white">Bilan</p>
                        </div>
                        <div>
                            <ul id="rapports" class="p-0 m-0">                               
                                <li v-for="item in info" :key="item.id">
                                    <div class="card rapports${rapport.id}">
                                        <div class="card-body d-flex justify-content-between py-0 px-1">
                                            <div class="conteneurInfos py-1 px-0">
                                                <div class="infos infos${rapport.id} d-flex justify-content-between">
                                                    <span>{{item.date}}</span>
                                                    <span>{{item.motif}}...</span>
                                                    <span>{{item.bilan}}...</span>
                                                </div>
                                            </div>
                                            <div class="boutons d_flex justify-content-end py-1 px-0">    
                                                <button class="modifier modifierRapport${rapport.id} mr-2 text-primary bg-white"><i class="fas fa-pen"></i></button>
                                                <button class="supprimer supprimerRapport${rapport.id} text-danger bg-white"><i class="fas fa-trash-alt"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="form-group d-flex justify-content-evenly mt-4">
                            <button id="creer"
                                class="d-block rounded-pill bg-transparent text-primary px-3 py-2 border-primary fs-5 ">Créer un rapport</button>
                            <select name="idRapport" id="idRapport" class="border-white rounded-pill bg-transparent text-white fs-6">
                                <option value="">--Sélectionnez un rapport--</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from "axios";

export default {
    name: "ListeRapport",
    data(){
        return {
            info: null
        }
    },
    methods:{
        listeRapport: async function () {

         const dataJson = await axios.get("http://localhost:3002/gsb/rapport", {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + window.btoa("Coco3:Coucou3_13"),
            },
            })
            .catch((e) => {
            console.log(e);
            })
            .then(response => (this.info = response));
            this.info = dataJson.data
            console.log(this.info);
        }
    },
    mounted(){
        this.listeRapport();

    }
}
</script>

<style>
main {
    width: 100%;
    height: 90vh;
}

.login-form-1 {
    background-color: rgba(0, 0, 0, 0.37);
    height: 70vh;
}

#labels {
    font-weight: bold;
    width: 60%;
}

li {
    list-style: none;
}

.infos {
    width: 71%;
}

span {
    width: 20%;
    white-space: nowrap;
    overflow: hidden;
}

.conteneurInfos {
    width: 90%;
    cursor: pointer;
}

.boutons {
    width: 10%;
}

button,
select {
    width: 30%;
}

#aucunRapport {
    width: fit-content;
    font-weight: bold;
}

#idRapport {
    border: 2px solid white;
}

#rapports {
    height: 45vh;
}

</style>