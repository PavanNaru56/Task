const Transaction = require("../models/transaction");

// const listProcs = async () => {
//     try {
//         const response =await fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
//         const data =  await response.json();
//         console.log(data.length);

//         for (let i = 0; i < data.length; i++) {
//             // Check if the product already exists in the database
//             const existingProduct = await Transaction.findOne({ id: data[i].id });

//             if(!existingProduct){
//                 const transaction = new Transaction({
//                     id : data[i]['id'],
//                     title : data[i]['title'],
//                     price : data[i]['price'],
//                     desc : data[i]['description'],
//                     category : data[i]['category'],
//                     image : data[i]['image'],
//                     sold : data[i]['sold'],
//                     dateOfSale : data[i]['dateOfSale']

//                 });
//                 transaction.save();

//             }

//             const dataV = await Transaction.find({});
//             console.log(dataV.length);

            
//         }
//     } catch (error) {
//         console.log('Error:', error);
//     }
// };

// listProcs();



module.exports.productsList = async (req,res) => {
     try {    
    const products = await Transaction.find({});
    const response =await fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const data =  await response.json();
    console.log(data.length);
    console.log(products.length);
    return res.render('listOfProducts',{
        title : 'Products',
        products : data
    })



}
catch(err){
    console.log('error',err);
    return res.redirect('back');
    
}


}



module.exports.data = async (req,res) => {
    res.send(require("../data.json"));
}



