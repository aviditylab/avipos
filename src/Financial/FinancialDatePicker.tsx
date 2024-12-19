import { DateRangePicker, Stack } from 'rsuite';
import subDays from 'date-fns/subDays';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import addDays from 'date-fns/addDays';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import addMonths from 'date-fns/addMonths';
import { DateRange, RangeType } from 'rsuite/esm/DateRangePicker';
export default function FinancialDatePicker({ selectedDateRange, setSelectedDateRange }: { selectedDateRange: { from: Date, to: Date }, setSelectedDateRange: (value: { from: Date, to: Date }) => void }) {
  const predefinedRanges: RangeType<DateRange>[] = [
    {
      label: 'Today',
      value: [new Date(), new Date()],
      placement: 'bottom'
    },
    {
      label: 'Yesterday',
      value: [addDays(new Date(), -1), addDays(new Date(), -1)],
      placement: 'bottom'
    },
    {
      label: 'This week',
      value: [startOfWeek(new Date()), endOfWeek(new Date())],
      placement: 'bottom'
    },
    {
      label: 'Last 7 days',
      value: [subDays(new Date(), 6), new Date()],
      placement: 'bottom'
    },
    {
      label: 'Last 30 days',
      value: [subDays(new Date(), 29), new Date()],
      placement: 'bottom'
    },
    {
      label: 'This month',
      value: [startOfMonth(new Date()), new Date()],
      placement: 'bottom'
    },
    {
      label: 'Last month',
      value: [startOfMonth(addMonths(new Date(), -1)), endOfMonth(addMonths(new Date(), -1))],
      placement: 'bottom'
    },
    {
      label: 'This year',
      value: [new Date(new Date().getFullYear(), 0, 1), new Date()],
      placement: 'bottom'
    },
    {
      label: 'Last year',
      value: [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear(), 0, 0)],
      placement: 'bottom'
    },
    {
      label: 'All time',
      value: [new Date(new Date().getFullYear() - 1, 0, 1), new Date()],
      placement: 'bottom'
    },
  ];
  return (
    <DateRangePicker
      showOneCalendar={true}
      placement='bottomEnd'
      defaultCalendarValue={[selectedDateRange.from, selectedDateRange.to]}
      defaultValue={[selectedDateRange.from, selectedDateRange.to]}
      ranges={predefinedRanges}
      style={{ width: '100%' }}
      onShortcutClick={(shortcut, event) => {
        console.log(shortcut);
      }}
      onChange={(value) => {
        if (null === value) return;
        setSelectedDateRange({ from: value![0], to: value![1] })
      }}
    />
  )
}