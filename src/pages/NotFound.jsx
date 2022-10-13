import React from 'react'

import style from '../components/NotFoundBlock/NotFoundBlock.module.scss'

function NotFound() {
  return (
    <div>
        <h1 className={style.root}
        > <span>😕</span>
          Нічого не знайдено  :(</h1>
        <p className={style.description}>На жаль ця сторінка зараз відсутня</p>
    </div>
  )
}

export default NotFound