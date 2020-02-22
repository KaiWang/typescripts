import { MatchData } from './CsvFileReader';
export abstract class MatchReader {
  abstract mapRow(row: string[]): MatchData;
}
