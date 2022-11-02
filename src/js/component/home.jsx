import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Welcome from "./Welcome.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
        <Navbar/>
		<Welcome/>
		<Card/>
		{/* <Card title="dog"/>
		<Card title="cat"/>
		<Card title="dog2"/>
		<Card title="cat2"/> */}
		<Footer/>
		</div>
	);
};

export default Home;
