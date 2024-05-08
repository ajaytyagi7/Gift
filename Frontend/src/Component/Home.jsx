import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='contanier-fluid '>
        <header className='header text-white '>
            <div className='p-4 input-group w-50 mx-auto'>
                <input type="text" className='form-control  ' placeholder='Search....' />
                <button style={{backgroundColor:'#6b72fc'}}  className=' btn btn-white fw-bold'>Search</button>
               
            </div>
        
            <div className=' mx-5 p-2 '>
                <h1 className=' fw-bold display-3 '>Gourmet gift hampers <br/>
                for all occasions</h1>
                <Link className='text-decoration-none' to={'/ListGift '}><button className='cta  mt-4 fw-bold border border-dark mx-3'>Shop Now</button></Link>
            </div>
        </header>
        <div className="container-fluid py-3">
            <div className="row gy-3">
                <div className="col-md-2">
                    <div className='card-hover'>
                        <img className='img-fluid ' src="https://img.freepik.com/free-photo/woman-receives-gift-from-her-boyfriend_155003-11570.jpg?t=st=1710252376~exp=1710255976~hmac=e83e0e01ad991b400c597d8a0fcaab19adfad50fa00a70da2e86b0bee6e1eeb3&w=996" alt="" />
                        <p className='text-center py-2'>Anniversary</p>

                    </div>
                </div>
                <div className="col-md-2">
                    <div className='card-hover'>
                        <img className='img-fluid' src="https://img.freepik.com/free-photo/birthday-cake-with-colored-candles-blue-background-ai-generative_123827-24032.jpg?t=st=1710252681~exp=1710256281~hmac=0abdb7aab03769c7542964bdaff63a519b9ab5706e3b063304c9b57ff27c24fe&w=996" alt="" />
                        <p className='text-center py-2'>Birthday</p>

                    </div>
                </div>
                <div className="col-md-2">
                    <div className='card-hover'>
                        <img className='img-fluid' src="https://img.freepik.com/free-photo/front-view-giving-presents-traditional-indian-wedding-ceremony_8353-9780.jpg?t=st=1710252472~exp=1710256072~hmac=b2e648bf792f3b86febea9625c0b5cc35417df633aa04469d04e4295d8ef5124&w=996" alt="" />
                        <p className='text-center py-2'>Wedding Gift</p>

                    </div>
                </div>
                <div className="col-md-2">
                    <div className='card-hover'>
                        <img className='img-fluid' src="https://img.freepik.com/free-photo/flat-lay-gorgeous-flowers-composition_23-2149045280.jpg?t=st=1710252528~exp=1710256128~hmac=518a05902d66e392b3487e43154f55c282c0a9c432196eff83ca302a232db898&w=996" alt="" />
                        <p className='text-center py-2'>Best of Flower</p>

                    </div>
                </div>
                <div className="col-md-2">
                    <div className='card-hover'>
                        <img className='img-fluid' src="https://img.freepik.com/free-photo/young-lady-giving-present-box-guy-settee-room_23-2147987557.jpg?t=st=1710252592~exp=1710256192~hmac=d9844fa8c52ec091fa8c2dbefebee5c2934a7c87b26686ae4acaf99a1263f2ac&w=996" alt="" />
                        <p className='text-center py-2'>For Him</p>

                    </div>
                </div>
                <div className="col-md-2">
                    <div className='card-hover'>
                        <img className='img-fluid' src="https://img.freepik.com/free-photo/young-girl-holding-red-gift-box-looking_114579-21986.jpg?t=st=1710252638~exp=1710256238~hmac=9786b8fbd444b20846aa89beed9759d9149002131256c3eac36a380c6cb97859&w=996" alt="" />
                        <p className='text-center py-2'>For Her</p>

                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid '>
            <h2 className='text-center mb-4 fw-bold'> Treasured Connections</h2>  
            <div className='row gy-3'>
                <div className='col-md-3'>
                    <div className='card-hover'>
                        <div className='card-body'>
                           <img className='img-fluid rounded-pill' src="https://img.freepik.com/free-photo/assortment-teacher-s-day-elements_23-2149044963.jpg?t=st=1710140963~exp=1710144563~hmac=4b66c31943e2486614f84778bd0a2f9a3009ae6f5c6929fcd881614eb62559b8&w=996" alt="" />
                            <p className='text-center py-2'>Photo Frame</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card-hover'>
                        <div className='card-body'>
                           <img className='img-fluid rounded-pill'  src="https://img.freepik.com/free-photo/square-frame-amidst-valentine-s-day-stuff_23-2147736929.jpg?t=st=1710140993~exp=1710144593~hmac=ceb3359b41aecd500a6cd04a2fb207c527d9f225273cf19891b4efeed0750915&w=996" alt="" />
                           <p className='text-center py-2'>Photo Frame</p>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card-hover'>
                        <div className='card-body'>
                           < img className='img-fluid rounded-pill' src="https://img.freepik.com/free-photo/cheerful-woman-getting-present-from-man_23-2147736663.jpg?t=st=1710142382~exp=1710145982~hmac=c431cd625223384e06e459b35ac99f162ed0522dd88674d7bf08e9d2dd5bec36&w=996" alt="" />
                           <p className='text-center py-2'>Ring Gift</p>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card-hover'>
                        <div className='card-body'>
                           <img className='img-fluid rounded-pill' src="https://img.freepik.com/free-photo/valentine-s-gift_53876-14595.jpg?t=st=1710142449~exp=1710146049~hmac=cb9ec70dc7f1dfa777df5cc90f9c2567e85aa60489c8c95fb05f688b89d95ada&w=996" alt="" />
                           <p className='text-center py-2'>Ring Gift</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='row gy-3'>
                <div className="col-md-6">
                    <img className='img-fluid' src="https://img.freepik.com/free-photo/young-girl-with-present_144627-45101.jpg?t=st=1710170176~exp=1710173776~hmac=0029b0490ebfc19fcad8abda922ac3388caa4ff6585a937d2c6104f903f1b2fd&w=996" alt="" />
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src="https://img.freepik.com/free-photo/hands-holding-box-with-ring-with-blue-stone_1208-340.jpg?t=st=1710148832~exp=1710152432~hmac=c3406f2ff6a1cba4a6c7a74feab0ffbd0c11d46e63543c1ff2e59664d613b127&w=996" alt="" />
                </div>

            </div>
        </div>
        <div className='  container-fluid  mt-3'>
            <img className='img-fluid mx-auto home-66img' src="https://img.freepik.com/premium-photo/bottle-wine-with-wineglass-gift-box-rusty-brown-background-panoramic-top-view-with-copy-space-your-text_96727-1802.jpg?w=1380" alt="" />
        </div>
        <div className='p-4'>
            <h4 className='mx-3'>Cataogry</h4>
            <div className='row gy-3 mt-3'>
                <div className='col-md-3'>
                    <div className='card-hover'>
                        <img className='img-fluid' src="https://img.freepik.com/free-photo/front-view-kid-playing-with-wooden-toyds_23-2149357210.jpg?t=st=1710229552~exp=1710233152~hmac=f7923c97f42b5ffaf0b74cee8b26c02dba6f5cc7f8694b6384c8ea093a64dad4&w=996 " alt="" />
                        <p className='text-center py-2'>Kid's Toys </p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card-hover'>
                        <img className='img-fluid'  src="https://img.freepik.com/free-photo/makeup-supplies-near-notebooks-glasses_23-2147779000.jpg?t=st=1710229624~exp=1710233224~hmac=453f8ce1e25d5bf0c7aba0cbd7a1431f9ae109b8c9168f55e4755b970b90e90d&w=996" alt="" />
                        <p className='text-center py-2'>Fashion Accessories</p>

                    </div>
                </div>
                <div className="col-md-3">
                    <div className='card-hover' >
                        <img className='img-fluid' src="https://img.freepik.com/free-photo/closeup-beauty-portrait-topless-woman-with-perfect-skin-natural-makeup_343596-8255.jpg?t=st=1710229663~exp=1710233263~hmac=3748c07921434da736b5f287a74a78ede9d9caff0719b0a836a80a251212e225&w=996" alt="" />
                        <p className='text-center py-2'>Beauty & Wellness</p>
                        
                    </div>
                </div>
                <div className="col-md-3">
                    <div className='card-hover'>
                        <img className='img-fluid' src="https://img.freepik.com/free-photo/gorgeous-arrangement-flowers-wallpaper_23-2149057015.jpg?t=st=1710229751~exp=1710233351~hmac=71614269463b55b4b31437d18f7bea2588e13fac665b7a0dca0bcea0ed1ba19b&w=996" alt="" />
                        <p className='text-center py-2'>Flowers</p>
                        
                    </div>
                </div>
            </div>
                
        </div>
        <div className="container-fluid ">
            <h4>MEMORABLE GESTURES </h4>
            <div className="row gy-3">
                <div className="col-md-3">
                    <div className="card shadow card-hover">
                        <img className='img-fluid' src="https://img.freepik.com/free-photo/man-holds-red-box-with-wedding-rings_8353-1444.jpg?t=st=1715160621~exp=1715164221~hmac=54995650ced111367cfe6dd6b284b601cc53deca142c1af63f6fbf83ffa188d8&w=996" alt="" />
                        <p className='text-center py-2'>Photo Frame</p>
                        <p className='text-center'>₹ 200.00</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow card-hover">
                        <img className='img-fluid' src="https://img.freepik.com/free-photo/mothers-day-composition-with-gift-box-flowers_23-2147776075.jpg?t=st=1715160420~exp=1715164020~hmac=44de48cbf68c4b3b3128f64e1cce18ce59458710bb3b988c644d4e3911522534&w=996" alt="" />
                        <p className='text-center py-2'>Flower Frame</p>
                        <p className='text-center'>₹ 400.00</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow card-hover">
                        <img className='img-fluid' src="https://img.freepik.com/free-photo/view-santa-claus-bag-with-presents-toys_23-2149660799.jpg?t=st=1715160539~exp=1715164139~hmac=765df230536eee8ed20715b9e178fd0a913b555cd6e3117fc4c97e8307dd1f4e&w=996" alt="" />
                        <p className='text-center py-2'>Teddy Bear</p>
                        <p className='text-center'>₹ 500.00</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow card-hover">
                        <img className='img-fluid' src="https://img.freepik.com/free-photo/top-view-female-hands-holding-gift-box-with-wonderful-fresh-flowers-such-as-rose-gardenzia-tulip-daisy-isolated-blue-wooden-background_141793-52756.jpg?t=st=1715160461~exp=1715164061~hmac=28b9acb442b06be1787cd688944193a6e859c759a82a8e7203471f7f8885bcf9&w=996" alt="" />
                        <p className='text-center py-2'>Flower Buffet</p>
                        <p className='text-center'>₹ 800.00</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid bg-warning  py-3 mt-3">
            <div className="row  p-5">
                <div className="col-md-3">
                    <p className='text-center '><i class="fa-solid fa-truck"></i></p>
                    <p className='text-center fw-bold'>FAST DELIVERY</p>
                    <p className='text-center'>We deliver gifts all over India</p>
                </div>
                <div className="col-md-3">
                    <p className='text-center '><i class="fa-regular fa-heart"></i></p>
                    <p className='text-center fw-bold'>MADE IN INDIA</p>
                    <p className='text-center'>All our products are made in India.</p>
                </div>
                <div className="col-md-3">
                    <p  className='text-center '><i class="fa-solid fa-bag-shopping"></i></p>
                    <p className='text-center fw-bold'>SECURE PAYMENT</p>
                    <p className='text-center'>Your payment information is processed securely.</p>
                </div>
                <div className="col-md-3">
                    <p className='text-center'><i class="fa-regular fa-envelope"></i></p>
                    <p className='text-center fw-bold'>CONTACT US</p>
                    <p className='text-center'>Need to contact us? Just send us an e-mail at ajaytyagi9120@gmail.com</p>
                </div>
            </div>
        </div>
        <div className='p-5 container-fluid'>
            <h1 className='text-center'>What’s The Occasion?</h1>
            <h5 className='text-center'>elevate every moment with thoughtful gifting solutions</h5>
            <div className="row  mx-auto">
                <div className="col-md-3">
                    <div className="p-5 card-hover">
                        <div className="card-body">
                            <img className='mx-auto img-fluid' src="https://thegiftstudio.com/cdn/shop/files/Birthday.svg?v=1687520780" alt="" />
                        </div>
                        <h5 className='mx-4 mt-3'>Birthdays</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="p-5 card-hover">
                        <div className="card-body">
                            <img src="https://thegiftstudio.com/cdn/shop/files/Anniversary.svg?v=1687520781" alt="" />
                        </div>
                        <h5 className='mx-4 mt-3'>Anniversary</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="p-5 card-hover">
                        <div className="card-body">
                            <img src="https://thegiftstudio.com/cdn/shop/files/Housewarming.svg?v=1687520781" alt="" />
                        </div>
                        <h5 className='mx-4 mt-3'>Housewarming</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="p-5 card-hover">
                        <div className="card-body">
                            <img src="https://thegiftstudio.com/cdn/shop/files/Weddings.svg?v=1687520781" alt="" />
                        </div>
                        <h5 className='mx-4 mt-3'>Weddings</h5>
                    </div>
                </div>
            </div>
            <div className="row  mx-auto">
                <div className="col-md-3">
                    <div className="p-5 card-hover">
                        <div className="card-body">
                            <img src="https://thegiftstudio.com/cdn/shop/files/Baby_Shower.svg?v=1687520780" alt="" />
                        </div>
                        <h5 className='mx-4 mt-3'>Baby Shower</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="p-5 card-hover">
                        <div className="card-body">
                            <img src="https://thegiftstudio.com/cdn/shop/files/Congratulations.svg?v=1687520781" alt="" />
                        </div>
                        <h5 className='mx-4 mt-3'>Congratulations</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="p-5 card-hover">
                        <div className="card-body">
                            <img src="https://thegiftstudio.com/cdn/shop/files/Farewell.svg?v=1687520781" alt="" />
                        </div>
                        <h5 className='mx-5 mt-3'>Farewell</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="p-5 card-hover">
                        <div className="card-body">
                            <img src="https://thegiftstudio.com/cdn/shop/files/Get_Well_Soon.svg?v=1687520781" alt="" />
                        </div>
                        <h5 className='mx-4 mt-3'>Get Well Soon</h5>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="row p-5  bg-warning-subtle">
                <div className="col-md-6 p-5">
                    <img className='img-fluid' src="https://thegiftstudio.com/cdn/shop/files/wedding_gift.jpg?v=1687527585&width=750" alt="" />
                </div>

                <div className="col-md-6 p-5 mt-5 ">
                    <div className="   ">
                        <div className="card-body">
                         <h1 className='text-center mt-5 '>Wedding Gifting</h1>
                           <h5 className='text-center mt-4 '>Celebrate their union with timeless elegance. Explore our curated collection of enchanting gifts, perfect for capturing the essence of their special day. Whether you're a guest or the happy couple, find the perfect expression of love and congratulations at The Gift Studio.</h5> 
                            <button className='btn btn-outline-dark mt-5 mb-5'>Enquire Now</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Home