const Transaction = require('../models/transaction');


module.exports.barplot = async (req,res) => {

      try{
    return res.render('barPlot',{
        title : "Plots"
    });
}
catch(err){
    console.log('error',err);
    return res.redirect('back');

}
}