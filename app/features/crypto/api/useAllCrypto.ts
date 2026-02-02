"use client";
import { useQuery } from "@tanstack/react-query";

import { cryptoKey } from "@/app/utils/query-key-factory";
import { fetchData } from "@/app/utils/fetchData";
import { CryptoAsset, UseAllCryptoResponse } from "../types";

export function useAllCrypto(): UseAllCryptoResponse {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: cryptoKey.lists(),
    queryFn: async () =>
      fetchData<CryptoAsset[]>(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
      ),
    staleTime: 120000,
    gcTime: 600000, 
  });

  return {
    data: data || [],
    isLoading,
    isError,
    error: error as Error | null,
    refetch,
  };
}
