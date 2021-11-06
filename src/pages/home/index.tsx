 import { useSelector } from "react-redux"

const Home: React.FC = () => {

    const dd = useSelector( state => state )
    console.log(dd);
    
    return (
        <div>home</div>
    )
}

export default Home