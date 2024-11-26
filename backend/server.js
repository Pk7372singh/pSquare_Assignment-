const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { protect } = require('./controllers/authController');

const authRoutes = require('./routes/authRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const leaveRoutes = require('./routes/leaveRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const cors = require('cors');


dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);


app.use('/api/candidates', protect, candidateRoutes);
app.use('/api/employees', protect, employeeRoutes);  
app.use('/api/leaves', protect, leaveRoutes);
app.use('/api/attendances', protect, attendanceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
