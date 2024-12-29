import mongoose from "mongoose";

const mongoURL =
  "mongodb+srv://saurabhiitr:saurabh8810@cluster0.r522b.mongodb.net/";

const connect = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err);
    console.log("not connected");
  }
};
connect();
export default connect;
