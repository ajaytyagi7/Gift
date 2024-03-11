import React from 'react'

const Home = () => {
  return (
    <div className='contanier-fluid'>
        <header >
            <img className='w-100 header-img img-fluid' src="https://images.pexels.com/photos/1303085/pexels-photo-1303085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <h1></h1>
        </header>
        <div className='container-fluid p-3'>
            <h2 className='text-center my-3 fw-bold'> Treasured Connections</h2>  
            <div className='row'>
                <div className='col-md-3'>
                    <div className=''>
                        <div className='card-body'>
                           <img className='img-fluid rounded-pill' src="https://img.freepik.com/free-photo/assortment-teacher-s-day-elements_23-2149044963.jpg?t=st=1710140963~exp=1710144563~hmac=4b66c31943e2486614f84778bd0a2f9a3009ae6f5c6929fcd881614eb62559b8&w=996" alt="" />
                            <p className='text-center py-2'>Photo Frame</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className=''>
                        <div className='card-body'>
                           <img className='img-fluid rounded-pill'  src="https://img.freepik.com/free-photo/square-frame-amidst-valentine-s-day-stuff_23-2147736929.jpg?t=st=1710140993~exp=1710144593~hmac=ceb3359b41aecd500a6cd04a2fb207c527d9f225273cf19891b4efeed0750915&w=996" alt="" />
                           <p className='text-center py-2'>Photo Frame</p>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className=''>
                        <div className='card-body'>
                           < img className='img-fluid rounded-pill' src="https://img.freepik.com/free-photo/cheerful-woman-getting-present-from-man_23-2147736663.jpg?t=st=1710142382~exp=1710145982~hmac=c431cd625223384e06e459b35ac99f162ed0522dd88674d7bf08e9d2dd5bec36&w=996" alt="" />
                           <p className='text-center py-2'>Ring Gift</p>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className=''>
                        <div className='card-body'>
                           <img className='img-fluid rounded-pill' src="https://img.freepik.com/free-photo/valentine-s-gift_53876-14595.jpg?t=st=1710142449~exp=1710146049~hmac=cb9ec70dc7f1dfa777df5cc90f9c2567e85aa60489c8c95fb05f688b89d95ada&w=996" alt="" />
                           <p className='text-center py-2'>Ring Gift</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='row p-5'>
                <div className="col-md-6">
                    <img className='img-fluid' src="https://img.freepik.com/free-photo/young-girl-with-present_144627-45101.jpg?t=st=1710170176~exp=1710173776~hmac=0029b0490ebfc19fcad8abda922ac3388caa4ff6585a937d2c6104f903f1b2fd&w=996" alt="" />
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src="https://img.freepik.com/free-photo/hands-holding-box-with-ring-with-blue-stone_1208-340.jpg?t=st=1710148832~exp=1710152432~hmac=c3406f2ff6a1cba4a6c7a74feab0ffbd0c11d46e63543c1ff2e59664d613b127&w=996" alt="" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Home