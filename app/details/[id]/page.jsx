"use client"
import React from 'react'
import data from "@/_data/db.json";
import "./style.css"
import { useParams } from 'next/navigation'
import Link from 'next/link';


const DetailPage = () => {
    const { id } = useParams();
    const { BlogDetail ,BlogHeader} = data;
    const details = BlogDetail.filter((item) => item.BlogId == id);
    const {BlogTitle} = BlogHeader.filter((item)=> item.BlogId == id)[0];
    
    return (
        <div className="container">
            <Link href="/" className="back-btn"> နောက်သို့</Link>
            <h1>{BlogTitle}</h1>
            <div className="answer-container">
                {details.map((blog,index) => {
                    let count = index + 1;
                    const {BlogDetailId,BlogContent} = blog;
                    return (
                        <div key={BlogDetailId} className="answer-box">
                            <span className="num-box">{count}</span>
                            <p>
                                {BlogContent}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>



    )
}

export default DetailPage