import firebase from 'firebase'
//import createPersistedState from 'vuex-persistedstate'


const state = {
    rooms: []
}

const getters = {
    allRooms: (state) => state.rooms

}

const actions = {
    // addNewRoom({ commit }, payload) {
    //     console.log('UserID: ' + payload.userId)
    //     const newRoom = {
    //         userID: payload.userId,
    //         roomName: payload.roomName,
    //         imgUrl: payload.imageUrl,
    //         nbrOfDevices: 0,
    //     }

    //     firebase.database().ref('/Rooms/' + payload.userId).push(newRoom)
    //         .then(() => {}).catch((err) => {
    //             console.log(err.message)
    //         })
    //         //commit('ADD_ROOM', newRoom)
    // },
}

const mutations = {
    ADD_ROOM: (state, payload) => state.rooms.push(payload),

}


export default {
    namespaced: true,
    //plugins: [createPersistedState()],

    state,
    getters,
    actions,
    mutations
}