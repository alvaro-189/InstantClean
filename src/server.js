// const express = require('express');
// const cors = require('cors');
// const usersRoutes = require('./routes/usersRoutes');
// // const authRoutes = require('./routes/authRoutes');
// // const schedulesRoutes = require('./routes/schedulesRoutes');
// // const vacationsRoutes = require('./routes/vacationsRoutes');
// // const supportRoutes = require('./routes/supportRoutes')

// const app = express();
// const PORT = process.env.PORT || 3001;
// const allowedOrigins=['http://192.168.1.38'];
// app.use(express.json());
// app.use(cors());

// app.use('/users', usersRoutes);
// // app.use('/schedules',schedulesRoutes)
// // app.use('/vacations',vacationsRoutes)
// // app.use('/support', supportRoutes)

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/usersRoutes');
const postsRoutes = require('./routes/postsRoutes');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3001;

const allowedOrigins = ['http://192.168.1.40/','http://10.0.2.2:3001']; // Añade aquí todas las direcciones IP que quieres permitir

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(express.json());
app.use(cors(corsOptions));

app.use('/users', usersRoutes)
app.use('/posts',postsRoutes)
app.use('/email',emailRoutes)
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});