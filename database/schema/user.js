const mongoose = require('mongoose');
const { Schema } = mongoose;

// 生成Id
let ObjectId = Schema.Types.ObjectId;

// 创建用户的schema
const userSchema = new Schema({
  UserId: ObjectId,
  userName: {
    unique: true,
    type: String
  },
  password: String,
  likes: {
    type: Array,
    default: []
  },
  collect: {
    type: Array,
    default: []
  }
}, {
  // 加入该配置项，会自动生成创建时间
  // 在文档更新时，也会自动更新时间
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

// 最后，使用mongoose发布模型
mongoose.model('User', userSchema);
