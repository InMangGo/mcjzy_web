const localData = {
  // 获取本地存储
  getItem: key => {
    return JSON.parse(localStorage.getItem(key))
  },

  // 设置本地存储
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  },

  // 删除本地存储
  deleteItem: key => {
    localStorage.removeItem(key)
  }
}

export default {
  localData: localData
}
