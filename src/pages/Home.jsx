import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCategoryById } from '../store/categorySlice'

function Home() {

  const { categories } = useSelector(state => state.categoryState)


  let dispatch = useDispatch()

  const deleteCategory = (id) => {
    dispatch(deleteCategoryById(id))
  }

  return <>
    <ul>
      {
        categories.map(item => {
          return <li key={item.id}>
            {item.name}
            <button onClick={() => deleteCategory(item.id)}>Delete</button>
          </li>
        })
      }
    </ul>
  </>
}

export default Home