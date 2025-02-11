import mongoose from 'mongoose';
import mongooseSequence from 'mongoose-sequence';
const Schema = mongoose.Schema;
const AutoIncrement = mongooseSequence(mongoose);
export const TacheSchema = new Schema({
    id: {
        type: Number, 
        unique: true, 
    },
    titre: {
        type: String,
        required: 'Entrer un titre'
    },
    description : {
        type: String
    },
    statut : {
        type: String
    },
    dateEcheance : {
       type: Date,
    }
});
TacheSchema.plugin(AutoIncrement, { inc_field: 'id' });


