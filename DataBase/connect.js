const mongoose = require("mongoose");
  mongoose.connect("mongodb+srv://min:min@mina.sp6hk4x.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
	console.log('connected mongoDB');
}).catch(console.error);

mongoose.connection.on('disconnected', () => console.log('-> lost connection'));
mongoose.connection.on('reconnect', () => console.log('-> reconnected'));
mongoose.connection.on('connected', () => console.log('-> connected'));
