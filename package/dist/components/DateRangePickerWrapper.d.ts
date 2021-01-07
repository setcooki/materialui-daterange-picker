import * as React from 'react';
import { DateRange, DefinedRange } from '../types';
export interface DateRangePickerWrapperProps {
    open: boolean;
    initialDateRange?: DateRange;
    definedRanges?: DefinedRange[];
    minDate?: Date | string;
    maxDate?: Date | string;
    onChange: (dateRange: DateRange) => void;
    mountPoint?: HTMLElement;
}
declare const DateRangePickerWrapper: React.FunctionComponent<DateRangePickerWrapperProps>;
export default DateRangePickerWrapper;
