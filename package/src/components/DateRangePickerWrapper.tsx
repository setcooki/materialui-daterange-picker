/* eslint-disable jsx-a11y/no-static-element-interactions */

import * as React from 'react';
import { makeStyles } from '@material-ui/core';

import DateRangePicker from './DateRangePicker';

// eslint-disable-next-line no-unused-vars
import { DateRange, DefinedRange } from '../types';

const useStyles = makeStyles(() => ({
  dateRangePickerContainer: {
    position: 'relative',
  },
}));

export interface DateRangePickerWrapperProps {
  open: boolean;
  initialDateRange?: DateRange;
  definedRanges?: DefinedRange[];
  minDate?: Date | string;
  maxDate?: Date | string;
  onChange: (dateRange: DateRange) => void;
  mountPoint?: HTMLElement;
}

const DateRangePickerWrapper: React.FunctionComponent<DateRangePickerWrapperProps> = (
  props: DateRangePickerWrapperProps,
) => {
  const classes = useStyles();
  return (
    <div className={classes.dateRangePickerContainer}>
      <DateRangePicker {...props} />
    </div>
  );
};

export default DateRangePickerWrapper;
