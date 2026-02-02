"use client";
import { CryptoList } from "@/app/features/crypto/components/CryptoList";
import { useAllCrypto } from "@/app/features/crypto/api/useAllCrypto";
import { Button } from "@/app/components/Button";

export default function Home() {
  const { data, isLoading, isError, error, refetch } = useAllCrypto();

  const handleRefresh = () => {
    refetch();
  };

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-[#1a2332] flex items-center justify-center shadow-lg">
              <span className="text-2xl">💎</span>
            </div>
            <h1 className="text-5xl font-bold text-[#1a2332]">CryptoView</h1>
          </div>
          <p className="text-gray-600 text-lg ml-15">
            Real-time cryptocurrency market data powered by CoinGecko
          </p>
        </div>

        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#1a2332]/20"></div>
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-transparent border-t-[#1a2332] absolute top-0 left-0"></div>
            </div>
            <p className="text-gray-600 mt-6 text-lg font-medium">
              Loading cryptocurrencies...
            </p>
          </div>
        )}

        {isError && !isLoading && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center shadow-lg">
            <div className="text-5xl mb-4">⚠️</div>
            <p className="text-red-800 font-bold text-xl mb-2">
              Oops! Something went wrong
            </p>
            <p className="text-red-600 mb-6">
              {error?.message || "Failed to load cryptocurrency data"}
            </p>
            <Button
              onClick={handleRefresh}
              variant="primary"
              className="rounded-xl! shadow-lg hover:shadow-xl bg-[#1a2332]! hover:bg-[#2a3342]!"
            >
              Try Again
            </Button>
          </div>
        )}

        {!isLoading && !isError && data.length > 0 && (
          <CryptoList assets={data} onRefresh={handleRefresh} />
        )}
      </div>
    </div>
  );
}
