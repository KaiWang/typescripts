import * as fs from 'fs';
import { MatchResult } from './MatchResult';

abstract class CsvFileReader<T> {
  fileName: string;
  data: T[] = [];
  abstract mapRow(row: string[]): T;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}

export default CsvFileReader;
