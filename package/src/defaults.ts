/* eslint-disable import/prefer-default-export */

//import de from 'date-fns/locale/de';

import {
  addDays,
  startOfWeek,
  endOfWeek,
  addWeeks,
  startOfMonth,
  endOfMonth,
  addMonths,
} from 'date-fns';

// eslint-disable-next-line no-unused-vars
import { DefinedRange } from './types';

const getDefaultRanges = (date: Date): DefinedRange[] => [
  {
    label: 'Heute',
    startDate: date,
    endDate: date,
  },
  {
    label: 'Gestern',
    startDate: addDays(date, -1),
    endDate: addDays(date, -1),
  },
  {
    label: 'Diese Woche',
    startDate: startOfWeek(date),
    endDate: endOfWeek(date),
  },
  {
    label: 'Letzte Woche',
    startDate: startOfWeek(addWeeks(date, -1)),
    endDate: endOfWeek(addWeeks(date, -1)),
  },
  {
    label: 'Letzten 7 Tage',
    startDate: addWeeks(date, -1),
    endDate: date,
  },
  {
    label: 'Dieser Monat',
    startDate: startOfMonth(date),
    endDate: endOfMonth(date),
  },
  {
    label: 'Letzter Monat',
    startDate: startOfMonth(addMonths(date, -1)),
    endDate: endOfMonth(addMonths(date, -1)),
  },
];

export const defaultRanges = getDefaultRanges(new Date());
