"use client"
import React, { useEffect, useState } from 'react'
import "./style.css"
import data from "@/_data/db.json";
// import AiOutlineArrowLeft from "react-icons/fa"
import Link from 'next/link';


const SearchPage = () => {
    const [searchValue, setSearchValue] = useState("");
    const { BlogContent, BlogDetail } = data;
    const [blogs, setBlogs] = useState(BlogDetail);


    useEffect(()=>{
        const newData = BlogDetail.filter((item)=>item.BlogContent.startsWith(searchValue));
        if(newData){
            setBlogs(newData);
        }else{
            setBlogs(BlogDetail);
        }
    },[searchValue]);

    return (
        <div className="container">
            <Link href="/" className="back-btn"> နောက်သို့</Link>
            <div className="search-semi-con">
                <div className="search-con">
                    <h3>
                        မြင်မက်ခဲ့သောအိပ်မက်ထဲမှ အဓိကဇာတ်ကောင်များ(သို့)အရာဝတ္ထုများကို မြန်မာစာလုံးပေါင်းဖြင့်
                        အောက်ပါအကွက်လေးထဲ ထည့်ပါ။
                    </h3>
                    <input type="text" name id placeholder="ကခ..." className="search-bar" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                </div>
                <div className="answer-container">

                    {searchValue && blogs.map((item,index) => {
                        let count = index + 1;
                        return (
                            <div key={item.BlogDetail} className="answer-box">
                                <span className="num-box">{count}</span>
                                <p>
                                    {item.BlogContent}
                                </p>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default SearchPage;