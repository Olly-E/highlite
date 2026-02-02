"use client";
import React from "react";
import { Search, RefreshCw, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/app/components/Button";
import { CryptoFiltersProps } from "@/app/features/crypto/types";

export const CryptoFilters: React.FC<CryptoFiltersProps> = ({
  searchTerm,
  onSearchChange,
  sortOrder,
  onSortToggle,
  onRefresh,
  isRefreshing,
}) => {
  return (
    <div className="bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-2xl p-5 shadow-lg">
      <div className="flex flex-col sm:flex-row gap-3 ">
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1a2332]"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by name or symbol..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a2332] focus:border-transparent transition-all placeholder:text-gray-400 text-[#1a2332] font-medium"
          />
        </div>

        <Button
          onClick={onSortToggle}
          variant="secondary"
          className="rounded-xl! shadow-sm hover:shadow-md border border-gray-300 hover:bg-[#faf8f3] hover:border-[#1a2332]/30"
        >
          {sortOrder === "desc" ? (
            <ArrowDown size={20} className="text-[#1a2332]" />
          ) : (
            <ArrowUp size={20} className="text-[#1a2332]" />
          )}
          <span className="text-sm font-semibold text-[#1a2332]">
            {sortOrder === "desc" ? "High → Low" : "Low → High"}
          </span>
        </Button>

        <Button
          onClick={onRefresh}
          disabled={isRefreshing}
          variant="primary"
          className="rounded-xl!  shadow-lg hover:shadow-xl bg-[#1a2332]!  hover:bg-[#2a3342]!"
        >
          <RefreshCw size={20} className={isRefreshing ? "animate-spin" : ""} />
          <span className="text-sm">Refresh</span>
        </Button>
      </div>
    </div>
  );
};
