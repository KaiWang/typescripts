import CsvFileReader from './CsvFileReader';
import { dateStringToDate } from './utils';

const reader = new CsvFileReader('football.csv');
reader.read();

console.log(reader.data[0]);
