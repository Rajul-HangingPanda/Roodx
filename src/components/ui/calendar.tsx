'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker, useNavigation } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// i18n
import { useLocale } from 'next-intl';

function Calendar({ className, classNames, showOutsideDays = true, ...props }: React.ComponentProps<typeof DayPicker>) {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row gap-2',
        month: 'flex flex-col gap-4',
        caption: 'flex justify-center pt-1 relative items-center gap-2',
        caption_label: 'hidden',
        nav: 'flex items-center gap-1',
        nav_button: cn(buttonVariants({ variant: 'outline' }), 'size-7 bg-transparent p-0 opacity-50 hover:opacity-100'),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-x-1',
        head_row: 'flex',
        head_cell: 'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md'
        ),
        day: cn(buttonVariants({ variant: 'ghost' }), 'size-8 p-0 font-normal aria-selected:opacity-100'),
        day_range_start: 'day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground',
        day_range_end: 'day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground',
        day_selected: 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        day_outside: 'day-outside text-muted-foreground aria-selected:text-muted-foreground',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Caption: ({ displayMonth }) => {
          const { goToMonth, nextMonth, previousMonth } = useNavigation();
          const months = Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString(`${locale}`, { month: 'long' }));
          const currentYear = new Date().getFullYear();
          const years = Array.from({ length: 101 }, (_, i) => currentYear - i); // السنوات من السنة الحالية إلى قبل 90 عامًا

          const handleMonthChange = (value: string) => {
            const newDate = new Date(displayMonth);
            newDate.setMonth(parseInt(value));
            goToMonth(newDate);
          };

          const handleYearChange = (value: string) => {
            const newDate = new Date(displayMonth);
            newDate.setFullYear(parseInt(value));
            goToMonth(newDate);
          };

          return (
            <div className={`flex items-center justify-between gap-2 rtl:flex-row-reverse `}>
              <Select dir={isRTL? 'rtl': 'ltr'} value={displayMonth.getMonth().toString()} onValueChange={handleMonthChange}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue>{months[displayMonth.getMonth()]}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <ScrollArea dir={isRTL? 'rtl': 'ltr'} className="h-60">
                    {months.map((month, index) => (
                      <SelectItem key={month} value={index.toString()}>
                        {month}
                      </SelectItem>
                    ))}
                  </ScrollArea>
                </SelectContent>
              </Select>

              <Select dir={isRTL? 'rtl': 'ltr'} value={displayMonth.getFullYear().toString()} onValueChange={handleYearChange}>
                <SelectTrigger  className="w-[100px]">
                  <SelectValue>{displayMonth.getFullYear()}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <ScrollArea dir={isRTL? 'rtl': 'ltr'} className="h-60">
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </ScrollArea>
                </SelectContent>
              </Select>
            </div>
          );
        },

        IconLeft: (props) => <ChevronLeft className="size-4" {...props} />,
        IconRight: (props) => <ChevronRight className="size-4" {...props} />,
      }}
      {...props}
    />
  );
}

Calendar.displayName = 'Calendar';

export { Calendar };
