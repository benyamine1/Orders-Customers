var OrderSchema = new mongoose.Schema({
	order: {type: String},
	product: {type: String},
	quantity:{type: Number},
	name: {type: String}
}, {timestamps: true});

mongoose.model('Order', OrderSchema);
