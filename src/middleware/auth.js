export default function(next, store) {
    if (!store.state.isLoggedIn) {
        console.log('Un Authenticated')
        next("/fdsgdfg");
    } else {
        next();
    }
}