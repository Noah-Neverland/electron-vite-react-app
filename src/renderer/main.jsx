import { createRoot } from 'react-dom/client'
import App from './App'
import { ConfigProvider } from 'antd'
import '@ant-design/v5-patch-for-react-19'
import zhCN from 'antd/locale/zh_CN'
import '@renderer/common/styles/frame.styl'

createRoot(document.getElementById('root')).render(
    <ConfigProvider locale={zhCN}>
        <App />
    </ConfigProvider>
)
