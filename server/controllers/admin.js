const Admin = require('../schema/adminschema'); // Import Admin model
const Teacher = require('../schema/teacherschema'); // Import Teacher model
const bcrypt=require("bcryptjs")
// Add Teacher Controller
// Add Teacher Controller
exports.addTeacher = async (req, res) => {
    try {
      const { adminId, name, email, password, subject, phone } = req.body;
  
      // Check if the password is provided
      if (!password || password.trim() === "") {
        return res.status(400).json({ message: 'Password is required' });
      }
  
      // Find the admin by ID
      const admin = await Admin.findById(adminId);
      if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
      }
  
      // Check if the teacher already exists
      const existingTeacher = admin.teachers.find(t => t.email === email);
      if (existingTeacher) {
        return res.status(400).json({ message: 'Teacher already exists with this email' });
      }
  
      // Encrypt the teacher's password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create a new Teacher document
      const newTeacher = new Teacher({
        name,
        email,
        password: hashedPassword, // Store encrypted password
        subject,
        phone,
        adminId, // Link the teacher to the admin
      });
  
      // Save the Teacher document
      await newTeacher.save();
  
      // Add the teacher to the Admin's teachers array
      admin.teachers.push({
        name,
        email,
        subject,
        phone,
        createdAt: newTeacher.createdAt,
      });
  
      // Save the updated Admin document
      await admin.save();
  
      res.status(201).json({ message: 'Teacher added successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
// Add Student Controller with Duplicate Check
exports.addStudent = async (req, res) => {
    try {
      const { adminId, name, email, course, rollNumber, phone } = req.body;
  
      // Find the admin by ID
      const admin = await Admin.findById(adminId);
      if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
      }
  
      // Check if the student already exists (based on email or roll number)
      const existingStudent = admin.students.find(student => student.email === email || student.rollNumber === rollNumber);
      if (existingStudent) {
        return res.status(400).json({ message: 'Student already exists with this email or roll number' });
      }
  
      // Add the student to the admin's students array
      admin.students.push({ name, email, course, rollNumber, phone });
  
      await admin.save();
      res.status(201).json({ message: 'Student added successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  