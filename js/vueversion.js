const app = Vue.createApp({
    data(){
        return {
            title: "VUE IMAGE REPLICATION",
            nav: [
                {id:0101, copy:"Home", route:"/sapp-hub/static_pages/index.html"},
                {id:0102, copy:"Vue Version", route:"/sapp-hub/static_pages/characters.html"},
                {id:0103, copy:"Legends Archive", route:"/sapp-hub/static_pages/legends.html"},
                {id:0104, copy:"Another Link", route:"/sapp-hub/static_pages/index.html"}
            ], 
            cards: 
            [
                {id:0201, shadow:"/sapp-hub/images/sillhouettes/RosterB.png", face:"/sapp-hub/images/characters/RosterB.png"},
                {id:0301, shadow:"/sapp-hub/images/sillhouettes/RosterC.png", face:"/sapp-hub/images/characters/RosterC.png"},
                {id:0401, shadow:"/sapp-hub/images/sillhouettes/RosterD.png", face:"/sapp-hub/images/characters/RosterD.png"},
                {id:0501, shadow:"/sapp-hub/images/sillhouettes/RosterE.png", face:"/sapp-hub/images/characters/RosterE.png"},
                {id:0601, shadow:"/sapp-hub/images/sillhouettes/RosterF.png", face:"/sapp-hub/images/characters/RosterF.png"},
                {id:0701, shadow:"/sapp-hub/images/sillhouettes/RosterG.png", face:"/sapp-hub/images/characters/RosterG.png"},
                {id:0801, shadow:"/sapp-hub/images/sillhouettes/RosterH.png", image:"/sapp-hub/images/characters/RosterH.png"},
                {id:0901, shadow:"/sapp-hub/images/sillhouettes/RosterI.png", face:"/sapp-hub/images/characters/RosterI.png"},
                {id:1001, shadow:"/sapp-hub/images/sillhouettes/RosterJ.png", face:"/sapp-hub/images/characters/RosterJ.png"},
                {id:1101, shadow:"/sapp-hub/images/sillhouettes/RosterK.png", face:"/sapp-hub/images/characters/RosterK.png"},
                {id:1201, shadow:"/sapp-hub/images/sillhouettes/RosterL.png", face:"/sapp-hub/images/characters/RosterL.png"},
                {id:1301, shadow:"/sapp-hub/images/sillhouettes/RosterM.png", face:"/sapp-hub/images/characters/RosterM.png"}
            ]
        }
    },
    methods: {
        
    }
})

