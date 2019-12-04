
import axios from 'axios'

  /**
   * 接口一 api
   * @module base/api/aaa
   * @ author chengweituo
   */
  export const AAA = 'http://localhost:8081' + '/aaa'
  export function aaa (data) {
     let dataType = 'get' === 'get' ? 'params' : 'data';
     return axios({
        method: 'get',
        [dataType]: data,
        url: AAA
     });
  }

  /**
   * 接口二 api
   * @module base/api/bbb
   * @ author chengweituo
   */
  export const BBB = 'http://localhost:8081' + '/bbb'
  export function bbb (data) {
     let dataType = 'post' === 'get' ? 'params' : 'data';
     return axios({
        method: 'post',
        [dataType]: data,
        url: BBB
     });
  }

