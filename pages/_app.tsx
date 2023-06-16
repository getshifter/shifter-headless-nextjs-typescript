import { FC } from 'react'
import {AppProps} from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import Link from 'next/link'
import {BackTop, Layout, Menu} from 'antd'
// import 'antd/dist';
import '../styles/main.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout className="layout">
      <NextNprogress />
      <Layout.Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <Link href="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/licenses">
              Licenses
            </Link>
          </Menu.Item>
          <Menu.Item>
            <a href="https://github.com/getshifter/headless-example-nextjs-typescript" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Menu.Item>
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
        <BackTop />
      </Layout.Content>
      <Layout.Footer>
        ©︎ 2020 Created by digitalcube
      </Layout.Footer>
    </Layout>
  )
}

export default MyApp
