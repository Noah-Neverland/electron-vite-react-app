import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import '@ant-design/v5-patch-for-react-19'
import zhCN from 'antd/locale/zh_CN'
import Routers from '@renderer/router'
// 全局样式
import '@renderer/common/styles/frame.styl'

createRoot(document.getElementById('root')).render(
    <ConfigProvider locale={zhCN}>
        <Routers />
    </ConfigProvider>
)
