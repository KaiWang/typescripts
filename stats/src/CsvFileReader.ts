import * as fs from 'fs';

class CsvFileReader {
  fileName: string;
  data: string[][] = [];

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }

  parseDate(dateString: string): Date {
    return new Date();
  }
}

export default CsvFileReader;
