var Order = mongoose.model('Order');
// var Product = mongoose.model('Product');
// var Quantity = mongoose.model('Quantity');

module.exports = (function (){
	return {
		getOrders: function(req,res){
			Order.find({}).populate('_customer')
				.exec(function (err, orders){
					if(err){
						console.log(err);
					}else{
						res.json(orders);
					}
				})
		},
		getProducts: function(req,res){
			Product.find({}).populate('_customer')
				.exec(function (err, products){
					if(err){
						console.log(err);
					}else{
						res.json(products);
					}
				})
		},

		getQuantities: function(req,res){
			Quantity.find({}).populate('_customer')
				.exec(function (err, quantities){
					if(err){
						console.log(err);
					}else{
						res.json(quantities);
					}
				})
		},

		addOrders: function(req,res){
			var order = new Order(req.body);
			order.save(function (err){
				if(err){
					console.log(err);
				}else{
					res.redirect('/orders')
				}
			})
		}
	}
})()