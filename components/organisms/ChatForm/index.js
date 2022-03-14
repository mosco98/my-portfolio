export default function ChatForm() {
  return (
    <>
      <h1 className="text-8xl font-bold text-red-400">Let's talk!</h1>

      <div className="mt-1 space-y-1 opacity-75 text-xl">
        <p>
          I'd love to hear from you, whether you just want to shoot the breeze
          or discuss a potential opportunity to achieve great things together.
        </p>

        <p>
          If you simply can't wait to start the conversation, then jot down your
          email address and scribble a few notes and I'd get right back to you.
        </p>
      </div>

      <form className="mt-6 text-center">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="First name" required={true} />
          <input type="email" placeholder="Email" required={true} />
          <textarea
            className="col-span-2"
            placeholder="Message"
            required={true}
          ></textarea>
        </div>

        <button className="px-6 py-2 mt-6 btn-primary space-x-2 flex items-center justify-center text-center self-center">
          <span className="">Send</span>
          <span className="transform rotate-45 -mt-1 opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </span>
        </button>
      </form>
    </>
  )
}
