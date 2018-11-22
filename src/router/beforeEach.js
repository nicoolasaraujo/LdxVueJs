import { LocalStorage} from 'quasar'


export default(to, from, next) => {
    console.log(to.matched)
    if(to.matched.some(record => record.meta.requiresAuth)){
        if(!LocalStorage.get.item('user')){
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        } else {
            next()
        }
    } else {
        next()
    }
}