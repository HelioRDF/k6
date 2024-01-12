import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5s', target: 5 },
    { duration: '5s', target: 10 },
    { duration: '5', target: 0 },
  ],
};

export default function () {
  const res = http.get('https://httpbin.test.k6.io/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}

export function handleSummary(data) {
  return { 'raw-data.json': JSON.stringify(data)};
}

 // console.log('REQUISIÇÕES: ',JSON.stringify(data.metrics.http_reqs.values.count));
 // console.log('PASSOU: ',JSON.stringify(data.metrics.checks.values.passes));
  //console.log('FALHOU: ',JSON.stringify(data.metrics. http_req_failed.values.passes));
  //console.log('FALHOU: ',data);




