export type CalendarProps = {
  calendarRef: React.RefObject<HTMLDivElement>;
  onSelectDate: (date: Date | null) => void;
  selectedDays?: Date | [Date, Date];
};
