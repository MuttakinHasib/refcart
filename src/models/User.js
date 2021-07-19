import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        'https://res.cloudinary.com/muttakinhasib/image/upload/v1611336104/avatar/user_qcrqny.svg',
    },
    gender: {
      type: String,
    },
    birthday: {
      type: Date,
    },
    phone: {
      type: String,
    },
    country: {
      type: String,
    },
    address: {
      country: {
        type: String,
      },
      division: {
        type: String,
      },
      district: {
        type: String,
      },
      upazila: {
        type: String,
      },
      union: {
        type: String,
      },
      postcode: {
        type: String,
      },
      street: {
        type: String,
      },
      default: {},
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.models.user || mongoose.model('user', userSchema);

export default User;
