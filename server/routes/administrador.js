var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('indexAdministrador', { title: 'Administrador' });
});

router.get('/generarDocumentos', function(req, res, next) {
  res.render('generarDocumentosAdmin', { title: 'Administrador' });
});

router.get('/generarDocumentos/solicitudMantenimiento', function(req, res, next) {
  res.render('solicitudDeMantenimiento', { title: 'Solicitud de Mantenimiento' });
});

router.get('/generarDocumentos/solicitudVisita', function(req, res, next) {
  res.render('solicitudVisita', { title: 'Solicitud Visitas' });
});

router.get('/generarDocumentos/liberacionDocente', function(req, res, next) {
  res.render('liberacionDocenteActGrupo', { title: 'Liberación de Actividades Docentes' });
});

router.get('/generarDocumentos/reporteDesempAlumnos', function(req, res, next) {
  res.render('reporteDesempenioAlumnos', { title: 'Reporte Desempeño Alumnos' });
});

router.get('/generarDocumentos/evaluacionResidencia', function(req, res, next) {
  res.render('evaluacionSeguimientoRes', { title: 'Evaluación Seguimiento Residencias' });
});

router.get('/generarDocumentos/evaluacionReporteResidencia', function(req, res, next) {
  res.render('evaluacionReporteResidencia', { title: 'Evaluación de Reporte Residencias' });
});

router.get('/generarDocumentos/asesorInternoResidencia', function(req, res, next) {
  res.render('asigAsesorIntResProf', { title: 'Asignación Asesor Interno Residencias' });
});

router.get('/generarDocumentos/asignacionSinodales', function(req, res, next) {
  res.render('asignacionSinodales', { title: 'Asignación Sinodales' });
});

router.get('/generarDocumentos/liberacionActAcademicas', function(req, res, next) {
  res.render('liberacionActAcademicas', { title: 'Liberación Actividades Academicas' });
});

router.get('/generarDocumentos/constanciaActComplementaria', function(req, res, next) {
  res.render('constanciaActComplementaria', { title: 'Liberación de Actividad Complementaria' });
});

module.exports = router;
