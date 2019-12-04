
import axios from 'axios'

  /**
   * 接口三 api
   * @module base/api/ccc
   * @ author chengweituo
   */
  export const CCC = 'http://localhost:8081' + '/ccc'
  export function ccc (data) {
     let dataType = 'get' === 'get' ? 'params' : 'data';
     return axios({
        method: 'get',
        [dataType]: data,
        url: CCC
     });
  }

