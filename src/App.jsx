function App() {

  return (
    <>
      <article className='flex items-center text-white text-xs'>
        <header className="flex items-center gap-1">
          <img className="w-12 h-12 rounded-full" src="https://unavatar.io/bluuweb" alt='bluuweb avatar' />
          <div className="flex flex-col">
            <strong className="bg-red-500">Bluuweb noseque</strong>
            <span className="opacity-60">@bluuweb</span>
          </div>
        </header>

        <aside>
          <button className="ml-4 border-0 rounded-full font-bold py-[6px] px-4 bg-yellow-400">Follow</button>
        </aside>
      </article>
    </>
  )
}

export default App
