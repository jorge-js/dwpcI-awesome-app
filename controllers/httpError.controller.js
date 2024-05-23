// httpError.controller.js

const path = require('path');

// Controlador para manejar el error 404
exports.handle404 = (req, res) => {
    res.status(404).render('404', { title: 'Page Not Found', url: req.originalUrl });
};

// Controlador para manejar otros errores
exports.handleError = (err, req, res, next) => {
    const statusCode = err.status || 500;
    res.status(statusCode).render('error', {
        title: 'Error',
        message: err.message,
        status: statusCode,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};
