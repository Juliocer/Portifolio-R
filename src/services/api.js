import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
});

export const getUserRepos = async (username, perPage = 5, page = 1) => {
  try {
    const response = await api.get(`/users/${username}/repos`, {
      params: {
        per_page: perPage,
        page,
        sort: "updated",
        direction: "desc",
      },
    });

    const data = response.data;

    if (data.length === 0 && page > 1) {
      const firstPageResponse = await api.get(`/users/${username}/repos`, {
        params: {
          per_page: perPage,
          page: 1,
          sort: "updated",
          direction: "desc",
        },
      });

      return firstPageResponse.data;
    }

    return data;
  } catch (error) {
    console.error("Erro ao buscar repositórios:", error.message);
    return [];
  }
};