import { format } from 'date-fns';
import { cn } from '@/lib/utils';
// Components
import { FormControl, FormField, FormItem, FormLabel, useFormField } from '@/components/ui/form';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
// i18n
import { useTranslations } from 'next-intl';
// Icons
import { Calendar as CalendarIcon } from 'lucide-react';
import React from 'react';

interface InputProps extends React.ComponentProps<'input'> {
  disabled?: boolean;
  control: any;
  name: string;
  label?: string;
}

function FormMessage({ className, ...props }: React.ComponentProps<'p'>) {
  const { error, formMessageId } = useFormField();
  const t = useTranslations('Error');
  const body = error ? t(String(error?.message ?? '')) : props.children;

  if (!body) {
    return null;
  }

  return (
    <p data-slot="form-message" id={formMessageId} className={cn('text-destructive text-sm', className)} {...props}>
      {body}
    </p>
  );
}

export default function RoodxDateInput({ disabled = false, control, name, label, placeholder }: InputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="flex flex-col">
          {label && <FormLabel>{label}</FormLabel>}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <FormControl>
                <Button disabled={disabled} variant="outline" aria-invalid={!!fieldState.invalid} className={cn('w-full pl-3 text-left font-normal border', !field.value && 'text-muted-foreground')}>
                  {field.value ? format(new Date(field.value), 'PPP') : placeholder}
                  <CalendarIcon className="ltr:ml-auto rtl:mr-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-auto p-0" align="center">
              <Calendar
                mode="single"
                selected={field.value ? new Date(field.value) : undefined}
                onSelect={(date) => date && field.onChange(date.toISOString())}
                disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                captionLayout="dropdown-buttons"
                fromYear={1900}
                toYear={new Date().getFullYear()}
                initialFocus
              />
            </DropdownMenuContent>
          </DropdownMenu>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
