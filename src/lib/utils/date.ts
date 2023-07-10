import { formatDistanceToNow as fnsFormatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDistanceToNow(date: Date): string {
  return fnsFormatDistanceToNow(date, {
    addSuffix: true,
    locale: ptBR,
  });
}
