import { OnClick } from '..'

export function PWAPromptBanner({ onClick }: OnClick) {
  return (
    <section className='bg-slate-600 w-full p-32'>
      <div className=' absolute inset-10 bg-slate-100 p-16'>
        Keep App, For Offline & Quick Access!
      </div>
      <div>
        <button onClick={onClick} className='bg-orange-900'>
          Install
        </button>
      </div>
    </section>
  )
}