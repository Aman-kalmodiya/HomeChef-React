import { useState } from 'react';
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu';
import Header from '../../component/Header/Header';
import './Home.css'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay';
import AppDownload from '../../component/AppDownload/AppDownload';

function Home(){
     const[category,setCategory] = useState("All")
    return(  
        <div>
            <Header/>
            <ExploreMenu category = {category} setCategory={setCategory}/>
            <FoodDisplay category = {category}/>
            <AppDownload/>
        </div>
    )
}
export default Home;