import { LinkUI } from "@/components/ui-kit/LinkUI";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div>
        Упс, страница не найдена или была удалена. Пока мы работаем над этим,
        приглашаем посмотреть
        <LinkUI href="#">наши компьютеры</LinkUI>, почитать игровые новости или
        перейти на главную страницу
      </div>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
