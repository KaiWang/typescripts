import { MatchReader } from './MatchReader';
import { printAnything } from './generics';

const reader = new MatchReader('football.csv');
reader.read();

console.log(reader.data[1]);

printAnything<string>(['a', 'b', 'c']);
