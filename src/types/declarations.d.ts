declare module 'react-native-html-to-pdf' {
  export interface PDFOptions {
    html: string;
    fileName?: string;
    directory?: string;
    base64?: boolean;
    width?: number;
    height?: number;
    padding?: number;
    bgColor?: string;
  }

  export interface PDFResult {
    filePath?: string;
    base64?: string;
  }

  export default class RNHTMLtoPDF {
    static convert(options: PDFOptions): Promise<PDFResult>;
  }
}
