import './list-view-style.css';
import { IProduct } from '../../interface/IProduct';

const ListView: React.FC<ListViewProps> = ({product}) => {
  return (
    <div className='list-view'>
      <img className='list-view__image' src={product.img} alt="image" />
      <h3 className="list-view__name">{product.name}</h3>
      <span className="list-view__color">{product.color}</span>
      <span className="list-view__price">${product.price}</span>
      <button className="list-view__btn">Add to cart</button>
    </div>
  )
}

export default ListView

type ListViewProps = {
  product: IProduct
}