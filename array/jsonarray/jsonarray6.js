var blogs =[
    {
        id:1,
        title:"Javascript functions",
        content:"This is a blog post about functions in javascript"

    },
    {
        id:2,
        title:"Why functions are important",
        content:"This is a blog post about functions in javascript"

    },
    {
        id:3,
        title:"Functions in ES6",
        content:"This is a blog post about functions in javascript"
    }
]

//blog title...
var blogTitles = blogs.map((blog)=>{
    return blog.title;
})
console.log(blogTitles);

//return blog with id addition +1000 and titke in uppercase...

var newblogs = blogs.map((blog)=>{
    return{
        id:blog.id+1000,
        title:blog.title.toUpperCase(),
        content:blog.content
    }
})
console.log(newblogs);