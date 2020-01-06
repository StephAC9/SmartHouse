import firebase from 'firebase'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'



const state = {
    user: {},
    currentRoom: {},
    isEmailExist: false,
    isActive: false,
    user_not_found: false,
    signUpSuccessAlert: false,
    signInSuccessAlert: false,
    devices: [],
    favorites: [],


    houseDevices: [{
            deviceId: '01',
            status: 0,
            deviceName: 'Indoor Lamp',
            flag: false
        },
        {
            deviceId: '02',
            status: 0,
            deviceName: 'Outdoor Lamp',
            flag: false
        },
        {
            deviceId: '06',
            status: 0,
            deviceName: 'Stove',
            flag: false
        },
        {
            deviceId: '08',
            status: 0,
            deviceName: 'Window',
            flag: false
        },
        {
            deviceId: '09',
            status: 0,
            deviceName: 'Radiator',
            flag: false
        },

    ],
    sensor: {
        internalTemp: 24.6,
        externalTemp: -5,
        electricalConsumption: 400
    },
    alarmFire: {
        deviceID: 1,
        name: 'Fire alarm',
        type: 'Alarm',
        status: 0,
        flag: false
    },
    alarmWaterLeakage: {
        deviceID: 2,
        name: 'House alarm',
        type: 'Alarm',
        status: 1,
        flag: false
    },
    alarmHouseBreakin: {
        deviceID: 3,
        name: 'Water Leakage',
        type: 'Alarm',
        status: 1,
        flag: false
    },
}


const getters = {
    isActive(state) {
        return state.isActive
    },
    user(state) {
        return state.user
    },
    rooms(state) {
        return state.user.rooms
    },
    getsignUpSuccessAlert(state) {
        return state.signUpSuccessAlert
    },
    getsignInSuccessAlert(state) {
        return state.signInSuccessAlert
    },
    isEmailAlreadyExist(state) {
        return state.isEmailExist
    },
    getUser_not_found(state) {
        return state.user_not_found
    },

    currentRoom(state) {
        return state.currentRoom
    },

    devicesList(state) {
        return state.devices
    },

    favorites(state) {
        return state.favorites
    },


    houseDevices: state => state.houseDevices,
    alarms: state => state.alarms,
    sensor: state => state.sensor,
    alarmFire: state => state.alarmFire,
    alarmWaterLeakage: state => state.alarmWaterLeakage,
    alarmHouseBreakin: state => state.alarmHouseBreakin

}

