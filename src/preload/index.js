import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  // 读取目录中的所有图片文件
  readDirImages: ({ callback, data }) => {
    // 接收主进程返回的目录文件列表
    ipcRenderer.once('readDirImages-reply', (event, info) => {
      callback(event, info)
    })

    ipcRenderer.send('readDirImages', data)
  },
  chooseDir: ({ callback }) => {
    ipcRenderer.once('chooseDir-reply', (event, info) => {
      callback(event, info)
    })
    ipcRenderer.send('chooseDir')
  },
  imageCompress: (data) => {
    return ipcRenderer.invoke('imageCompress', data)
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
