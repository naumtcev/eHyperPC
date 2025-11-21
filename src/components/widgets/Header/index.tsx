import Link from "next/link";
import "./style.scss";
import Logo from "@/components/icons/hyperpc-logo.svg";
import { LinkUI } from "@/components/ui-kit/LinkUI";
import { ButtonUI } from "@/components/ui-kit/ButtonUI";
import CityIcon from "@/components/icons/city.svg";
import CompareIcon from "@/components/icons/compare.svg";
import BasketIcon from "@/components/icons/basket.svg";
import PersonIcon from "@/components/icons/person.svg";
import BurgerIcon from "@/components/icons/burger.svg";

export const Header = () => {
  return (
    <nav className="header fixed top-0 z-[1100] w-full bg-[#111]">
      <div className="max-w-7xl mr-auto ml-auto pr-[40] pl-[40]">
        <div className="flex justify-between items-center pt-[8]">
          <div>
            <Link href="#" className="flex items-center">
              <span className="mr-[8]">
                <span>
                  <CityIcon />
                </span>
              </span>
              <span className="text-[#828282] text-sm">Москва</span>
            </Link>
          </div>

          <div className="pl-[40] text-[#828282] text-sm">
            <Link href="tel:+74951203520" data-locate="Moscow">
              +7 (495) 120-35-20{" "}
            </Link>
          </div>
        </div>

        <div className="pt-[8] pb-[8]">
          <div
            style={{
              display: "flex",
              position: "relative",
              justifyContent: "space-between",
            }}
          >
            <div className="flex flex-wrap gap-[24] items-center">
              <div>
                <Link href="#">
                  <Logo style={{ height: "16px", width: "auto" }} />
                </Link>
              </div>
              <div className="max-xl:hidden">
                <ul className="flex gap-[0] items-center">
                  <li>
                    <LinkUI
                      href="#"
                      className="pt-0 pl-[12] pb-0 pr-[12] color-[#f5f5f5] text-sm"
                    >
                      Игровые ПК
                    </LinkUI>
                  </li>
                  <li>
                    <LinkUI
                      href="#"
                      className="pt-0 pl-[12] pb-0 pr-[12] color-[#f5f5f5] text-sm"
                    >
                      Рабочие станции
                    </LinkUI>
                  </li>
                  <li>
                    <LinkUI
                      href="#"
                      className="pt-0 pl-[12] pb-0 pr-[12] color-[#f5f5f5] text-sm"
                    >
                      Ноутбуки
                    </LinkUI>
                  </li>
                  <li>
                    <LinkUI
                      href="#"
                      className="pt-0 pl-[12] pb-0 pr-[12] color-[#f5f5f5] text-sm"
                    >
                      Серверы
                    </LinkUI>
                  </li>
                  <li>
                    <LinkUI
                      href="/catalog"
                      className="pt-0 pl-[12] pb-0 pr-[12] color-[#f5f5f5] text-sm"
                    >
                      Каталог
                    </LinkUI>
                  </li>
                  <li>
                    <LinkUI
                      href="#"
                      className="pt-0 pl-[12] pb-0 pr-[12] color-[#f5f5f5] text-sm"
                    >
                      Услуги
                    </LinkUI>
                  </li>
                  <li>
                    <LinkUI
                      href="#"
                      className="pt-0 pl-[12] pb-0 pr-[12] color-[#f5f5f5] text-sm"
                    >
                      Поддержка
                    </LinkUI>
                  </li>
                  <li>
                    <LinkUI
                      href="#"
                      className="pt-0 pl-[12] pb-0 pr-[12] color-[#f5f5f5] text-sm"
                    >
                      Компания
                    </LinkUI>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <ul className="flex list-none m-[0] p-[0] gap-[6] items-center">
                <li className="w-[36] h-[40] max-md:hidden">
                  <LinkUI href="#" className="block pt-[12] pl-[9]">
                    <CompareIcon />
                  </LinkUI>
                </li>
                <li className="max-md:hidden">
                  <ButtonUI
                    variant="ghost"
                    className="hover:bg-transparent cursor-pointer"
                  >
                    <BasketIcon />
                  </ButtonUI>
                </li>
                <li>
                  <ButtonUI
                    variant="ghost"
                    className="hover:bg-transparent cursor-pointer"
                  >
                    <PersonIcon />
                  </ButtonUI>
                </li>
                <li className="hidden max-xl:block">
                  <ButtonUI
                    variant="ghost"
                    className="hover:bg-transparent cursor-pointer"
                  >
                    <BurgerIcon />
                  </ButtonUI>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
