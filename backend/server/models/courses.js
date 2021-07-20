import mongoose from 'mongoose'

const LessonSchema = new mongoose.Schema({
    title: String,
    content: String,
    resource_url: String
})

let d = new Date();
const date = d.toLocaleDateString();

const Lesson = mongoose.model('Lesson', LessonSchema)
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    image: {
        data: Buffer,
        contentType: String
    },
    description: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        required: 'Category is required'
    },

    created: {
        type: String,
        default: date
    },
    instructorName:{
        type:String
    },
    role:{
        type:String,
        default:"student"
    },
    instructor: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    lessons: [LessonSchema]
},
    {
        versionKey: false
    })

courseSchema.virtual('id').get(function () {
    return this._id.toHexString();
})

LessonSchema.virtual('id').get(function () {
    return this._id.toHexString();
})


const courseModel = mongoose.model('Course', courseSchema);



export default courseModel;