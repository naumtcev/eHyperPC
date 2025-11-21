interface IItemPropertyProduct {
  title: string;
  value: string | number;
}

export interface IProductProperties {
  title: string;
  list: IItemPropertyProduct[];
}

export interface IProduct {
  uuid: string;
  title: string;
  alias: string;
  price: number;
  inStock: boolean;
  manufatureCode: string;
  description: string;
  image: string;
  properties: IProductProperties[];
}
