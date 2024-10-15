import '../ComponentStyles/LazyLoading.css'

function LazyLoadingReviews() {
    const arr = [1,2,3,4,5];
    
  return (
    <>
    {arr.map((index) => {
        return (
            <div className="frame" key={index}>
        <div className='image glare'></div>
        <article>
            <div className='game-title glare'></div>
            <div className='stars-username'>
                <div className='stars glare'></div>
                <div className="username glare"></div>
            </div>
            <div className="title glare"></div>
            <div className="review glare"></div>
            <div className="review glare"></div>
        </article>
        <div className="vote">

        </div>
    </div>
        )
    })}
    </>
  )
}

export default LazyLoadingReviews