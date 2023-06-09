type contact = {
    title:string,
    source:string,
    icon:string,
    id:number
}

const contacts:contact[] = [
    {
        id:0,
        source:'https://www.linkedin.com/in/oleh-hulevych-aa5b34272/',
        title:"LinkedIn",
        icon:"LinkedIn"
    },
    {
        id:1,
        source:'oleggulevic8@gmail.com',
        title:"Email",
        icon:"Email"
    },
    {
        id:2,
        source:'https://github.com/OlegProgrammerua',
        title:"GitHub",
        icon:"GitHub"
    },
    {
        id:3,
        source:'+420607788192',
        title:"Phone",
        icon:"Phone"
    },
]

export default contacts