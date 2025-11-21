import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Такой страницы нет. Ошибка 404.</h1>
        <div>
          <strong>Почему ошибка?</strong>
        </div>
        <div>
          Страницы не существует - Вы допустили опечатку в адресе сервиса или
          страницу удалили Мы.
        </div>
        <div>
          <strong>Как быть? Что делать?</strong>
        </div>
        <div>
          Перейдите на <Link href="/">главную страницу сервиса</Link> и
          продолжайте пользоваться сервисом
        </div>
      </div>
    </div>
  );
}
