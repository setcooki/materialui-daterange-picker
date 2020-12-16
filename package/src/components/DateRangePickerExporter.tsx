import * as React from 'react';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { create as createJss } from 'jss';

// eslint-disable-next-line no-unused-vars
import DateRangePickerWrapper, { DateRangePickerWrapperProps } from './DateRangePickerWrapper';
import generateClassName from '../generateClassName';

const DateRangePickerExporter: React.FunctionComponent<DateRangePickerWrapperProps> = (
  props: DateRangePickerWrapperProps,
) => {
  const { mountPoint, ...rest } = props;
  const jss = createJss({
    ...jssPreset(),
    insertionPoint: mountPoint,
  });
  return (
    <StylesProvider
      jss={jss}
      generateClassName={generateClassName}
    >
      <DateRangePickerWrapper
        {...rest}
      />
    </StylesProvider>
  );
};

export default DateRangePickerExporter;
