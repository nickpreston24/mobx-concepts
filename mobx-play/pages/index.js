import React from 'react'
import Layout from './components/Layout'
import StoreProvider from './/contexts/StoresContext'

const Home = () => {
  return (
    <>
      <div className="hero">
        <StoreProvider>
          <Layout>
            <div>
              <h1>Hello, World!</h1>
              <p>This is a sample project for showing off mobx with Typescript.  Powered by NextJS's wonderful routing (and much, much more)!</p>
            </div>
          </Layout>
        </StoreProvider>
      </div>
      <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
    </>
  )
}

export default Home
