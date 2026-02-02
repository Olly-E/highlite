export const cryptoKey = {
  all: ["crypto"] as const,
  lists: () => [...cryptoKey.all, "list"] as const,
  list: (id: string) => [...cryptoKey.all, "list", id] as const,
  details: () => [...cryptoKey.all, "detail"] as const,
  detail: (id: string) => [...cryptoKey.details(), id] as const,
};
