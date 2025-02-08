import mongoose from 'mongoose';

const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Animals', 'Plants', 'Fish', 'Microorganisms', 'Others'], // Categories based on interest
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'], 
    default: 'Medium'
  },
  questions: [
    {
      questionText: { type: String, required: true },
      options: [
        {
          text: { type: String, required: true },
          isCorrect: { type: Boolean, default: false }
        }
      ]
    }
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher', // Reference to the Teacher who created the quiz
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Quiz', QuizSchema);
