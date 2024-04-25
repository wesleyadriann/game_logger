export const fetchApi = async <T = unknown>(
  ...[input, init]: Parameters<typeof fetch>
) => {
  const mergedOptions: RequestInit = {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  };

  const response = await fetch(input, mergedOptions);

  if (!response.ok) {
    throw new Error(`An error occurred, please try again`);
  }

  const data: T = await response.json();

  return {
    ...response,
    data,
  };
};
