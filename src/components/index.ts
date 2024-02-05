import popUp from './Overall/Pop-up.vue'
import Svgicon from './svgIcon.vue'

export const componentPligin = {
    install(app:any){
        app.component('popUp',popUp),
        app.component('Svgicon',Svgicon)
    }
}