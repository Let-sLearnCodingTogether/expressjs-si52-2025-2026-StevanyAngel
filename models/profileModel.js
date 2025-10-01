import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
    {
        displayName : {
            type : String,
            required : [true, "Display name wajib di isi"],
        },
        profilPicture : {
            type : String,
            required : [true, "Proril Pic wajib di isi"],
        },
        bio : {
            type : String,
            minLength : [10, "minimal 10 karakter"],
            maxLength : [150, "maximal 150 karakter"],
            required : [true, "Bio wajib di isi"],
            trim : true
        },
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
    },
    {
        timestamps : true
    }
)

const ProfileModel = mongoose.Model("User", profileSchema)

export default ProfileModel