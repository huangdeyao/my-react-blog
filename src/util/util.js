const Util = {}
Util.getMenuList = function (data) {
  const menuList = []
  data.forEach((item) => {
    if (item.text) {
      if (item.children) {
        if (item.access === 0) {
          if (item.children.length > 1) return
        } else {
          item.children.forEach((child, childIndex) => {
            item.children[childIndex].path = item.path + '/' + item.children[childIndex].path
          })
        }
      }
      menuList.push(item)
    }
  })
  return menuList
}

/**
 * 判断空值
 */
Util.isEmpty = function (keys) {
  if (typeof keys === 'string') {
    if (keys === '' || keys == null || keys === 'null' || keys === 'undefined') {
      return true
    } else {
      return false
    }
  } else if (typeof keys === 'undefined') { // 未定义
    return true
  } else if (typeof keys === 'number') {
    return false
  } else if (typeof keys === 'boolean') {
    return false
  } else if (typeof keys === 'object') {
    if (JSON.stringify(keys) === '{}') {
      return true
    } else if (keys == null) { // null
      return true
    } else {
      return false
    }
  }
  if (keys instanceof Array && keys.length === 0) { // 数组
    return true
  }
}

export default Util
