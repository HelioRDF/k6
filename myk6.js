import http from "k6/http";
import { check, sleep } from "k6";
export const options = {
  vus: 1,
  duration: "10s",
};
export default function () {
  const res = http.get("http://test.k6.io");
  check(res,{'Status é 200':(r)=>r.status==200});
  check(res,{'Status é 201':(r)=>r.status==201});
  sleep(1);
 // console.log(res);
}
