import {connect} from 'react-dom'
import Home from '../components/Home'
import { addToCart } from '../Services/Actions/actions';

const mapStateToProps=state =>({

})
const mapDispatchToProps=dispatch=>({
    addtoCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)

//export default Home;