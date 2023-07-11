import {
  formatDistanceToNow as fnsFormatDistanceToNow,
  parseISO,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDistanceToNow(date: string | Date): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return fnsFormatDistanceToNow(dateObj, {
    addSuffix: true,
    locale: ptBR,
  });
}
