type skill = {
    img:string,
    title:string,
    id:number
}

type animation = {
    x?:number,
    scale?:number
}

type lang = {
    img:string,
    title:string,
    id:number,
    level:string,
    animation:animation
}

 const store:skill[] = [
    {
        img:'html',
        id:0,
        title:'HTML & Css'
    },
    {
        img:'js',
        id:1,
        title:'JavaScript'
    },
    {
        img:'react',
        id:2,
        title:'React'
    },
    {
        img:'redux',
        id:3,
        title:'Redux'
    },
    {
        img:'ts',
        id:4,
        title:'TypeScript'
    },
    {
        img:'next',
        id:5,
        title:'Next.js'
    }
    

    
]



const langSkills:lang[] = [
    {
        img:"English",
        level:"B1",
        id:0,
        title:"English",
        animation:{
            x:-1000
        }
    },
    {
        img:"Ukrainian",
        level:"Native",
        id:1,
        title:"Ukrainian",
        animation:{
            scale:0
        }
    },
    {
        img:"Czech",
        level:"A1",
        id:2,
        title:"Czech",
        animation:{
            x:1000
        }
    },
]  

export {store, langSkills} 
