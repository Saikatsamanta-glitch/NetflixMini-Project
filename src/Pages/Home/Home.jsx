import React, { useEffect,useState } from 'react';
import Cards from '../../Components/Cards';
import axios from 'axios'
import {useSelector} from 'react-redux';
const Home = () => {
    const [moviedata,setMoviedata]=useState([]);
    
    useEffect(() => {
            axios('./data.json')
            .then((myJson) => {setMoviedata(myJson.data);});
    }, []);

    const search = useSelector(state=> state.val);
    
    return (
        <>
            <h1 className='text-center'> Welcome to <span style={{ color: "red" }}> Netflex mini app 🎉</span></h1>
            <hr />
            <div className="container gridss">
            {
                moviedata.map((val,i)=>{
                    if(val.name.toLowerCase().includes(search.toLowerCase()))
                    {
                        return <Cards img={val.img} name={val.name} key={i} />
                    }
                })
            }    
            </div>
        </>
    );
}
export default Home;
