import {CommonData} from '../commonData';

export interface Formatter {
  getFormattedText(data: CommonData): string;
}
