import mongoose, { NativeError, ConnectOptions } from 'mongoose'

mongoose.connect(
    process.env.DB_URI,

    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,

    } as ConnectOptions, 

    (error: NativeError) => {
        if(error) {
            console.error("<:: Database connection error", error)
        }else{
            console.log("::> Database connected Successfully") 
        }
    }
)