const actions = {

    async lampSwitch({
        commit
    }, payload) {

        const todo = {
            userId: 1,
            id: 1,
            title: "quis ut nam facilis",
            completed: false
        }

        axios.put("https://jsonplaceholder.typicode.com/todos/1", todo)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });



        /*    const command = {
               command: payload.command
           } 
           
           axios.put("http://194.47.32.174:8080/HouseServer/service/command/1", command)
           .then(function(response) {
               console.log(response);
           })
           .catch(function(error) {
               console.log(error);
           }); */
    },

    resetSignUpSuccessAlert({
        commit
    }) {
        commit('SIGNUP_SUCCESS', false)
    },
    resetSignInSuccessAlert({
        commit
    }) {
        commit('SIGNIN_SUCCESS', false)
    },


    signUp({
        commit
    }, payload) {
        /*commit('RESET_EMAIL_EXIT', false) firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                    .then(
                        userCredential => {
                            var user = userCredential.user;
                            commit('SIGNUP_SUCCESS', true)

                            user.updateProfile({
                                displayName: payload.name,
                                photoURL: "https://example.com/jane-q-user/profile.jpg"
                            }).then(function() {
                                // Update successful.
                            }).catch(function(error) {
                                // An error happened.
                            });
                        })
                    .catch(
                        error => {
                            commit('SIGNUP_SUCCESS', false)
                            console.log(error.code)
                            if (error.code === 'auth/email-already-in-use') {

                                commit('SET_IS_EMAILEXIST', true)
                            } */

        // })

        const command = {
            username: payload.username,
            email: payload.email,
            firstName: payload.firstName,
            lastName: payload.lastName,
            password: payload.password,
        }
        const json = JSON.stringify(command)
        const blob = new Blob([json], {
            type: 'application/json'
        });

        const data = new FormData();
        data.append("document", blob);
        axios({
                method: 'POST',
                url: 'http://194.47.40.234:5678/HouseServer_war_exploded/service/user/create',
                data: blob,
            })

            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    },

    signIn({
        commit
    }, payload) {
        console.log('in sign in')
        /* firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)

            .then(
                userCredential => {
                    commit('SIGNIN_SUCCESS', true)
                    commit('SET_USER_NOT_FOUND', false)
                    commit('IS_ACTIVE', true)
                    const user = userCredential.user
                    console.log(user.displayName)
                    const rooms = []
                    firebase.database().ref('Rooms').child(user.uid)
                        .on('value', (snapshot) => {
                            snapshot.forEach((childSnapshot) => {
                                rooms.push(childSnapshot.val())

                            });
                        });

                    console.log(rooms)
                    const newUser = {
                        id: user.uid,
                        name: user.displayName,
                        rooms: rooms
                    }
                    console.log(newUser.rooms)

                    commit('SET_CURRENT_USER', newUser)
                })


            .catch(
                error => {
                    commit('IS_ACTIVE', false)
                    console.log(error.code)
                    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {

                        commit('SET_USER_NOT_FOUND', true)
                    }
                    commit('SIGNIN_SUCCESS', false)
                }) */


        const command = {
            username: payload.username,
            password: payload.password,
        }
        const json = JSON.stringify(command)
        const blob = new Blob([json], {
            type: 'application/json'
        });

        const data = new FormData();
        data.append("document", blob);
        axios({
                method: 'PUT',
                url: 'http://194.47.40.234:5678/HouseServer_war_exploded/service/user/login',
                data: blob,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        /*    .then(
               userCredential => {
                   commit('SIGNIN_SUCCESS', true)
                   commit('SET_USER_NOT_FOUND', false)
                   commit('IS_ACTIVE', true)
                   const user = userCredential.user
                   console.log(user.displayName)
               }) */
    },

    fetchRooms({
        commit
    }, user) {
        console.log('fetching....')
        if (state.user.rooms !== null) {
            state.user.rooms = []
        }
        const rooms = []
        firebase.database().ref('Rooms').child(user.id)
            .on('value', (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const key = childSnapshot.key
                    const childroom = childSnapshot.val()
                    const room = {
                        key: key,
                        imgUrl: childroom.imgUrl,
                        nbrOfDevices: childroom.nbrOfDevices,
                        roomName: childroom.roomName,
                        userID: childroom.userID,
                        devices: childroom.Devices
                    }

                    rooms.push(room)

                });
            });
        console.log(rooms)

        commit('RESET_ROOMS', rooms)

    },

    fetchDevices({
        commit
    }, payload) {
        if (state.devices !== null) {
            state.devices = null
        }
        console.log('fetching devices....')

        const devices = []
        firebase.database().ref('Rooms').child(payload.userId).child(payload.roomId).child('Devices')
            .on('value', (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const childDevice = childSnapshot.val()
                    const device = {
                        id: childSnapshot.key,
                        imgUrl: childDevice.imageUrl,
                        roomID: childDevice.roomId,
                        name: childDevice.deviceName,
                        status: childDevice.status
                    }
                    devices.push(device)
                });
            });

        commit('RESET_DEVICES', devices)

    },


    addNewRoom({
        commit
    }, payload) {
        const newRoom = {
            userID: payload.userId,
            roomName: payload.roomName,
            imgUrl: payload.imageUrl,
            nbrOfDevices: 0,
            devices: []
        }

        firebase.database().ref('Rooms').child(payload.userId).push(newRoom)
            .catch((err) => {
                console.log(err.message)
            })

    },

    addDevice({
        commit
    }, payload) {
        var newDevice = {
            roomId: payload.roomId,
            deviceName: payload.deviceName,
            imageUrl: payload.imgUrl,
            status: payload.status
        }

        firebase.database().ref('Rooms').child(payload.userId).child(payload.roomId).child('Devices').push(newDevice)
            .catch((err) => {
                console.log(err.message)
            })

    },

    deleteRoom({
        commit
    }, payload) {
        if (state.user.rooms !== null) {
            state.user.rooms = []
        }
        var ref = firebase.database().ref('Rooms').child(payload.userId)

            .on('value', (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    if (childSnapshot.key === payload.roomId) {
                        childSnapshot.ref.remove()
                    }
                });
            });

    },

    fetchCurrentRoom({
        commit
    }, payload) {
        var room = {}

        firebase.database().ref('Rooms').child(payload.userId)

            .on('value', (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    if (childSnapshot.key === payload.roomId) {
                        room = childSnapshot.val()
                    }
                    console.log(room)

                    commit('SET_CURRENT_ROOM', room)
                });
            });
    },

    addToUserFavorite({
        commit
    }, payload) {

        firebase.database().ref('Rooms').child(payload.userId).child(payload.roomId).child('Devices')

            .on('value', (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    if (childSnapshot.key === payload.deviceId) {
                        var currentDevice = childSnapshot.val()
                    }

                    firebase.database().ref('Rooms').child(payload.userId).child(payload.roomId).child('Favorites').push(currentDevice)
                        .catch((err) => {
                            console.log(err.message)
                        })
                });
            });

    },

    fetchFavorites({
        commit
    }, payload) {
        console.log('fetching favorites...')
        state.favorites = null;
        const fav = []
        firebase.database().ref('Rooms').child(payload.userId).child(payload.roomId).child('Favorites')
            .on('value', (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const id = childSnapshot.key
                    const child = childSnapshot.val()
                    const device = {
                        id: id,
                        deviceName: child.deviceName,
                        imageUrl: child.imageUrl,
                        roomId: child.roomId,
                        status: child.status,
                    }
                    console.log(device)
                    fav.push(device)
                });
                console.log(fav)

            });
        commit('SET_FAVORITES', fav)

    },

    logout({
        commit
    }) {
        commit('IS_ACTIVE', false)

        commit('LOGOUT', true)

    },

}

const mutations = {

    SET_USER(state, payload) {
        state.user = payload
    },

    SET_CURRENT_USER(state, payload) {
        state.user = payload
    },

    SET_IS_EMAILEXIST(state, payload) {
        state.isEmailExist = payload
    },

    SET_USER_NOT_FOUND(state, payload) {
        state.user_not_found = payload
    },

    LOGOUT(state) {
        state.user = []
        state.isActive = false

    },
    IS_ACTIVE(state, payload) {
        state.isActive = payload
    },

    RESET_ROOMS(state, rooms) {
        state.user.rooms = rooms
    },

    SIGNUP_SUCCESS(state, status) {
        state.signUpSuccessAlert = status
    },

    SIGNIN_SUCCESS(state, status) {
        state.signInSuccessAlert = status
    },

    RESET_EMAIL_EXIT(state, payload) {
        state.isEmailExist = payload
    },

    SET_CURRENT_ROOM(state, payload) {
        state.currentRoom = payload
    },

    RESET_DEVICES(state, payload) {
        state.devices = []
        state.devices = payload
    },
    SET_FAVORITES(state, payload) {
        state.favorites = payload
    }

}



export default {
    namespaced: true,
    plugins: [
        createPersistedState()
    ],
    state,
    getters,
    actions,
    mutations
}