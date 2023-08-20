import axios from "axios";

// refreshAccessToken 로직
const refreshAccessToken = async (refreshToken) => {
  const response = await api.post("/token/exchangeToken", { token: refreshToken });
  const accessToken = response.data.accessToken;

  localStorage.setItem("workoutToken", JSON.stringify(accessToken));

  return accessToken;
};

// 모든 요청을 api.* (ex.api.post("/endpoint"))으로 사용해 interceptors를 활용한다.
const api = axios.create({ baseURL: "http://localhost:8080" });

api.interceptors.response.use(
  (response) => {
    // 요청이 성공적으로 들어온다면 response를 그대로 반환
    return response;
  },
  async (error) => {
    // 요청에 실패했다면 기존 요청을 저장
    const originalRequest = error.config;

    // 에러코드가 401 && 토큰 만료 && !originalRequest._retry (같은 요청이 이미 다시 시도되었는지 확인)
    if (error.response.status === 401 && error.response.data.message === "토큰 만료" && !originalRequest._retry) {
      // 첫 요청에 위 if문을 통과했다면 1번만 재요청을 하기위해 요청 객체에 _retry를 추가
      originalRequest._retry = true;

      const refreshToken = JSON.parse(localStorage.getItem("workoutRefreshToken"));
      const accessToken = await refreshAccessToken(refreshToken);

      api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

      return api(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default api;
