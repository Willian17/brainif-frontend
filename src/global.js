import Vue from 'vue'

export const userKey = '__brainlif_user'
export const baseApiUrl = process.env.VUE_API_URL

export function showError(e){
    if(e.response.data){
        Vue.toasted.global.msgError({msg: e.response.data})
    } else if(typeof e === 'string'){
        Vue.toasted.global.msgError({msg: e})
    } else{
        Vue.toasted.global.msgError()
    }
}

export default {baseApiUrl , userKey , showError}