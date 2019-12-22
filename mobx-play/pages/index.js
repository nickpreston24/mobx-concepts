import React from 'react'
import Layout from './components/Layout'

const Home = () => {
  return (
    <>
      <div className="hero">
        <Layout>
          <div>
            <h1>Hello, World!</h1>
            <p>Adipisicing magna quis aliquip nostrud qui. Et anim amet nostrud eu nulla pariatur in ut in voluptate incididunt amet. Commodo reprehenderit fugiat occaecat ut adipisicing quis laborum cupidatat nisi aliquip culpa do. Ut deserunt non fugiat amet enim eiusmod nulla consectetur incididunt commodo elit. Sit aute voluptate sint sunt Lorem sit laboris velit. Dolore eu non commodo nulla dolore voluptate ex id.</p><br />
            <p>Nulla magna cupidatat aute sit nulla adipisicing adipisicing sit ullamco et elit Lorem. Aliqua labore aliqua nostrud ut. Tempor eu nisi duis mollit excepteur magna anim duis proident consectetur nulla. Qui elit consequat laborum qui eu ullamco elit cupidatat occaecat laborum dolore occaecat. Nostrud culpa duis aute magna dolore eiusmod deserunt. Aliqua occaecat proident qui nisi irure qui ea cupidatat. Cillum labore ad labore eu sint sunt dolore laborum.</p>
          </div>
        </Layout>
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
