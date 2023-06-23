import { useState } from 'react'

export default ({ children, userName, initialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='flex items-center gap-3 text-white text-xs justify-between'>
      <header className='flex items-center gap-1'>
        <img
          className='w-12 h-12 rounded-full'
          src={`https://unavatar.io/${userName}`}
          alt='bluuweb avatar'
        />
        <div className='flex flex-col'>
          <strong>{children}</strong>
          <span className='opacity-60'>{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Stop following</span>
        </button>
      </aside>
    </article>
  )
}
