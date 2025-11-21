import { CheckboxUI } from "@/components/ui-kit/Checkbox";
import { FilterItem } from "../FilterItem";

export const FilterCatalog = () => {
  const filterList = [
    {
      title: "Производитель",
      list: [
        {
          label: "GeForce RTX 3050",
          value: "GeForce RTX 3050",
          count: 1,
        },
        {
          label: "GeForce RTX 3060",
          value: "GeForce RTX 3060",
          count: 8,
        },
        {
          label: "GeForce RTX 4060",
          value: "GeForce RTX 4060",
          count: 11,
        },
        {
          label: "GeForce RTX 5060",
          value: "GeForce RTX 5060",
          count: 41,
        },
        {
          label: "GeForce RTX 7050",
          value: "GeForce RTX 7060",
          count: 1,
        },
      ],
    },
    {
      title: "Графический процессор",
      list: [
        {
          label: "GeForce RTX 3050",
          value: "GeForce RTX 3050",
          count: 1,
        },
        {
          label: "GeForce RTX 3060",
          value: "GeForce RTX 3060",
          count: 8,
        },
        {
          label: "GeForce RTX 4060",
          value: "GeForce RTX 4060",
          count: 11,
        },
        {
          label: "GeForce RTX 5060",
          value: "GeForce RTX 5060",
          count: 41,
        },
        {
          label: "GeForce RTX 7050",
          value: "GeForce RTX 7060",
          count: 1,
        },
      ],
    },
    {
      title: "Тип памяти",
      list: [
        {
          label: "GeForce RTX 3050",
          value: "GeForce RTX 3050",
          count: 1,
        },
        {
          label: "GeForce RTX 3060",
          value: "GeForce RTX 3060",
          count: 8,
        },
        {
          label: "GeForce RTX 4060",
          value: "GeForce RTX 4060",
          count: 11,
        },
        {
          label: "GeForce RTX 5060",
          value: "GeForce RTX 5060",
          count: 41,
        },
        {
          label: "GeForce RTX 7050",
          value: "GeForce RTX 7060",
          count: 1,
        },
      ],
    },
  ];
  return (
    <ul>
      <li className="pt-[16] pb-[16] border-b border-[#404040] border-solid">
        {filterList.map((filter) => (
          <FilterItem title={filter.title} key={filter.title}>
            <ul>
              {filter.list?.map(({ value, label, count }) => (
                <li className="mb-[8]" key={value}>
                  <CheckboxUI
                    label={
                      <span className="text-[#c0c0c0]">
                        {label}{" "}
                        {count && (
                          <sup className="text-[#737373] text-[75%]">
                            {count}
                          </sup>
                        )}
                      </span>
                    }
                    id="1"
                  />
                </li>
              ))}
            </ul>
          </FilterItem>
        ))}
      </li>
    </ul>
  );
};
