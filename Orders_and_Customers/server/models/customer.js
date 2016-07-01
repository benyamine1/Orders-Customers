var CustomerSchema = new mongoose.Schema({
	name: {type: String, required: true},
	_order: {type: mongoose.Schema.Types.ObjectId, ref:'Order'}
},{timestamps: true});

mongoose.model('Customer', CustomerSchema);