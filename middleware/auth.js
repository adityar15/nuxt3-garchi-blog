export default defineNuxtRouteMiddleware(async (to, from) => {
    // if (to.params.id === '1') {
    //   return abortNavigation()
    // }
    // // In a real app you would probably not redirect every route to `/`
    // // however it is important to check `to.path` before redirecting or you
    // // might get an infinite redirect loop
    // if (to.path !== '/') {
    //   return navigateTo('/')
    // }
    const {getUser} = useAuth()
    const user = await getUser()
    if(!user)
    return navigateTo("/")


  })