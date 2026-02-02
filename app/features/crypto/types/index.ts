export interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  total_volume: number;
}

export type SortOrder = "asc" | "desc";

export interface CryptoCardProps {
  asset: CryptoAsset;
}

export interface CryptoListProps {
  assets: CryptoAsset[];
  onRefresh: () => void;
}

export interface CryptoFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  sortOrder: SortOrder;
  onSortToggle: () => void;
  onRefresh: () => void;
  isRefreshing: boolean;
}

export interface UseAllCryptoResponse {
  data: CryptoAsset[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
}
