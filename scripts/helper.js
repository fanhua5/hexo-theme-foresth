/**
 * @description util function to cut string
 * @param {string} string target string
 * @param {number} length target index in string
 */
hexo.extend.helper.register('stringCut', (string, length) => {
  return string.slice(0, length);
});
/**
 * @description util function to scroll top
 * @param {string} cssSelect
 */
hexo.extend.helper.register('elementScrollToTop', (cssSelect, top=0, ) => {
  const targetEL = document.querySelector(cssSelect) ?? null
  if (targetEL) {
    targetEL.scrollTo({

    })
  }
});