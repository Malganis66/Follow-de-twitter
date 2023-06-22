import './styles/App.css'
import FollowCard from './FollowCard'

function App () {
  return (
    <section className='App'>
      <FollowCard
        initialIsFollowing
        userName='bluueweb'
        name='Bluu Enrique Sanz'
      />
      <FollowCard
        isFollowing={false}
        userName='bluueweb'
        name='Bluu Enri'
      />
    </section>
  )
}

export default App
