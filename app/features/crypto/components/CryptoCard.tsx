"use client";
import Image from "next/image";
import React from "react";

import { CryptoCardProps } from "@/app/features/crypto/types";
import { PriceChange } from "@/app/features/crypto/components/PriceChange";

export const CryptoCard: React.FC<CryptoCardProps> = ({ asset }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    }).format(price);
  };

  const formatMarketCap = (value: number) => {
    if (value >= 1e9) {
      return `$${(value / 1e9)?.toFixed(2)}B`;
    } else if (value >= 1e6) {
      return `$${(value / 1e6)?.toFixed(2)}M`;
    }
    return formatPrice(value);
  };

  return (
    <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-5 hover:shadow-2xl hover:shadow-[#1a2332]/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#1a2332]/30">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332]/5 to-[#1a2332]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-[#1a2332]/30 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <Image
                src={asset.image}
                alt={asset.name}
                width={48}
                height={48}
                className="rounded-full relative z-10 ring-2 ring-white shadow-lg"
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#1a2332] transition-colors">
                {asset.name}
              </h3>
              <p className="text-sm text-gray-500 uppercase font-medium">
                {asset.symbol}
              </p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full bg-[#1a2332]/10 border border-[#1a2332]/20">
            <p className="text-xs font-bold text-[#1a2332]">
              #{asset.market_cap_rank}
            </p>
          </div>
        </div>
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">Current Price</p>
            <p className="font-bold text-2xl text-gray-900">
              {formatPrice(asset.current_price)}
            </p>
          </div>
          <PriceChange value={asset.price_change_percentage_24h} />
        </div>
        <div className="pt-4 border-t border-gray-200/70">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500 mb-1">Market Cap</p>
              <p className="font-bold text-gray-900">
                {formatMarketCap(asset.market_cap)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
