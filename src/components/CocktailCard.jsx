import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailCard';

const CocktailCard = ({image,name,id,info,glass}) =>
{
    return <Wrapper>
        <div className="img-container">
            <img src={image} alt={name} className='img' />
        </div>
        <div className="footer">
            <h4 style={{textAlign:'center'}}>{name}</h4>
            <h5 style={{textAlign:'center'}}>{glass}</h5>
            <p style={{textAlign:'center'}}>{info}</p>
            <div style={{textAlign:'right'}}>
                <Link to={`/cocktail/${id}`}  className='btn'>
                    Details
                </Link>
            </div>
        </div>
    </Wrapper>
};

export default CocktailCard;