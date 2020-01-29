import apiManager from "../apiManager";

export default function loginService(username, password) {
  return apiManager.get({
      path: '/login',
      body: {
          username, password
      }
  }).catch((error) => {
      return {
          error: true,
          errorMessage: error.message
      }
  });
}

window.trs = loginService;