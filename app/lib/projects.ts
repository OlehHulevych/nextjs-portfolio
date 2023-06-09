type project = {
    img:string,
    id:number,
    link:string,
    title:string,
    desc:string,
    stack:string[]
}

const projects:project[] = [
    {
        img:"GitDashBoard",
        id:0,
        link:"https://olegprogrammerua.github.io/GitDashBoard/",
        title:"Git Repository DashBoard",
        desc:'Github dashboard - is kind of to do app for developers. During the development project, there appear many different issues which have to solve them. But developer can confuses in chaotic of different issues and developer need to organize a solving order. It is big problem for developers. I decided to solve it. I create app where developers load all issues from repository using typing of repository URL. This app use GitHub API to fetch all issues from repository. And developer can drag issue between three columns "To Do", "Doing", "Done". This app is useful for developers and assigned to make their development easier.',
        stack:['HTMLCSS', 'JS', 'React', 'Redux', 'Bootstrap']
    },
    {
        img:"WeatherApp",
        id:1,
        link:"https://olegprogrammerua.github.io/weatherManager/",
        title:"Weather manager",
        desc:'If you need find out about weather on today or for the next week you need weather manager. You can find out weather for the next week in every city, village. The app show temperature and state of weather. App works using OpenWeatherMap API. The program has modern UI and amazing animations. I think this app is very use for for people. This app is useful for people whose work dependent on certain conditions as well for ordinary people',
        stack:['HTMLCSS', 'JS', 'React', 'Redux', 'Bootstrap']
    },
    {
        img:"Portfolio-site",
        id:2,
        link:"https://olegprogrammerua.github.io/portfolio-app/#/",
        title:"Portfolio site",
        desc:"It is my Portfolio-site project. For creating this site, I used technologies such as: HTML/CSS, JavaScript, React and Redux . In the past I was video maker and decided to create own portfolio-website. When I created this project I received valuable experience.",
        stack:['HTMLCSS', 'JS', 'React', 'Redux', 'Bootstrap']
    },


]

export default projects