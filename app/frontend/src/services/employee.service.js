import http from "../config/http-common.config";

class EmployeeDataService {
  pagedList(page, size) {
    return http.get(`/employee/pagedList?page=${page}&size=${size}`);
  }
  create(data) {
    return http.post("/employee/create", data)
  }
}

export default new EmployeeDataService();
