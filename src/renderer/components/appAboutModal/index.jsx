import { Modal } from 'antd'
import imgLogo from '@renderer/common/images/logo.png'
import imgElectron from '@renderer/common/images/electron.svg'
import imgChrome from '@renderer/common/images/chrome.svg'
import imgNodejs from '@renderer/common/images/nodejs.svg'
import pkg from '@renderer/../../package.json'
import './appAboutModal.styl'

function AppAboutModal({ onClose }) {
  const versions = window.electron ? window.electron.process.versions : null

  return (
    <Modal
      className="M-appAboutModal"
      centered
      width={600}
      styles={{ body: { minHeight: 220 } }}
      maskClosable={false}
      open
      title="关于软件"
      onCancel={() => onClose()}
      footer={null}
    >
      <div className="about-con">
        <div className="logo-con">
          <img src={imgLogo} alt="" height={80} />
          <p>图片压缩小工具 v{pkg.version}</p>
        </div>
        <div className="core-con">
          <p>内核版本：</p>
          <p>
            <img src={imgElectron} alt="" width={20} />
            Electron {versions ? `v${versions.electron}` : '请在Electron中查看'}
          </p>
          <p>
            <img src={imgChrome} alt="" width={20} />
            Chromium {versions ? `v${versions.chrome}` : '请在Electron中查看'}
          </p>
          <p>
            <img src={imgNodejs} alt="" width={20} />
            Nodejs {versions ? `v${versions.node}` : '请在Electron中查看'}
          </p>
        </div>
      </div>
    </Modal>
  )
}

export default AppAboutModal
