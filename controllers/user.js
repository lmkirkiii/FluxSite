module.exports = {
    show: (req,res) =>{
        console.log("user/show");
        res.render("index",{page: "user new page"});
    },
    new: (req,res) => {
        console.log("user/new");
        res.render("index",{page: "user show page"});
    },
    create: (req,res) =>{
        console.log("user/create");
        res.redirect(`/user/1`)
    }
};
