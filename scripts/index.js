/*
 * @Author: fanhua 
 * @Date: 2022-11-11 09:22:02 
 * @Last Modified by:   fanhua 
 * @Last Modified time: 2022-11-11 09:22:02 
 */

require('../source/style/less/index.less')

hexo.extend.helper.register('stringCut', (string, length) => {
  return string.slice(0, length);
});