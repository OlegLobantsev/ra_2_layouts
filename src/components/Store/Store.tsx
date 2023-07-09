import { useState } from 'react';
import './store-style.css';
import products from '../../data.json';
import IconSwitch from '../IconSwitch/IconSwitch';
import ListView from '../ListView/ListView';
import CardsView from '../CardsView/CardsView';
import { IProduct } from '../../interface/IProduct';
import { v1 as uuidv1 } from 'uuid';

const Store = () => {
  const [viewList, setViewList] = useState<boolean>(true);
  

  return (
    <div>
      <IconSwitch
        icon={viewList ? "view_list" : "view_module"}
        onSwitch={() => setViewList(prev => !prev)}
      />
      <div className="products">
        {
          products.map((product: IProduct) => (
            viewList
              ? <ListView product={product} key={uuidv1()}/>
              : <CardsView product={product} key={uuidv1()}/>))
        }
      </div>
    </div>
  )
}

export default Store