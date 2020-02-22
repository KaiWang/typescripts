import * as fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';

export type MatchData = [Date, string, string, number, number, MatchResult, string];

class CsvFileReader extends MatchReader {
  fileName: string;
  data: MatchData[] = [];

  constructor(fileName: string) {
    super();
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

  mapRow(row: string[]): MatchData {
    return [dateStringToDate(row[0]), row[1], row[2], parseInt(row[3]), parseInt(row[4]), row[5] as MatchResult, row[6]];
  }
}

export default CsvFileReader;
