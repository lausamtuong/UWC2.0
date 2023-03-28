import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect("mongodb+srv://obs:obs@atlascluster.zbntxns.mongodb.net/?retryWrites=true&w=majority");

export default connectMongo;