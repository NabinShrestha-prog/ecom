import React, { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Homeproduct from './home_product'
import { FaEye, FaHeart, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaShoppingCart } from "react-icons/fa";




const Home = () => {
    //product type
    const [newProduct, setNewProduct] = useState([])
    const [featuredProduct, setFeaturedProduct] = useState([])
    const [topProduct, setTopProduct] = useState([])

    //trending product
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
    //filter of trending product
    const filtercate = (x) => {
        const filterproduct = Homeproduct.filter((curElm) => {
            return curElm.type === x
        })
        setTrendingProduct(filterproduct)
    }
    //all Trending product
    const allTrendingProduct = () => {
        setTrendingProduct(Homeproduct)
    }
    //product type
    useEffect(() => {
        productcategory()
    })
    //new product
    const productcategory = () => {
        const newcategory = Homeproduct.filter((x) => {
            return x.type === 'new'
        })
        setNewProduct(newcategory)

        //featured product
        const featuredcategeory =Homeproduct.filter((x)=>{
            return x.type ==='featured'
        })
        setFeaturedProduct(featuredcategeory)

         //top product
         const topcategory =Homeproduct.filter((x)=>{
            return x.type ==='top'
         })
         setTopProduct(topcategory)
        
    }

    return (
        <>
            <div className="home">
                <div className="top_banner">
                    <div className="content">
                        <h3>Silver aluminium</h3>
                        <h2>Apple Watch</h2>
                        <p>30% off at your first order</p>
                        <Link to='/shop' className='link'>Shop Now</Link>
                    </div>
                </div>
                <div className="trending">
                    <div className="container">
                        <div className="left_box">
                            <div className="header">
                                <div className="heading">
                                    <h2 onClick={() => allTrendingProduct()}>Trending Product</h2>
                                </div>
                                <div className="cate">
                                    <h3 onClick={() => filtercate('new')}>New</h3>
                                    <h3 onClick={() => filtercate('featured')}>Featured</h3>
                                    <h3 onClick={() => filtercate('top')}>top selling</h3>

                                </div>
                            </div>
                            <div className="products">
                                <div className="container">
                                    {
                                        trendingProduct.map((curElm) => {
                                            return (
                                                <>
                                                    <div className="box">
                                                        <div className="img_box">
                                                            <img src={curElm.image} alt="" ></img>
                                                            <div className="icon">
                                                                <div className="icon_box">
                                                                    <FaEye />
                                                                </div>
                                                                <div className="icon_box">
                                                                    <FaHeart />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="info">
                                                            <h3>{curElm.name}</h3>
                                                            <p>${curElm.price}</p>
                                                            <button className="btn">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <button>Show More</button>
                            </div>
                        </div>
                        <div className="right_box">
                            <div className="right_container">
                                <div className="testimonial">
                                    <div className="head">
                                        <h3>Our Testimonials</h3>
                                    </div>
                                    <div className="detail">
                                        <div className="img_box">
                                            <img src='image/T1.avif' alt="testimonial" />
                                        </div>
                                        <div className="info">
                                            <h3>Maya Shrestha</h3>
                                            <h4>Web Designer</h4>
                                            <p>A web designer is a professional who focuses on creating the visual aesthetics and layout of websites. They combine elements of graphic design, user experience (UX), and user interface (UI) design to craft engaging and functional sites. Web designers use tools like Adobe Photoshop, Sketch, and Figma to design website layouts, choose color schemes, and create graphics. Their work ensures that websites are visually appealing, easy to navigate, and optimized for various devices, ultimately enhancing user experience and interaction.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="newsletter">
                                    <div className="head">
                                        <h3>News letter</h3>
                                    </div>
                                    <div className="form">
                                        <p>Join our Mailing list</p>
                                        <input type="email" placeholder='E-mail' autoComplete='off' />
                                        <button>Subscribe</button>
                                        <div className="icon_box">
                                            <div className="icon">
                                                <FaFacebook />
                                            </div>
                                            <div className="icon">
                                                <FaTwitter />
                                            </div>
                                            <div className="icon">
                                                <FaInstagram />
                                            </div>
                                            <div className="icon">
                                                <FaYoutube />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="banners">
                    <div className="container">
                        <div className="left_box">
                            <div className="box">
                                <img src="image/Multi-Banner-1.avif" alt="Banner no 1" />
                            </div>
                            <div className="box">
                                <img src="image/Multi-banner-2.avif" alt="Banner no 2" />
                            </div>
                        </div>
                        <div className="right_box">
                            <div className="top">
                                <img src="image/Multi-Banner-3.webp" alt="Banner no 3" />
                                <img src="image/Multi-banner-4.avif" alt="Banner no 4" />
                            </div>
                            <div className="bottom">
                                <img src="image/Multi-Banner-5.webp" alt="Banner no 5" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_type">
                    <div className="container">
                        <div className="box">
                            <div className="header">
                                <h2>New Products</h2>
                            </div>
                            {
                                newProduct.map((curElm) => {
                                    return (
                                        <>
                                            <div className="productbox">
                                                <div className="img-box">
                                                    <img src={curElm.image} alt="" />
                                                </div>
                                                <div className="detail">
                                                    <h3>{curElm.name}</h3>
                                                    <p>${curElm.price}</p>
                                                    <div className="icon">
                                                        <button><FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button><FaShoppingCart /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                        <div className="box">
                            <div className="header">
                                <h2>Featured  Products</h2>
                            </div>
                            {
                                featuredProduct.map((curElm) => {
                                    return (
                                        <>
                                            <div className="productbox">
                                                <div className="img-box">
                                                    <img src={curElm.image} alt="" />
                                                </div>
                                                <div className="detail">
                                                    <h3>{curElm.name}</h3>
                                                    <p>${curElm.price}</p>
                                                    <div className="icon">
                                                        <button><FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button><FaShoppingCart /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                        <div className="box">
                            <div className="header">
                                <h2>Top Products</h2>
                            </div>
                            {
                                topProduct.map((curElm) => {
                                    return (
                                        <>
                                            <div className="productbox">
                                                <div className="img-box">
                                                    <img src={curElm.image} alt="" />
                                                </div>
                                                <div className="detail">
                                                    <h3>{curElm.name}</h3>
                                                    <p>${curElm.price}</p>
                                                    <div className="icon">
                                                        <button><FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button><FaShoppingCart /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>
        </>)
}

export default Home