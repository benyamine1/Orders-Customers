var Customer = mongoose.model('Customer');

module.exports = (function (){
	return {
		getCustomer: function(req,res){
			Customer.find({}).populate('_order')
				.exec(function (err, customers){
					if(err){
						console.log(err);
					}else{
						res.json(customers);
					}
				})
		},

		addCustomer: function(req,res){
			var customer = new Customer(req.body);
			customer.save(function (err){
				if(err){
					console.log(err);
				}else{
					res.redirect('/customers')
				}
			})
		},

		removeCustomer: function(req, res){
      		Customer.findByIdAndRemove(req.params.id, function (err){
		        if (err){
		          console.log(err);
		        }else{
		          res.redirect('/customers');
		        }
	      	})
	    }
	}
})()