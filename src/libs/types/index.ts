export interface ProductImageSet {
  color: string;
  images: string[];
}

export interface ComputerSpec {
  processor: string;
  ram: string;
  storage: string;
  gpu: string;
  os: string;
  screenSize: string;
  battery: string;
}

export interface ProductCategory {
  uuid: string;
  name: string;
  description: string;
  media: string | null;
}

export interface ProductAddress {
  uuid: string;
  addressLine1: string;
  addressLine2: string;
  road: string;
  linkAddress: string;
}

export interface ProductSupplier {
  name: string;
  uuid: string;
  email: string;
  phone: string;
  address: ProductAddress;
}

export interface ProductBrand {
  name: string;
  uuid: string;
  description: string;
  brandLogo: string;
}

export interface Product {
  uuid: string;
  name: string;
  description: string;
  computerSpec: ComputerSpec;
  stockQuantity: number;
  priceOut: number;
  discount: number;
  color: ProductImageSet[];
  thumbnail: string;
  images: string[];
  filteredImage: string | null;
  warranty: string;
  availability: boolean;
  category: ProductCategory;
  supplier: ProductSupplier;
  brand: ProductBrand;
}

export interface SortState {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: SortState;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface ProductListResponse {
  content: Product[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  numberOfElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: SortState;
  empty: boolean;
}