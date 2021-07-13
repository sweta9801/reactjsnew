import React from 'react'

function Home(props) {
    return (
        <div>
           <div className="add-to-cart">
               <span className="cart-count">{props.data.length}</span>
               <img src="/home/ts/Downloads/cart1.jpg" />
           </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                <img src="\home\ts\Downloads\pic1.png" alt="i-phone" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                        <button className="remove-cart-btn"
                    onClick={
                        ()=>{props.addToCartHandler()}
                        }>
                        Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home