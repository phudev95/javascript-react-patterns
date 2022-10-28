// index.js
import { EXPORT_FILE_TYPE } from './constants.js';
import ExporterFactory from './ExporterFactory.js';

const exporterFactory = new ExporterFactory();

const pdfExporter = exporterFactory.create(EXPORT_FILE_TYPE.PDF);
const csvExporter = exporterFactory.create(EXPORT_FILE_TYPE.CSV);
const htmlExporter = exporterFactory.create(EXPORT_FILE_TYPE.HTML);

const fileContent = "I am an image binary content, that\'s it!";
console.log(pdfExporter.toBase64Content(fileContent));
console.log(csvExporter.toBase64Content(fileContent));
console.log(htmlExporter.toBase64Content(fileContent));