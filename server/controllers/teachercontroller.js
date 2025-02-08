const Admin = require('../schema/adminschema'); // Import Admin model

// Controller for adding students directly to a teacher
exports.addStudentToTeacher = async (req, res) => {
  try {
    const { adminId, teacherEmail, student } = req.body;

    const admin = await Admin.findById(adminId);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Find the teacher by email within the admin
    const teacher = admin.teachers.find(t => t.email === teacherEmail);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    // Add the student to the teacher's students array
    if (!teacher.students) {
      teacher.students = []; // Ensure the students array exists
    }
    teacher.students.push(student);

    // Save the changes
    await admin.save();

    res.status(201).json({ message: 'Student added to teacher successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
// Add Quiz Controller (Teacher)
exports.addQuiz = async (req, res) => {
    try {
      const { teacherId, title, description, questions } = req.body;
  
      // Find the teacher by ID
      const teacher = await Teacher.findById(teacherId);
      if (!teacher) {
        return res.status(404).json({ message: 'Teacher not found' });
      }
  
      // Create a new quiz
      const newQuiz = {
        title,
        description,
        questions, // Array of questions with options and correct option
      };
  
      // Add the quiz to the teacher's quizzes array
      teacher.quizzes.push(newQuiz);
      await teacher.save();
  
      res.status(201).json({ message: 'Quiz added successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  