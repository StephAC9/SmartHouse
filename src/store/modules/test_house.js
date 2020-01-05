import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

const state = {
    user: null,
    token2: null,
    houseDevices: [
        { deviceId: '01', status: 0, deviceName: 'Indoor Lamp', flag: true },
        { deviceId: '02', status: 0, deviceName: 'Outdoor Lamp', flag: false },
        { deviceId: '06', status: 0, deviceName: 'Stove', flag: false },
        { deviceId: '08', status: 0, deviceName: 'Window', flag: false },
        { deviceId: '09', status: 0, deviceName: 'Radiator', flag: false },

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
    houseDevices: state => state.houseDevices,
    alarms: state => state.alarms,
    sensor: state => state.sensor,
    alarmFire: state => state.alarmFire,
    alarmWaterLeakage: state => state.alarmWaterLeakage,
    alarmHouseBreakin: state => state.alarmHouseBreakin
}

const actions = {

}

const mutations = {

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