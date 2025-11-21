import { AccordionUI } from "@/components/ui-kit/AccordionUI";
import "./style.scss";
import Link from "next/link";
import footerMenu from "@/config/db/footerMenu.json";

export const Footer = () => {
  return (
    <section className="footer">
      <div className=" mr-auto ml-auto max-w-[1200] pr-[48] pl-[48] pt-[48] pb-[24]">
        <div className="uk-grid uk-grid-large uk-child-width-1-5">
          <div className="max-lg:hidden">
            <div className="flex flex-wrap">
              {footerMenu.map(({ title, href, list }) => (
                <div className="pl-[72] mb-[24] w-[20%]" key={title}>
                  <ul>
                    <li className="uk-nav-header text-[#f5f5f5] text-[0.875rem] mb-[16] font-semibold">
                      <Link href={href}>{title}</Link>
                    </li>
                    {list?.map(({ title, href }) => (
                      <li key={title} className="mt-[12]">
                        <Link href={href}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden max-lg:block">
            {footerMenu.map(({ title, list }) => (
              <AccordionUI title={title} key={title}>
                <ul>
                  {list?.map(({ title, href }) => (
                    <li key={title} className="mt-[12]">
                      <Link href={href}>{title}</Link>
                    </li>
                  ))}
                </ul>
              </AccordionUI>
            ))}
          </div>

          <div className="mt-[12]">others</div>
        </div>
      </div>
    </section>
  );
};
