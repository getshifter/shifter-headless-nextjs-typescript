import { FC } from 'react'
import {AppProps} from 'next/app'
import {Layout, Menu} from 'antd'
import 'antd/dist/antd.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout className="layout">
      <Layout.Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>nav 1</Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content style={{ padding: '30px 50px 0' }}>
      <div style={{
        minHeight: '280px',
        background: '#fff',
        padding: '24px',
      }}>
        <Component {...pageProps} />
        </div>
      </Layout.Content>
      <Layout.Footer>
        ©︎ 2020 Created by digitalcube
      </Layout.Footer>
    </Layout>
  )
}

export default MyApp
