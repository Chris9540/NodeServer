import http from "../config/http-common.config";

class EmployeeDataService {
  pagedList(page, size) {
    return http.get(`/employee/pagedList?page=${page}&size=${size}`);
  }
}

export default new EmployeeDataService();
