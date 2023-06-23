import './styles/App.css'
import FollowCard from './FollowCard'

const users = [
  {
    userName: 'Jamilton',
    name: '@jamilton',
    isFollowing: true
  },
  {
    userName: 'Miguel',
    name: '@miguel',
    isFollowing: false
  }
]

function App () {
  return (
    <section className='App'>
      {users.map(({ name, userName, isFollowing }) => {
        return (
          <FollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
            {name}
          </FollowCard>
        )
      })}
    </section>
  )
}

export default App
