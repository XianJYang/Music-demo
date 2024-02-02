import popUp from './Overall/Pop-up.vue'


export const componentPligin = {
    install(app:any){
        app.component('popUp',popUp)
    }
}