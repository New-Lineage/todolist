import Loadable from "react-loadable"
import Loading from "./loading"


const Login = Loadable({
    loader:()=>import("../components/login"),
    loading:Loading
})
const Add = Loadable({
    loader:()=>import("../components/add"),
    loading:Loading
})

const First = Loadable({
    loader:()=>import("../components/first"),
    loading:Loading
})
const Back = Loadable({
    loader:()=>import("../components/back"),
    loading:Loading
})
const Del = Loadable({
    loader:()=>import("../components/del"),
    loading:Loading
})
const Form = Loadable({
    loader:()=>import("../components/form"),
    loading:Loading
})
const Home = Loadable({
    loader:()=>import("../components/home"),
    loading:Loading
})
const Mange = Loadable({
    loader:()=>import("../components/mange"),
    loading:Loading
})
const Pic = Loadable({
    loader:()=>import("../components/pic"),
    loading:Loading
})
const Setup = Loadable({
    loader:()=>import("../components/setup"),
    loading:Loading
})
const Text = Loadable({
    loader:()=>import("../components/text"),
    loading:Loading
})
const File = Loadable({
    loader:()=>import("../components/file"),
    loading:Loading
})

const Empty1 = Loadable({
    loader:()=>import("../components/empty/empty1"),
    loading:Loading
})
const Empty2 = Loadable({
    loader:()=>import("../components/empty/empty2"),
    loading:Loading
})
const Empty3 = Loadable({
    loader:()=>import("../components/empty/empty3"),
    loading:Loading
})

export {
    Login,
    Add,
    First,
    Back,
    Del,
    File,
    Form,
    Home,
    Mange,
    Pic,
    Setup,
    Text,
    Empty1,
    Empty2,
    Empty3
}