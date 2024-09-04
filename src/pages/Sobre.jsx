import Menu from "../Components/Menu";

export default function Sobre(){
  return (
    <div className="">
      <h1 className="font-bold text-3xl">Sobre</h1>
      <Menu/>
      <div className="flex justify-center items-center">
        <div className="w-full flex justify-center items-center bg-blue-800 p-6">
          <div className="bg-blue-500 w-96 h-80 p-4">
            <p className="flex justify-center font-bold mb-4">Sobre:</p>
            <p className="font-semibold text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius, neque repellat magnam ex doloribus recusandae laboriosam eum vel, aut officia! Mollitia id quam dolore tempore consequuntur alias repellendus delectus.</p>
          </div>
        </div>
      </div>
    </div>
  )
}