import mongoose from "mongoose"

const databaseConnect = () => {
     mongoose.connect("mongodb://localhost:27017",{
          useNewUrlParser : true,
          useUnifiedTopology : true
     }).then(()=>{
          console.log('Mongodb Database Connected')
     }).catch(error=>{
          console.log(error)
     })
}
export default databaseConnect;