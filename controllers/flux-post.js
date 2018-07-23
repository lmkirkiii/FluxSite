module.exports ={
    show: (req, res) =>{
        console.log("flux/show");
        res.render("index", {page: "fluxus show page"});
    },
    new: (req,res)=>{
        console.log("flux/new");
        res.render("index",{page:"create a new flux response"});
    },
    create: (req,res)=>{
        console.log("flux/create");
        res.redirect("flux/1");
    },
    update: (req,res) => {
        console.log("flux/update");
        res.redirect("flux/1")
    }
}