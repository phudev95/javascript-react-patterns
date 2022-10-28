// ExporterFactory.js
import PDFExporter from "./PdfExporter.js";
import CSVExporter from "./CsvExporter.js";
import HTMLExporter from "./HtmlExporter.js";
import { EXPORT_FILE_TYPE } from "./constants.js";

export default class ExporterFactory {
  create = (fileType, fileContent) => {
    switch (fileType) {
      case EXPORT_FILE_TYPE.PDF: return new PDFExporter(fileContent);
      case EXPORT_FILE_TYPE.CSV: return new CSVExporter(fileContent);
      case EXPORT_FILE_TYPE.HTML: return new HTMLExporter(fileContent);
      default: throw new Error('Unknown file type');
    }
  };
}