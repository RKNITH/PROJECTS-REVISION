import mongoose from 'mongoose'

export const connectedDataBase = async () => {
    await mongoose.connect('mongodb+srv://198038:NZ9xhmtIT0E1d8ad@cluster0.7mad0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('DataBase connected'));

}