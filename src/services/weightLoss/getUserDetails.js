import apiManager from "../apiManager";

export default function userDetailsService(userId='5e0c72b55e143e197bde99aa') {
  return apiManager.get({
      path: `/api/v1/weight-loss/${userId}`,
  }).catch((error) => {
      return {
          error: true,
          errorMessage: error.message
      }
  });
}

window.trs = userDetailsService;