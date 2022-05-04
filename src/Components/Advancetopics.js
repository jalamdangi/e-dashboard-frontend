import React,{lazy,Suspense, useEffect, useState} from 'react'
import Hoc from './subcomponent/Hoc'
const Userdata = lazy(() => import('./subcomponent/Userdata'))
const Another = lazy(() => import('./subcomponent/Another'))

 const Advancetopics = () => {
    const [page, setPage] = useState(<>
                                    <Suspense fallback={<h3 className='loader-another'>Another is Loading</h3>}><Another></Another></Suspense>
                                    <Suspense fallback={<h3 className='loader'>User Data Loading</h3>}><Userdata></Userdata></Suspense>
                                    </>)
    const lazyLoading = () =>{
    setPage(<>
              <Suspense fallback={<h3 className='loader-another'>Another is Loading</h3>}><Another></Another></Suspense>
              <Suspense fallback={<h3 className='loader'>User Data Loading</h3>}><Userdata></Userdata></Suspense>
            </>);
    } 
    const higherOrdercomponent = () =>{
      setPage(<>
              <Hoc></Hoc>
              </>);
    }
  return (
    <>
    <div className="row">
    <button onClick={()=>lazyLoading()} className='p-1 btn-danger w-25'>Lazy Loading</button>
    <button onClick={()=>higherOrdercomponent()} className='p-1 btn-primary w-25'>HOC</button>
    <button onClick={demo()} className='p-1 btn-warning w-25'>Lazy Loading</button>
    <button onClick={demo()} className='p-1 btn-success w-25'>Lazy Loading</button>
    </div>
    <div>{page}</div>
     
    </>
  )
}

const demo = () =>{}

export default Advancetopics