"use client";
import React, { useState, useMemo, useEffect } from "react";

import { CryptoListProps, SortOrder } from "@/app/features/crypto/types";
import { CryptoFilters } from "./CryptoFilters";
import { CryptoCard } from "./CryptoCard";

export const CryptoList: React.FC<CryptoListProps> = ({
  assets,
  onRefresh,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const filteredAndSortedAssets = useMemo(() => {
    let filtered = assets;

    if (debouncedSearchTerm) {
      filtered = assets.filter(
        (asset) =>
          asset.name
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase()) ||
          asset.symbol
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase()),
      );
    }

    const sorted = [...filtered].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.current_price - b.current_price;
      }
      return b.current_price - a.current_price;
    });

    return sorted;
  }, [assets, debouncedSearchTerm, sortOrder]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await onRefresh();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="space-y-6">
      <CryptoFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortOrder={sortOrder}
        onSortToggle={toggleSort}
        onRefresh={handleRefresh}
        isRefreshing={isRefreshing}
      />

      <div className="flex items-center gap-2 px-2">
        <div className="w-2 h-2 rounded-full bg-[#1a2332] animate-pulse"></div>
        <p className="text-sm font-medium text-gray-600">
          Showing{" "}
          <span className="text-[#1a2332] font-bold">
            {filteredAndSortedAssets.length}
          </span>{" "}
          of <span className="font-bold">{assets.length}</span> cryptocurrencies
        </p>
      </div>

      {filteredAndSortedAssets.length === 0 ? (
        <div className="text-center py-20 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-500 text-lg font-medium">
            No cryptocurrencies found matching your search.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredAndSortedAssets.map((asset) => (
              <CryptoCard key={asset.id} asset={asset} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
