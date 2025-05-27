'use client';
import * as React from 'react';
import Cookies from 'js-cookie';
// utils
// import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useLocale } from 'next-intl';
import { locales } from '@/i18n';

export function LanguageToggle({ className }: React.ComponentProps<typeof Button>) {
  const locale = useLocale();

  const toggleLanguage = (language: string) => {
    const loadLanguage = Cookies.get('language');
    // If the language is already the same as the current one, no need to update
    if (language !== loadLanguage) {
      Cookies.set('language', language); // Save new language in the database
    }
    window.location.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="h-[1.2rem] w-[1.2rem] ">{locale.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((lang) => (
          <DropdownMenuItem key={lang} onClick={() => toggleLanguage(lang)}>
            {lang.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
