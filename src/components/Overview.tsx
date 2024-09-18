
export default function Overview() {

  function handleClick() {
    console.log('hello')
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sint sunt veritatis fugiat sit magnam rem amet vitae? Perspiciatis accusantium vero vel hic perferendis. Eaque accusantium totam deserunt nemo aut.
      </p>
      <button onClick={handleClick}>Click me</button>
    </>
  )
}
