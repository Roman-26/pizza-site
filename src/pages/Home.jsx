import React from 'react'

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Sceleton from '../components/PizzaBlock/Sceleton';

function Home() {
  const [items, setItems] = React.useState([])
  const [isLoad, setisLoad] = React.useState(true)
  const [categoryID, setCategoryID] = React.useState(0)
  const [sortType, setSortType] = React.useState(0)


  React.useEffect(() => {
    setisLoad(true)
    fetch('https://6301e1d8e71700618a3f37cd.mockapi.io/items?category='+categoryID)
    .then((res) => { return res.json() })
    .then((json) => { setItems(json)
      setisLoad(false) })
  }, [categoryID])

  return (
    <>
    <div className="container">
      <div className="content__top">
            <Categories value={categoryID} onClickCategory={(i) => setCategoryID(i)}/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoad ? 
              [...Array(8)].map((_, index) => <Sceleton key={index}/>):
              items.map((obj, index) => <PizzaBlock key={index} {...obj}/>)
            }
          </div>
          </div>
    </>
  )
}

export default Home