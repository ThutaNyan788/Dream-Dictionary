"use client"
import React from 'react'
import data from "@/_data/db.json";
import "./page.css"
import Link from 'next/link';

const Home = () => {
  const { BlogHeader } = data;
  return (
    <div className="container">
      <h1 className="">Dream Dictionary (အိပ်မက် အဘိဓာန်)</h1>

      <div className="search-con">
        <Link href="/search">ရှာရန်</Link>
      </div>

      <div className="choose-container">
        <div className="semi-container">
          {BlogHeader.map((item) => {
            return (
              <Link key={item.BlogId} href={`/details/${item.BlogId}`}>
                <div className="box-container" key={item.BlogId}>

                  <span className="select-box">{item.BlogTitle[2]}</span> နှင့်ပတ်သက်သော အိပ်မက်များ
                </div>
              </Link>

            )
          })}
        </div>
      </div>

    </div>
  )
}

export default Home